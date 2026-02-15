'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Captions, Timer, Palette, Languages } from 'lucide-react'

const principles = [
  {
    title: 'Structure beats randomness',
    desc: 'Every video follows a clear framework—hook, value, steps, and outcome—so viewers stay engaged.',
    icon: Captions,
  },
  {
    title: 'Human pacing wins attention',
    desc: 'We design timing, pauses, and scene rhythm so AI avatars feel natural—not robotic.',
    icon: Timer,
  },
  {
    title: 'Brand consistency scales trust',
    desc: 'Templates and rules keep typography, colors, and layout aligned across every deliverable.',
    icon: Palette,
  },
  {
    title: 'Localization is more than translation',
    desc: 'We adapt tone, subtitles, and voice to match the market—without losing meaning.',
    icon: Languages,
  },
]

export default function AboutVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A211F] py-16 text-[#E9F3E6] md:py-24">

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#E9F3E6]/70">
            <Sparkles className="size-4 text-[#8AF7B7]" />
            The Vision
          </div>

          <h2 className="mt-4 text-balance text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
            <span className="text-[#8AF7B7]">AI video isn’t a trend.</span>
            <span className="block text-[#E9F3E6]">It’s a shift in how businesses communicate.</span>
          </h2>

          <p className="mt-4 text-pretty text-base text-[#E9F3E6]/75 md:text-lg">
            We help companies use this technology properly—strategically, professionally, and at scale—by building
            systems that stay consistent as your content grows.
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
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p) => {
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
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-6 shadow-[0_24px_80px_-70px_rgba(0,0,0,.9)] transition"
                >
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 [background:radial-gradient(80%_80%_at_20%_0%,rgba(138,247,183,0.16)_0%,rgba(10,33,31,0)_60%)]" />
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-[#8AF7B7]/15 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/20 text-[#8AF7B7]">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[#E9F3E6]">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#E9F3E6]/75">{p.desc}</p>
                    </div>
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
