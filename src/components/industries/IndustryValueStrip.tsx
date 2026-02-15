'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, Palette, Timer, Wand2 } from 'lucide-react'

const points = [
  {
    title: 'Clarity-first scripting',
    desc: 'Clear structure, clean flow, and scene pacing designed for AI avatars to sound natural.',
    icon: Wand2,
  },
  {
    title: 'Brand-consistent templates',
    desc: 'Typography, layouts, and styling rules that keep every video looking like your company.',
    icon: Palette,
  },
  {
    title: 'Fast updates & iterations',
    desc: 'Need changes? Swap scenes, update messaging, and refresh content without re-shooting.',
    icon: Timer,
  },
  {
    title: 'Multilingual-ready delivery',
    desc: 'Scale training and education globally with subtitles, voice adaptation, and localization.',
    icon: Globe2,
  },
]

export default function IndustryValueStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0A211F] py-16 text-[#E9F3E6] md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.12)_0%,rgba(10,33,31,0)_55%)]" />
        <div className="absolute inset-0 opacity-[0.25] [background:linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#8AF7B7]/10 blur-3xl" />
        <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-white/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#E9F3E6]/70">
            <span className="inline-block size-1.5 rounded-full bg-[#8AF7B7]" />
            Why it works
          </div>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A repeatable AI video system that stays premium as you scale
          </h2>

          <p className="mt-4 text-pretty text-base text-[#E9F3E6]/75 md:text-lg">
            Tools can generate video. We build the structure—so your content looks consistent, sounds natural, and is
            easy to update across industries and teams.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {points.map((p) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { type: 'spring', bounce: 0.25, duration: 0.9 },
                    },
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_-70px_rgba(0,0,0,.9)] transition"
                >
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 [background:radial-gradient(80%_80%_at_20%_0%,rgba(138,247,183,0.16)_0%,rgba(10,33,31,0)_55%)]" />
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-[#8AF7B7]/15 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative grid size-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-[#8AF7B7]">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[#E9F3E6]">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#E9F3E6]/75">{p.desc}</p>
                    </div>
                  </div>

                  <div className="relative mt-6 h-px w-full bg-white/10" />

                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {['Repeatable', 'Consistent', 'Scalable'].map((x) => (
                      <div
                        key={x}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-[#E9F3E6]/70"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
