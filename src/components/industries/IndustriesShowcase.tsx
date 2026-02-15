'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ChevronDown,
    Gavel,
    Stethoscope,
    Laptop2,
    Briefcase,
    GraduationCap,
    Headset,
    BadgeDollarSign,
    ShieldCheck,
    Megaphone,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Industry = {
    title: string
    intro: string
    benefit: string
    useCases: string[]
    icon: React.ElementType
    accent: string
}

const industries: Industry[] = [
    {
        title: 'Law Firms',
        intro: 'Answer recurring client questions and explain processes with consistent AI videos.',
        benefit: 'Save time and keep clients informed.',
        useCases: ['Client onboarding videos', 'Case process walkthroughs', 'FAQ explainers'],
        icon: Gavel,
        accent: 'from-[#8AF7B7]/18 to-white/0',
    },
    {
        title: 'Healthcare & Dental Clinics',
        intro: 'Educate patients clearly and reduce repetitive calls with guided videos.',
        benefit: 'Improve satisfaction and free staff time.',
        useCases: ['Procedure explanation videos', 'Appointment prep guides', 'Health education videos'],
        icon: Stethoscope,
        accent: 'from-[#B7F7E0]/18 to-white/0',
    },
    {
        title: 'SaaS & Technology',
        intro: 'Onboard users and explain product features with step-by-step video guidance.',
        benefit: 'Faster adoption and fewer support requests.',
        useCases: ['Product walkthroughs', 'Feature demos', 'Onboarding tutorials'],
        icon: Laptop2,
        accent: 'from-[#9FE3FF]/16 to-white/0',
    },
    {
        title: 'Consulting Firms',
        intro: 'Deliver consistent explanations of recommendations and deliverables with clarity.',
        benefit: 'Improve clarity and client confidence.',
        useCases: ['Client briefings', 'Process explanations', 'Staff training'],
        icon: Briefcase,
        accent: 'from-[#FFDCA8]/14 to-white/0',
    },
    {
        title: 'Learning & Development',
        intro: 'Build training libraries that stay consistent, update fast, and scale across teams.',
        benefit: 'Save time and ensure consistency.',
        useCases: ['Employee onboarding', 'Compliance training', 'Skill development modules'],
        icon: GraduationCap,
        accent: 'from-[#C7B7FF]/14 to-white/0',
    },
    {
        title: 'Customer Service',
        intro: 'Reduce repetitive tickets with videos that guide customers and answer FAQs.',
        benefit: 'Lower workload and improve experience.',
        useCases: ['FAQ videos', 'Service walkthroughs', 'Account setup guides'],
        icon: Headset,
        accent: 'from-[#FFB7D9]/12 to-white/0',
    },
    {
        title: 'Sales Teams',
        intro: 'Keep messaging consistent with repeatable demos and objection handling videos.',
        benefit: 'Improve conversion and save rep time.',
        useCases: ['Product demos', 'Objection handling videos', 'Proposal support'],
        icon: BadgeDollarSign,
        accent: 'from-[#8AF7B7]/16 to-white/0',
    },
    {
        title: 'IT Departments',
        intro: 'Document tools, systems, and procedures with clean step-by-step video training.',
        benefit: 'Reduce repeated explanations and increase efficiency.',
        useCases: ['Software tutorials', 'System onboarding videos', 'Security awareness videos'],
        icon: ShieldCheck,
        accent: 'from-[#A8FFD6]/14 to-white/0',
    },
    {
        title: 'Marketing Teams',
        intro: 'Scale professional content across channels without the studio cost and delays.',
        benefit: 'Maintain brand consistency and reach wider audiences.',
        useCases: ['Product announcements', 'Multilingual campaigns', 'Thought leadership videos'],
        icon: Megaphone,
        accent: 'from-[#FFE8A8]/12 to-white/0',
    },
]

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-[#0A211F]/70">
            {children}
        </div>
    )
}

export default function IndustriesShowcase() {
    const [active, setActive] = React.useState<number | null>(0)

    return (
        <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
                            <span className="inline-block size-1.5 rounded-full bg-[#0A211F]/60" />
                            Industry Solutions
                        </div>

                        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                            Tailored video systems for the way your team actually works
                        </h2>

                        <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                            Pick an industry to see the most common use cases and the business outcome we aim for.
                            Everything is designed to be repeatable, branded, and easy to scale.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <Pill>Training</Pill>
                            <Pill>Client Education</Pill>
                            <Pill>Onboarding</Pill>
                            <Pill>Marketing</Pill>
                            <Pill>Support</Pill>
                        </div>

                        <div className="mt-8 hidden lg:block">
                            <Card className="overflow-hidden rounded-[2rem] border-black/10 bg-white/70 shadow-[0_22px_80px_-70px_rgba(0,0,0,.45)]">
                                <CardContent className="p-0">
                                    <div className="p-6">
                                        <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                            What you’ll get
                                        </div>
                                        <div className="mt-3 grid gap-3">
                                            {[
                                                'Clear structure + human pacing',
                                                'Brand-consistent templates',
                                                'Fast iteration and updates',
                                                'Scalable multilingual options',
                                            ].map((x) => (
                                                <div key={x} className="flex items-center gap-3 text-sm text-[#0A211F]/75">
                                                    <span className="grid size-6 place-items-center rounded-full bg-[#0A211F] text-[#8AF7B7]">
                                                        ✓
                                                    </span>
                                                    <span>{x}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-black/10 bg-white/50 p-6">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="text-sm font-semibold text-[#0A211F]">Not sure which fits?</div>
                                            <Button
                                                asChild
                                                className="h-10 rounded-full bg-[#0A211F] px-5 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                            >
                                                <Link href="/contact#contact-form">Describe your project</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 shadow-[0_22px_80px_-70px_rgba(0,0,0,.45)]">
                            <div aria-hidden className="pointer-events-none absolute inset-0">
                                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#0A211F]/8 blur-3xl" />
                                <div className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
                            </div>

                            <div className="relative grid gap-2 p-3 sm:p-4">
                                {industries.map((ind, idx) => {
                                    const Icon = ind.icon
                                    const isOpen = active === idx
                                    return (
                                        <Card
                                            key={ind.title}
                                            className="rounded-2xl border-black/10 bg-white/60 shadow-none"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setActive((v) => (v === idx ? null : idx))}
                                                className="w-full"
                                            >
                                                <CardContent className="p-5 sm:p-6">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex items-center gap-4">
                                                            <div className="grid size-12 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                                                <Icon className="size-5" />
                                                            </div>
                                                            <div className="text-left">
                                                                <div className="text-base font-semibold sm:text-lg">{ind.title}</div>
                                                                <div className="mt-1 text-sm text-[#0A211F]/70">{ind.intro}</div>
                                                            </div>
                                                        </div>

                                                        <motion.div
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/70"
                                                        >
                                                            <ChevronDown className="size-4 text-[#0A211F]/80" />
                                                        </motion.div>
                                                    </div>

                                                    <AnimatePresence initial={false}>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                                                    <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                                                                        <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                                                            Use cases
                                                                        </div>
                                                                        <div className="mt-3 space-y-2">
                                                                            {ind.useCases.map((u) => (
                                                                                <div key={u} className="flex items-start gap-2 text-sm text-[#0A211F]/75">
                                                                                    <span className="mt-1 block size-1.5 rounded-full bg-[#0A211F]/60" />
                                                                                    <span>{u}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>

                                                                    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-4">
                                                                        <div
                                                                            aria-hidden
                                                                            className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${ind.accent}`}
                                                                        />
                                                                        <div className="relative">
                                                                            <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                                                                Benefit
                                                                            </div>
                                                                            <div className="mt-3 text-sm leading-relaxed text-[#0A211F]/75">
                                                                                {ind.benefit}
                                                                            </div>

                                                                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                                                                <Button
                                                                                    asChild
                                                                                    className="h-10 rounded-full bg-[#0A211F] px-5 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                                                                >
                                                                                    <Link href="/contact#contact-form">Send details</Link>
                                                                                </Button>
                                                                                <Button
                                                                                    asChild
                                                                                    variant="outline"
                                                                                    className="h-10 rounded-full border-black/10 bg-white px-5 text-[#0A211F] hover:bg-black/5"
                                                                                >
                                                                                    <Link href="/services">See services</Link>
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </CardContent>
                                            </button>
                                        </Card>
                                    )
                                })}
                            </div>

                            <div className="border-t border-black/10 bg-white/50 p-5 sm:p-6 lg:hidden">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="text-sm font-semibold text-[#0A211F]">Not sure which fits?</div>
                                    <Button
                                        asChild
                                        className="h-10 rounded-full bg-[#0A211F] px-5 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                    >
                                        <Link href="/contact#contact-form">Describe your project</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-black/10 bg-white/70 p-6">
                                <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                    Typical turnaround
                                </div>
                                <div className="mt-2 text-2xl font-semibold tracking-tight">3–7 days</div>
                                <p className="mt-2 text-sm text-[#0A211F]/70">
                                    Depending on scripts, languages, and review cycles.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-black/10 bg-white/70 p-6">
                                <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                    Designed to scale
                                </div>
                                <div className="mt-2 text-2xl font-semibold tracking-tight">Templates + Systems</div>
                                <p className="mt-2 text-sm text-[#0A211F]/70">
                                    Build a repeatable library instead of one-off videos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
