import classNames from 'classnames';
import React, { useState } from 'react';
import usersFrtomServer from '../../api/users.json';
import { Post } from '../../types/Post';
import { getUserById } from '../../services/user';

type Props = {
  onSubmit: (post: Post) => void;
}

export const PostForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [hasTitleError, setHasTitleError] = useState(false);

  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(false);
  
  const [body, setBody] = useState('');
  const [bodyErrorMessage, setBodyErrorMessage] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  }

  const handleUserIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(+event.target.value);
    setHasUserIdError(false);
  }

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    setBodyErrorMessage('');
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasUserIdError(!userId);

    if (!body) {
      setBodyErrorMessage('Please enter some text');
    } else if (body.length < 5) {
      setBodyErrorMessage('Body should have at least 5 chars');
    }

    if (!title || !userId || body.length < 5) {
      return;
    }

    onSubmit({
      id: 0,
      title,
      userId,
      body,
      user: getUserById(userId),
    })

    reset();
  };

  const reset = () => {
    setTitle('');
    setBody('');
    setUserId(0);

    setHasTitleError(false);
    setHasUserIdError(false);
    setBodyErrorMessage('');
  }

  return (
    <form
      action="./api/posts" 
      method="POST" 
      className="box"
      onSubmit={handleSubmit}
      onReset={reset}
    >
      <div className="field">
        <label 
          className="label" 
          htmlFor="post-title"
        >
          Title
        </label>

        <div className={classNames('control', {
          'has-icons-right': hasTitleError,
        })}>
          <input
            id="post-title"
            className={classNames('input', {
              'is-danger': hasTitleError,
            })}
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={() => {
              setHasTitleError(!title);
            }}
          />

          {hasTitleError && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle has-text-danger"></i>
            </span>
          )}

          {hasTitleError && (
            <p className="help is-danger">Title is required</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="post-user-id">
          Subject
        </label>

        <div className="control has-icons-left">
          <div className={classNames('select', {
            'is-danger': hasUserIdError,
          })}>
            <select
              id="post-user-id"
              value={userId}
              onChange={handleUserIdChange}
            >
              <option value="0">Select a user</option>

              {usersFrtomServer.map(user => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>

        {hasUserIdError && (
          <p className="help is-danger">Please select a user</p>
        )}
      </div>

      <div className="field">
        <label className="label">
          Message
        </label>

        <div className="control">
          <textarea 
            className={classNames('textarea', {
              'is-danger': bodyErrorMessage,
            })} 
            placeholder="Add some text here"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>

        {bodyErrorMessage && (
          <p className="help is-danger">{bodyErrorMessage}</p>
        )}
      </div>

      <div className="buttons">
        <button
          type="submit"
          className="button is-link"
        >
          Submit
        </button>

        <button
          type="reset"
          className="button is-link is-light"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};