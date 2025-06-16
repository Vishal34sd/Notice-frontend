import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const AddNotice = ({ setNotices }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/notices/post', { title, description });
      setTitle('');
      setDescription('');
      setStatus('Notice posted successfully!');
      setNotices((prev) => [res.data, ...prev]); // ✅ update state
    } catch (err) {
      setStatus('Failed to post notice.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Write detailed description" required />
      <button type="submit">Post Notice</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default AddNotice;
