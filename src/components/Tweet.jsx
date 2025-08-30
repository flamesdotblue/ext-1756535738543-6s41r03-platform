import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Check } from 'lucide-react';

function timeAgo(iso) {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const d = Math.max(0, now - then);
  const s = Math.floor(d / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const days = Math.floor(h / 24);
  return `${days}d`;
}

export default function Tweet({ post }) {
  return (
    <article className="border-b border-white/10 py-4">
      <div className="flex gap-3">
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-white/10" />
        <div className="min-w-0 flex-1">
          <header className="flex items-center gap-2 text-sm">
            <span className="font-medium">{post.name}</span>
            <Check size={14} className="text-white/60" />
            <span className="text-white/40">{post.handle}</span>
            <span className="text-white/30">· {timeAgo(post.createdAt)}</span>
            <div className="ml-auto text-white/50">
              <button className="rounded-md p-1.5 hover:bg-white/5" aria-label="More">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </header>
          <p className="mt-1 text-[15px] leading-relaxed text-white/90 whitespace-pre-wrap">{post.text}</p>
          <div className="mt-3 grid grid-cols-4 text-white/50">
            <Action icon={MessageCircle} count={post.stats.replies} label="Reply" />
            <Action icon={Repeat2} count={post.stats.reposts} label="Repost" />
            <Action icon={Heart} count={post.stats.likes} label="Like" />
            <Action icon={Share} count={post.stats.shares} label="Share" />
          </div>
        </div>
      </div>
    </article>
  );
}

function Action({ icon: Icon, count, label }) {
  return (
    <button className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-white/5" aria-label={label}>
      <Icon size={16} />
      <span className="text-xs tabular-nums">{count || ''}</span>
    </button>
  );
}
