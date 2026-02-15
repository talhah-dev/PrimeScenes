'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    n: '01',
    title: 'Pick your industry',
    desc: 'Tell us what you do and what the video needs to achieve (training, onboarding, sales, support).',
  },
  {
    n: '02',
    title: 'We design the structure',
    desc: 'We map the script flow, pacing, and scenes so the AI avatar feels natural and professional.',
  },
  {
    n: '03',
    title: 'You get a clean proposal',
    desc: 'Clear scope, timeline, and deliverables—built for repeatable production, not one-off videos.',
  },
]

export default function IndustrySteps() {
  return (
    <section className="py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
            <CheckCircle2 className="size-4 text-[#0A211F]/70" />
            How it works
          </div>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A simple, repeatable process
          </h2>

          <p className="mt-3 text-pretty text-base text-[#0A211F]/70 md:text-lg">
            Three steps to turn your idea into a structured AI video system—clear, professional, and easy to scale.
          </p>
        </motion.div>

        <div className="relative mt-12 md:mt-16">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-black/10 sm:block" />

          <div className="grid gap-8">
            {steps.map((s) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 12, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
                className="relative sm:pl-12"
              >
                <div className="mb-4 flex items-center gap-3 sm:absolute sm:left-0 sm:top-1 sm:mb-0">
                  <div className="grid size-10 place-items-center rounded-full bg-[#0A211F] text-[#8AF7B7]">
                    <span className="text-sm font-semibold">{s.n}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#0A211F]/70 md:text-base">
                    {s.desc}
                  </p>

                  <div className="mt-5 h-px w-16 bg-black/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
