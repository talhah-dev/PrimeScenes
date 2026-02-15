'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BadgeCheck, ArrowRight, Sparkles } from 'lucide-react'

const points = [
    'Structured scripts and clear messaging',
    'Consistent branding across every video',
    'Fast turnaround with easy updates',
    'Systems for scaling ongoing content',
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

export default function ServicesFinalCTASection() {
    return (
        <section className="bg-[#0A211F] text-[#E9F3E6]">
            <div className="relative overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
                    <div className="absolute -right-20 top-24 h-96 w-96 rounded-full bg-white/8 blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#8AF7B7]/10 blur-3xl" />
                    <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.10)_0%,rgba(10,33,31,0)_55%)]" />
                </div>

                <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-10 lg:grid-cols-12 lg:items-center"
                    >
                        <motion.div variants={item} className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#E9F3E6]/70">
                                <Sparkles className="size-3.5 text-[#8AF7B7]" />
                                Ready to get started?
                            </div>

                            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#8AF7B7] md:text-4xl">
                                Let’s build AI video content that scales with your business.
                            </h2>

                            <p className="mt-3 max-w-2xl text-pretty text-base text-[#E9F3E6]/75 md:text-lg">
                                Tell us your goal and timeline—we’ll reply with a clear plan, deliverables, and next steps.
                            </p>

                            <div className="mt-8 grid gap-2 sm:grid-cols-2">
                                {points.map((p) => (
                                    <div key={p} className="flex items-start gap-2 text-sm text-[#E9F3E6]/80">
                                        <BadgeCheck className="mt-0.5 size-4 text-[#8AF7B7]" />
                                        <span className="leading-relaxed">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.65)] lg:col-span-5 md:p-8"
                        >
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold">Choose your next step</h3>
                                <p className="text-sm text-[#E9F3E6]/70">
                                    Book a call or send project details. We’ll respond quickly.
                                </p>
                            </div>

                            <div className="mt-6 grid gap-3">
                                <Button
                                    asChild
                                    className="h-11 w-full rounded-full bg-[#8AF7B7] text-[#0A211F] hover:bg-[#8AF7B7]/90"
                                >
                                    <Link href="/contact#contact-form">
                                        Request Proposal <ArrowRight className="ml-2 size-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-11 w-full rounded-full border-white/15 bg-transparent text-[#E9F3E6] hover:bg-white/10 hover:text-[#E9F3E6]"
                                >
                                    <Link href="/contact#contact-form">Book a Consultation</Link>
                                </Button>
                            </div>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-[#E9F3E6]/75">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="font-medium text-[#E9F3E6]">Email</span>
                                    <span className="text-[#E9F3E6]/70">TBD</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
