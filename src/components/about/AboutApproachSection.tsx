'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { BadgeCheck, Layers, Repeat2, Wallet, Sparkles } from 'lucide-react'

const steps = [
  {
    title: 'Scale content production',
    period: 'Outcome 01',
    description: 'Build a repeatable pipeline that produces consistent videos on schedule—without chaos.',
    bullets: ['Repeatable templates', 'Faster publishing', 'Less back-and-forth'],
    icon: Layers,
  },
  {
    title: 'Reduce traditional video costs',
    period: 'Outcome 02',
    description: 'Cut production overhead while keeping output polished, professional, and business-ready.',
    bullets: ['No reshoots', 'Lower overhead', 'Faster iteration'],
    icon: Wallet,
  },
  {
    title: 'Maintain consistent branding',
    period: 'Outcome 03',
    description: 'A single style system keeps typography, layouts, and visuals consistent across every deliverable.',
    bullets: ['Brand rules', 'Reusable scenes', 'Consistent look'],
    icon: BadgeCheck,
  },
  {
    title: 'Deliver clear, repeatable messaging',
    period: 'Outcome 04',
    description: 'Structure + pacing make messaging easy to update across teams, markets, and timelines.',
    bullets: ['Script framework', 'Update-friendly', 'Market-ready'],
    icon: Repeat2,
  },
]

export default function AboutApproachSection() {
  return (
    <section className=" py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
            <Sparkles className="size-4" />
            Our Approach
          </div>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            We treat AI video like a system — not a one-off project.
          </h2>

          <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
            That means helping businesses scale content production, reduce costs, maintain consistent branding, and
            deliver repeatable messaging.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-5xl md:mt-14">
          <div className="absolute inset-y-0 left-4 border-l-2 border-black/10 md:left-5" />

          {steps.map(({ title, description, period, bullets, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.9, delay: index * 0.03 }}
              className="relative pb-10 pl-12 last:pb-0 md:pl-14"
            >
              <div className="absolute left-4 top-0 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-background md:left-5">
                <Icon className="size-5 text-[#0A211F]" />
              </div>

              <div className="rounded-3xl border border-black/10 bg-transparent p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.25)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">{period}</div>
                  <Badge variant="secondary" className="rounded-full">
                    System outcome
                  </Badge>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70 sm:text-base">{description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {bullets.map((b) => (
                    <Badge key={b} variant="secondary" className="rounded-full">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
