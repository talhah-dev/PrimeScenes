const works = [
  {
    title: 'Product Explainer',
    description: 'Clear story + clean scenes that make your product instantly understandable.',
    video: '/works/explainer.mp4',
  },
  {
    title: 'Performance Ad',
    description: 'Hook-first pacing designed for retention, clicks, and conversions.',
    video: '/works/ad.mp4',
  },
  {
    title: 'Training & Onboarding',
    description: 'Structured videos that reduce support load and speed up learning.',
    video: '/works/training.mp4',
  },
]

export default function RecentWork() {
  return (
    <section className="bg-[#0A211F] px-6 py-12 text-[#E9F3E6] md:py-20">
      <div className="mx-auto w-full grow sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="text-balance font-semibold text-4xl tracking-tight text-[#8AF7B7] sm:text-5xl">
          Recent work
        </h2>
        <p className="mt-3 max-w-2xl text-[17px] text-[#E9F3E6]/75">
          A few examples of how SynthFlow turns ideas into premium AI videos—fast, consistent, and on-brand.
        </p>

        <div className="mt-10 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div className="flex w-full flex-col text-start" key={work.title}>
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_25px_90px_-55px_rgba(0,0,0,.95)] backdrop-blur sm:mb-6">
                <video
                  className="aspect-[4/5] w-full object-cover"
                  src={work.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>

              <span className="font-semibold text-2xl tracking-[-0.015em] text-[#E9F3E6]">
                {work.title}
              </span>
              <p className="mt-2 max-w-[28ch] text-[17px] text-[#E9F3E6]/70">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
