import React, { useCallback, useEffect, useState } from 'react';

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

  const handleListenAudio = useCallback(async (userComment) => {
      try {
        const response = await api.post(`synthesize`, {
          text: userComment,
        });
        const array = Buffer.from(response.data.base64Audio, 'base64');
        const blob = new Blob([array], {type: 'audio/wav'})
        const objecturl = URL.createObjectURL(blob);

        setAudioSource(objecturl);
      } catch(error) {
        alert('Não foi possivel sintetizar seu comentário.');
      }

    const audio = document.querySelector('audio');

    audio.play();
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
