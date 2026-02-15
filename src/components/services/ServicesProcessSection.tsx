'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ClipboardList, Sparkles, CheckCircle2, Rocket } from 'lucide-react'

const steps = [
    {
        step: '01',
        title: 'Strategy & Script Development',
        description:
            'We clarify your goal, audience, and messaging—then structure a script that’s clean, on-brand, and easy to approve.',
        icon: ClipboardList,
    },
    {
        step: '02',
        title: 'AI Video Production',
        description:
            'We produce your video using Synthesia and AI production tools—avatars, visuals, motion, and audio aligned to your brand.',
        icon: Sparkles,
    },
    {
        step: '03',
        title: 'Review & Optimization',
        description: 'You review a draft, we refine pacing, clarity, and visuals—so it feels polished and professional.',
        icon: CheckCircle2,
    },
    {
        step: '04',
        title: 'Final Delivery & Scaling Support',
        description:
            'We deliver final files and help you scale with templates, repeatable workflows, and systems for ongoing content.',
        icon: Rocket,
    },
]

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
    hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', bounce: 0.25, duration: 0.9 },
    },
}

export default function ServicesProcessSection() {
    return (
        <section className="bg-[#F7F9F2] pb-16 md:pt-8 pt-5 text-[#0A211F] md:pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">Our Process</p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                        A simple workflow that stays consistent as you scale
                    </h2>
                    <p className="mt-3 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                        Clear steps, fast iterations, and repeatable systems—so every video looks on-brand and feels premium.
                    </p>
                </div>

                <div className="relative mt-12 md:mt-16">
                    <div className="absolute inset-y-0 left-5 w-px bg-black/10 md:left-1/2 md:-translate-x-1/2" />

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-120px' }}
                        className="space-y-8 md:space-y-10"
                    >
                        {steps.map((s, idx) => {
                            const Icon = s.icon
                            const isLeft = idx % 2 === 0

                            return (
                                <motion.div key={s.step} variants={item} className="relative">
                                    <div className="absolute left-5 top-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                                        <div className="grid size-11 place-items-center rounded-full border border-black/10 bg-white shadow-sm">
                                            <div className="grid size-9 place-items-center rounded-full bg-[#0A211F] text-[#8AF7B7]">
                                                <Icon className="size-4.5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pl-14 md:grid md:grid-cols-2 md:pl-0">
                                        <div
                                            className={[
                                                'md:col-span-1',
                                                isLeft ? 'md:pr-9 md:justify-self-end' : 'md:col-start-2 md:pl-9',
                                            ].join(' ')}
                                        >
                                            <Card className="w-full max-w-xl rounded-2xl border-black/10 bg-white/70 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/20">
                                                <CardContent className="p-4 !py-0 md:p-5">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div className="min-w-0">
                                                            <div className="text-xs font-semibold tracking-wide text-[#0A211F]/55">
                                                                STEP {s.step}
                                                            </div>
                                                            <h3 className="mt-1 text-lg font-semibold leading-snug">{s.title}</h3>
                                                        </div>

                                                        <div className="shrink-0 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-[#0A211F]/70">
                                                            {s.step}
                                                        </div>
                                                    </div>

                                                    <p className="mt-4 text-sm leading-relaxed text-[#0A211F]/70 sm:text-base">
                                                        {s.description}
                                                    </p>

                                                    <div className="mt-5 h-px w-full bg-black/10" />

                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {['Clear', 'Fast', 'Repeatable'].map((t) => (
                                                            <div
                                                                key={t}
                                                                className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-[#0A211F]/65"
                                                            >
                                                                {t}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
