import React, { useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { formatDistanceToNow } from 'date-fns';

const Home = ({ notices, setNotices }) => {
  useEffect(() => {
    axiosInstance.get('/notices/get')
      .then(res => setNotices(res.data))
      .catch(err => console.log(err));
  }, [setNotices]);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/notices/delete/${id}`);
      setNotices(notices.filter(n => n._id !== id));
    } catch (err) {
      alert("You must be logged in to delete notices.");
    }
  };

  return (
    <div className="notice-list">
      {notices.map(notice => (
        <div key={notice._id} className="notice-card">
          <h2>{notice.title}</h2>
          <h4>{notice.description}</h4>
          <p>{formatDistanceToNow(new Date(notice.createdAt), { addSuffix: true })}</p>
          <button onClick={() => handleDelete(notice._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
