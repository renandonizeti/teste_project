import React from 'react';

import { api } from '../../services/api';

import './styles.css';

export const NewComment = ({ newComment, onHandleNewComment, onHandleSetComments }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const comment = { new_comment: newComment };

    try {
      const response = await api.post('comments/new', comment);
      const { data } = response;

      onHandleSetComments(data);

    } catch {
      alert('Erro ao tentar cadastrar comentário.');
    }

    onHandleNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>

        <div className="comments-insert">
          <h4 htmlFor="user_comment">Comentário</h4>
          <br />
          <textarea className="textarea"
            type="text"
            id="user_comment"
            name="user_comment"
            placeholder="digite seu comentario"
            minLength="3"
            maxLength="1000"
            required
            value={newComment}
            onChange={e => onHandleNewComment(e.target.value)}
          />
        </div>

        <button type="Submit" className="btn-primary">Cadastrar</button>
    </form>
  );
}
