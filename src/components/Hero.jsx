import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[56vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-2xl px-4">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Super Minimalist Feed</h1>
          <p className="mt-2 text-sm text-white/70">A focused space for short thoughts. No clutter.</p>
        </div>
      </div>
    </section>
  );
}
