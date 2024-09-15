import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const UserDashboard = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const addBookmark = (proposal) => {
    const updatedBookmarks = [...bookmarks, proposal];
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const removeBookmark = (proposalId) => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== proposalId);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Bookmarked Proposals</h3>
        {bookmarks.length === 0 ? (
          <p>No bookmarked proposals yet.</p>
        ) : (
          <ul>
            {bookmarks.map(bookmark => (
              <li key={bookmark.id} className="flex justify-between items-center mb-2">
                <span>{bookmark.title}</span>
                <Button onClick={() => removeBookmark(bookmark.id)} variant="destructive" size="sm">Remove</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;