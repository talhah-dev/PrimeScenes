'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Quote } from 'lucide-react'

const principles = [
  {
    title: 'Structure beats randomness',
    desc: 'Every video follows a clear framework—hook, value, steps, and outcome—so viewers stay engaged.',
  },
  {
    title: 'Human pacing wins attention',
    desc: 'We design timing, pauses, and scene rhythm so AI avatars feel natural—not robotic.',
  },
  {
    title: 'Brand consistency scales trust',
    desc: 'Templates and rules keep typography, colors, and layout aligned across every deliverable.',
  },
  {
    title: 'Localization is more than translation',
    desc: 'We adapt tone, subtitles, and voice to match the market—without losing meaning.',
  },
]

export default function AboutVisionSection() {
  return (
    <section className="bg-[#0A211F] py-16 text-[#E9F3E6] md:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
          <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.10)_0%,rgba(10,33,31,0)_55%)]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#E9F3E6]/70">
              <Sparkles className="size-4 text-[#8AF7B7]" />
              The Vision
            </div>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#8AF7B7] md:text-4xl">
              AI video isn’t a trend.
              <span className="block text-[#E9F3E6]">It’s a shift in how businesses communicate.</span>
            </h2>

            <p className="mt-4 text-pretty text-base text-[#E9F3E6]/75 md:text-lg">
              Our goal is to help companies use this technology properly—strategically, professionally, and at scale.
              That means building systems that stay consistent as your content grows.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-black/20 text-[#8AF7B7]">
                  <Quote className="size-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed text-[#E9F3E6]/80">
                    “The difference isn’t the tool. It’s the structure—script, pacing, branding, and a repeatable workflow.”
                  </p>
                  <p className="text-xs font-semibold text-[#E9F3E6]/60">— SynthFlow Studio</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-[#8AF7B7] px-6 text-[#0A211F] hover:bg-[#8AF7B7]/90"
              >
                <Link href="/contact#contact-form">
                  Request Proposal <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-white/15 bg-transparent px-6 text-[#E9F3E6] hover:bg-white/10 hover:text-[#E9F3E6]"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-120px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {principles.map((p) => (
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
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.7)]"
                >
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-90">
                    <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#8AF7B7]/12 blur-3xl" />
                    <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-white/8 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#E9F3E6]/55">
                      Principle
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#E9F3E6]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#E9F3E6]/75">
                      {p.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="h-px w-16 bg-white/10" />
                      <div className="text-xs font-semibold text-[#8AF7B7]/80">
                        Premium systems
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { type: 'spring', bounce: 0.25, duration: 0.9 },
                },
              }}
              className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-7 shadow-[0_22px_70px_-60px_rgba(0,0,0,.75)]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#E9F3E6]">
                    The outcome
                  </p>
                  <p className="mt-1 text-sm text-[#E9F3E6]/75">
                    A repeatable AI video pipeline that stays consistent as you scale—across teams, markets, and time.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Clarity', 'Consistency', 'Speed', 'Scale'].map((x) => (
                    <div
                      key={x}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-[#E9F3E6]/80"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
