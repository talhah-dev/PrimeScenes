'use client'

import React from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
    Award,
    Briefcase,
    Clapperboard,
    Globe2,
    Sparkles,
    Building2,
} from 'lucide-react'

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
        subtitle: 'Startups, agencies & enterprise teams',
        icon: Building2,
        valueText: 'Pro',
    },
]

function Counter({
    value,
    suffix = '',
    inView,
}: {
    value: number
    suffix?: string
    inView: boolean
}) {
    const mv = useMotionValue(0)
    const rounded = useTransform(mv, (latest) => Math.round(latest))
    const [done, setDone] = React.useState(false)

    React.useEffect(() => {
        if (!inView || done) return
        const controls = animate(mv, value, { duration: 1.2, ease: 'easeOut' })
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
        <section className="bg-[#F7F9F2] py-14 text-[#0A211F] md:py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                        Proof in Numbers
                    </p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                        Experience that turns AI video into business results
                    </h2>
                    <p className="mt-3 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                        We combine structure, pacing, and brand consistency—so your videos feel premium and scale effortlessly.
                    </p>
                </div>

                <div ref={ref} className="relative mt-10 md:mt-14">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
                    >
                        <div className="absolute -left-10 -top-12 h-56 w-56 rounded-full bg-[#0A211F]/10 blur-3xl" />
                        <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[#8AF7B7]/20 blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-black/5 blur-3xl" />
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                        }}
                        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {highlights.map((h) => {
                            const Icon = h.icon
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
                                    <Card className="group h-full rounded-3xl border-black/10 bg-white/70 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/25">
                                        <CardContent className="relative p-6 md:p-7">
                                            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent md:inset-x-7" />

                                            <div className="flex items-start justify-between gap-4">
                                                <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                                    <Icon className="size-5" />
                                                </div>

                                                <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-[#0A211F]/70">
                                                    Verified
                                                </div>
                                            </div>

                                            <div className="mt-6 space-y-2">
                                                <div className="text-4xl font-semibold tracking-tight text-[#0A211F] md:text-5xl">
                                                    {typeof h.value === 'number' ? (
                                                        <Counter value={h.value} suffix={h.suffix ?? ''} inView={inView} />
                                                    ) : (
                                                        <span className="tabular-nums">{h.valueText}</span>
                                                    )}
                                                </div>

                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-semibold">{h.title}</h3>
                                                    <p className="text-sm leading-relaxed text-[#0A211F]/70">{h.subtitle}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center justify-between">
                                                <div className="h-px w-16 bg-black/10 transition group-hover:w-24" />
                                                <div className="text-xs font-semibold text-[#0A211F]/55">
                                                    Premium Delivery
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
