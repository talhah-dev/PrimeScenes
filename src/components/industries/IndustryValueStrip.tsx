'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe2, Palette, Timer, Wand2 } from 'lucide-react'

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
    <section className="bg-[#0A211F] py-16 text-[#E9F3E6] md:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#8AF7B7]/16 blur-3xl" />
          <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.10)_0%,rgba(10,33,31,0)_55%)]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#E9F3E6]/70">
              <span className="inline-block size-1.5 rounded-full bg-[#8AF7B7]" />
              Why it works
            </div>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              A repeatable AI video system that stays premium as you scale
            </h2>

            <p className="mt-4 text-pretty text-base text-[#E9F3E6]/75 md:text-lg">
              Tools can generate video. We build the structure—so your content looks consistent, sounds natural,
              and is easy to update across industries and teams.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-[#8AF7B7] px-6 text-[#0A211F] hover:bg-[#8AF7B7]/90"
              >
                <Link href="/contact#contact-form">
                  Send Your Project Details <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-white/15 bg-transparent px-6 text-[#E9F3E6] hover:bg-white/10 hover:text-[#E9F3E6]"
              >
                <Link href="/services">See all services</Link>
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
            <div className="grid gap-4 sm:grid-cols-2">
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
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.7)]"
                  >
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#8AF7B7]/12 blur-3xl" />
                      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
                    </div>

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-[#8AF7B7]">
                          <Icon className="size-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold">{p.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#E9F3E6]/75">{p.desc}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="h-px w-16 bg-white/10" />
                        <div className="text-xs font-semibold text-[#8AF7B7]/80">Premium output</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
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
              className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 shadow-[0_22px_70px_-60px_rgba(0,0,0,.75)]"
            >
              <div className="p-7 sm:p-8">
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-7">
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#E9F3E6]/55">
                      Best for
                    </div>
                    <p className="mt-2 text-sm text-[#E9F3E6]/80">
                      Training libraries, client education, onboarding systems, and marketing videos that need to stay
                      consistent across teams and markets.
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <div className="grid grid-cols-2 gap-3">
                      {['Training', 'Client Education', 'Onboarding', 'Marketing'].map((x) => (
                        <div
                          key={x}
                          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs font-semibold text-[#E9F3E6]/80"
                        >
                          {x}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-black/15 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-[#E9F3E6]">Want recommendations for your industry?</div>
                  <Button
                    asChild
                    className="h-10 rounded-full bg-[#8AF7B7] px-5 text-[#0A211F] hover:bg-[#8AF7B7]/90"
                  >
                    <Link href="/contact#book">Book a free strategy call</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
