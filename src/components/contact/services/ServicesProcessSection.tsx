'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ClipboardList, Sparkles, CheckCircle2, Rocket, ArrowRight } from 'lucide-react'

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
        description:
            'You review a draft, we refine pacing, clarity, and visuals—so it feels polished and professional.',
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

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
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
        <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                        Our Process
                    </p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                        A simple workflow that stays consistent as you scale
                    </h2>
                    <p className="mt-3 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                        Clear steps, fast iterations, and repeatable systems—so every video looks on-brand and feels premium.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2"
                >
                    {steps.map((s) => {
                        const Icon = s.icon
                        return (
                            <motion.div key={s.step} variants={item}>
                                <Card className="h-full rounded-3xl border-black/10 bg-white/70 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)]">
                                    <CardContent className="p-6 md:p-7">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                                    <Icon className="size-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-xs font-semibold tracking-wide text-[#0A211F]/55">
                                                        STEP {s.step}
                                                    </div>
                                                    <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                                                </div>
                                            </div>

                                            <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-[#0A211F]/70">
                                                {s.step}
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-relaxed text-[#0A211F]/70">
                                            {s.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <div className="mt-12 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] md:mt-16 md:p-8">
                    <div className="grid gap-6 md:grid-cols-12 md:items-center">
                        <div className="md:col-span-8">
                            <h3 className="text-balance text-xl font-semibold md:text-2xl">
                                Ready to build AI video content that supports your training, marketing, and communication goals?
                            </h3>
                            <p className="mt-2 text-sm text-[#0A211F]/70 md:text-base">
                                Tell us what you’re planning. We’ll respond with a clear proposal, timeline, and next steps.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                            <Button
                                asChild
                                className="h-11 rounded-full bg-[#0A211F] px-6 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                            >
                                <Link href="/contact#contact-form">
                                    Book a Consultation <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-11 rounded-full border-black/10 bg-white px-6 text-[#0A211F] hover:bg-black/5"
                            >
                                <Link href="/contact#contact-form">Discuss Your Project</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
