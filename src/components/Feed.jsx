import Tweet from './Tweet';

export default function Feed({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <Tweet key={p.id} post={p} />
      ))}
    </div>
  );
}
