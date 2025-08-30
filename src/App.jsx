import { useState } from 'react';
import Hero from './components/Hero';
import Composer from './components/Composer';
import Feed from './components/Feed';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      name: 'Minimalist Dev',
      handle: '@min_dev',
      text: 'Simplicity is a feature.',
      createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      stats: { replies: 2, reposts: 4, likes: 32, shares: 1 },
    },
    {
      id: '2',
      name: 'Studio Nym',
      handle: '@studio_nym',
      text: 'Dark mode, fewer distractions, more signal.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
      stats: { replies: 1, reposts: 2, likes: 18, shares: 0 },
    },
    {
      id: '3',
      name: 'Design Bot',
      handle: '@designbot',
      text: 'Whitespace is breathing room for ideas.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
      stats: { replies: 0, reposts: 1, likes: 12, shares: 0 },
    },
  ]);

  function handlePost(text) {
    const newPost = {
      id: crypto.randomUUID(),
      name: 'You',
      handle: '@you',
      text,
      createdAt: new Date().toISOString(),
      stats: { replies: 0, reposts: 0, likes: 0, shares: 0 },
    };
    setPosts((prev) => [newPost, ...prev]);
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <main className="mx-auto w-full max-w-2xl px-4 pb-24">
        <Composer onPost={handlePost} />
        <Feed posts={posts} />
      </main>
    </div>
  );
}
