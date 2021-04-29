import React, { useCallback, useEffect, useState } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import { Box } from '@material-ui/core';

import { api } from '../../services/api';

import { NewComment } from '../../components/NewComment';

import './styles.css';

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [audioSource, setAudioSource] = useState('');

  const handleNewComment = useCallback((value) => {
    setNewComment(value);
  }, []);

  const handleSetComments = useCallback((value) => {
    setComments(state => state.concat(value));
  }, []);

  const handleListenAudio = useCallback(async (userComment, commentId) => {

    const sessionStorageObject = {
      commentId: commentId,
    };

    const storagedBase64Audio = sessionStorage.getItem(JSON.stringify(sessionStorageObject));

    if (storagedBase64Audio) {
      const array = Buffer.from(storagedBase64Audio, 'base64');
      const blob = new Blob([array], { type: 'audio/wav' })
      const objecturl = URL.createObjectURL(blob);

      setAudioSource(objecturl);

    } else {
      try {
        const response = await api.post(`synthesize`, {
          text: userComment,
        });
        const array = Buffer.from(response.data.base64Audio, 'base64');
        const blob = new Blob([array], { type: 'audio/wav' })
        const objecturl = URL.createObjectURL(blob);

        sessionStorage.setItem(JSON.stringify(sessionStorageObject), response.data.base64Audio);

        setAudioSource(objecturl);
      } catch (error) {
        alert('Não foi possivel sintetizar seu comentario.');
      }
    }
  }, []);

  useEffect(() => {
    api.get('comments').then(response => {
      setComments(response.data);
    })
  }, []);

  return (
    <div className="container">
      <div>
        <NewComment
          newComment={newComment}
          onHandleNewComment={(value) => handleNewComment(value)}
          onHandleSetComments={(value) => handleSetComments(value)}
        />
      </div>

      <Box
        classname="box"
        autoPlay={true}
        component={ReactAudioPlayer}
        controls={true}
        src={audioSource}
      />

      <hr className="line-center"></hr>

      <div className="comment-list">
        <h4>Comentários</h4>
        {comments.map((comment, index) => (
          <div key={index}>
            <p className="comment-text">{comment.user_comment}</p>
            <audio src={audioSource}></audio>
            <button className="btn-to-hear" onClick={() => handleListenAudio(comment.user_comment, comment.id)}>Ouvir</button>
            <br />

          </div>
        ))}
      </div>
    </div>
  )
}
