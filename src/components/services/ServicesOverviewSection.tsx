'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  GraduationCap,
  Megaphone,
  BookOpenCheck,
  Languages,
  Layers3,
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
    bullets: ['Product and service explainers', 'Website videos', 'Social media campaigns', 'Sales presentations'],
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
    bullets: ['AI-powered video translation', 'Multi-language avatar videos', 'Subtitle and voice adaptation', 'Localized versions of existing content'],
  },
  {
    title: 'Scalable AI Video Systems',
    description: 'Ongoing content production systems built for consistency and growth.',
    icon: Layers3,
    bullets: ['Branded video templates', 'Repeatable content workflows', 'Structured video series', 'Long-term content systems'],
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

export default function ServicesOverviewSection() {
  return (
    <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
            AI-powered services
          </div>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Designed for clarity, speed, and brand consistency
          </h2>
          <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
            We help companies create structured, scalable, and professional AI videos using Synthesia and modern AI
            production workflows.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title} variants={item} className="h-full">
                <Card className="group relative h-full overflow-hidden rounded-2xl border-black/10 bg-white/70 shadow-[0_22px_70px_-60px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/20">
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#8AF7B7]/14 blur-3xl" />
                    <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#0A211F]/8 blur-3xl" />
                  </div>

                  <CardContent className="relative p-4 py-1">
                    <div className="flex items-start gap-2">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-[#8AF7B7]/18 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative grid size-12 shrink-0 place-items-center rounded-xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#0A211F]/70">{s.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-black/10 bg-white/60 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">Includes</div>
                      <ul className="mt-3 space-y-2 text-sm text-[#0A211F]/75">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-[#0A211F]/60" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Structured', 'Brand-safe', 'Scalable'].map((t) => (
                        <div
                          key={t}
                          className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-[#0A211F]/65"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
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
