'use client'

import React from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Briefcase, Clapperboard, Globe2, Sparkles, Building2, CheckCircle2 } from 'lucide-react'

type Highlight = {
  title: string
  subtitle: string
  icon: React.ElementType
  value?: number
  suffix?: string
  valueText?: string
}

const highlights: Highlight[] = [
  {
    title: 'Projects Delivered',
    subtitle: 'Across multiple industries and formats',
    icon: Briefcase,
    value: 200,
    suffix: '+',
  },
  {
    title: 'Videos Produced',
    subtitle: 'Ads, courses, explainers & business videos',
    icon: Clapperboard,
    value: 350,
    suffix: '+',
  },
  {
    title: 'AI Video Experience',
    subtitle: 'Hands-on production with AI video systems',
    icon: Sparkles,
    value: 4,
    suffix: '+ years',
  },
  {
    title: 'Certified',
    subtitle: 'Certified Synthesia Professional',
    icon: Award,
    valueText: 'Synthesia',
  },
  {
    title: 'Multilingual',
    subtitle: 'Localization and production expertise',
    icon: Globe2,
    valueText: 'Global',
  },
  {
    title: 'Trusted Teams',
    subtitle: 'Startups & enterprise teams',
    icon: Building2,
    valueText: 'Teams',
  },
]

function Counter({ value, suffix = '', inView }: { value: number; suffix?: string; inView: boolean }) {
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (latest) => Math.round(latest))
  const [done, setDone] = React.useState(false)

  React.useEffect(() => {
    if (!inView || done) return
    const controls = animate(mv, value, { duration: 1.15, ease: 'easeOut' })
    controls.then(() => setDone(true))
    return () => controls.stop()
  }, [inView, done, mv, value])

  return (
    <span className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  )
}

export default function AboutHighlightsSection() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section className="relative overflow-hidden  py-14 text-[#0A211F] md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#0A211F]/8 blur-3xl" />
        <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-[#8AF7B7]/8 blur-3xl" />
        <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(10,33,31,0.08)_0%,rgba(247,249,242,0)_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
            <CheckCircle2 className="size-4 text-[#0A211F]/70" />
            Proof in Numbers
          </div>

          <h2 className="mt-4 text-balance text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
            Experience that turns AI video into business results
          </h2>

          <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
            Structure, pacing, and brand consistency—so your videos feel premium and scale effortlessly.
          </p>
        </div>

        <div ref={ref} className="mt-10 md:mt-14">
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {highlights.map((h) => {
              const Icon = h.icon
              const hasNumber = typeof h.value === 'number'

              return (
                <motion.div
                  key={h.title}
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { type: 'spring', bounce: 0.25, duration: 0.9 },
                    },
                  }}
                  className="h-full"
                >
                  <Card className="group h-full overflow-hidden rounded-2xl p-0 border-black/10 bg-white/70 shadow-[0_22px_70px_-60px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/20">
                    <CardContent className="relative p-6 md:p-7">
                      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#8AF7B7]/14 blur-3xl" />
                        <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#0A211F]/8 blur-3xl" />
                      </div>

                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="grid   size-11 shrink-0 place-items-center rounded-xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                            <Icon className="size-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[#0A211F]">{h.title}</div>
                            <div className="mt-0.5 line-clamp-1 text-xs text-[#0A211F]/60">{h.subtitle}</div>
                          </div>
                        </div>

                        <div className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#0A211F]/65">
                          Verified
                        </div>
                      </div>

                      <div className="relative mt-6">
                        <div className="flex items-end gap-2">
                          <div className="text-4xl font-semibold tracking-tight text-[#0A211F] md:text-5xl">
                            {hasNumber ? (
                              <Counter value={h.value!} suffix={h.suffix ?? ''} inView={inView} />
                            ) : (
                              <span className="tabular-nums">{h.valueText}</span>
                            )}
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl border border-black/10  p-4">
                          <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                            What it means
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">
                            {h.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
