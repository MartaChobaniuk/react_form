import React, { useState } from 'react';

import postsFrtomServer from './api/posts.json';
import { PostForm } from './components/PostForm/PostForm';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';
import { getUserById } from './services/user';

const initialPosts: Post[] = postsFrtomServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

function getNewPostId(posts: Post[]) {
  const maxId = Math.max(
    ...posts.map(post => post.id),
  );

  return maxId + 1;
  //return +Math.random().toFixed(12).slice(2);
}

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = ({ id, ...data }: Post) => {
    const newPost = {
      id: getNewPostId(posts),
      ...data,
    }

    setPosts(currentPosts => [newPost, ...currentPosts]);
  }

  return (
    <div className='section'>
      <h1 className='title'>Create a post</h1>

      <PostForm onSubmit={addPost} />
      <PostList posts={posts}/>
    </div>
  );
};
