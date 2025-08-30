import { useState } from 'react';
import { Image } from 'lucide-react';

export default function Composer({ onPost }) {
  const [text, setText] = useState('');

  function submit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onPost(t);
    setText('');
  }

  return (
    <div className="border-b border-white/10">
      <form onSubmit={submit} className="flex gap-3 py-4">
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-white/10" />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What\'s happening?"
            rows={3}
            className="w-full resize-none bg-transparent text-base outline-none placeholder:text-white/40"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/60">
              <button type="button" className="rounded-md p-2 hover:bg-white/5" aria-label="Add image">
                <Image size={18} />
              </button>
            </div>
            <button
              type="submit"
              className="rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium disabled:opacity-50"
              disabled={!text.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
