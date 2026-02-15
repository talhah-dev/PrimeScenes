'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    GraduationCap,
    Megaphone,
    BookOpenCheck,
    Languages,
    Layers3,
    ArrowRight,
} from 'lucide-react'

const services = [
    {
        title: 'Training & E-Learning Videos',
        description: 'Structured AI videos built for employee development and online education.',
        icon: GraduationCap,
        bullets: [
            'Employee onboarding programs',
            'Internal training modules',
            'Compliance and policy videos',
            'Online courses and educational content',
        ],
    },
    {
        title: 'Marketing & Promotional Videos',
        description: 'Professional AI avatar videos designed to communicate your message clearly and efficiently.',
        icon: Megaphone,
        bullets: [
            'Product and service explainers',
            'Website videos',
            'Social media campaigns',
            'Sales presentations',
        ],
    },
    {
        title: 'Client Education & Explainers',
        description: 'Turn complex ideas into structured, easy-to-understand video content.',
        icon: BookOpenCheck,
        bullets: ['Law firms', 'Healthcare providers', 'Consulting firms', 'SaaS companies'],
    },
    {
        title: 'Multilingual AI Production',
        description: 'Reach global audiences without traditional production costs.',
        icon: Languages,
        bullets: [
            'AI-powered video translation',
            'Multi-language avatar videos',
            'Subtitle and voice adaptation',
            'Localized versions of existing content',
        ],
    },
    {
        title: 'Scalable AI Video Systems',
        description: 'Ongoing content production systems built for consistency and growth.',
        icon: Layers3,
        bullets: [
            'Branded video templates',
            'Repeatable content workflows',
            'Structured video series',
            'Long-term content systems',
        ],
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
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

export default function ServicesOverviewSection() {
    return (
        <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                        AI-powered services
                    </p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                        Designed for clarity, speed, and brand consistency
                    </h2>
                    <p className="mt-3 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                        We help companies create structured, scalable, and professional AI videos using Synthesia and advanced AI
                        production tools.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((s) => {
                        const Icon = s.icon
                        return (
                            <motion.div key={s.title} variants={item} className="h-full">
                                <Card className="h-full rounded-3xl border-black/10 bg-white/70 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/25">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                                <Icon className="size-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-lg font-semibold">{s.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-[#0A211F]/70">{s.description}</p>
                                            </div>
                                        </div>

                                        <ul className="mt-5 space-y-2 text-sm text-[#0A211F]/75">
                                            {s.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-2">
                                                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-[#0A211F]/70" />
                                                    <span className="leading-relaxed">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
