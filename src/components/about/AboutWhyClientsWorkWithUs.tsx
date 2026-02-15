'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { BadgeCheck, Captions, Film, Languages, Palette, TrendingUp } from 'lucide-react'

const pillars = [
  {
    title: 'Natural Script Flow',
    desc: 'Scripts that sound human on AI avatars—clear, direct, and easy to follow.',
    icon: Captions,
  },
  {
    title: 'Pacing & Scene Structure',
    desc: 'Professional timing, clean scene transitions, and a rhythm that keeps attention.',
    icon: Film,
  },
  {
    title: 'Brand Consistency',
    desc: 'Typography, colors, layout, and visuals aligned across every video—always on brand.',
    icon: Palette,
  },
  {
    title: 'Multilingual Localization',
    desc: 'Localization done properly—language, tone, subtitles, and voice adaptation.',
    icon: Languages,
  },
  {
    title: 'Business Outcomes',
    desc: 'Training, onboarding, marketing, sales—videos built to drive real results.',
    icon: TrendingUp,
  },
]

export default function AboutWhyClientsWorkWithUs() {
  return (
    <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
              <BadgeCheck className="size-4 text-[#0A211F]" />
              Why Clients Work With Us
            </div>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              AI video is easy to generate.
              <span className="block text-[#0A211F]/70">Good AI video is not.</span>
            </h2>

            <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
              Most AI-generated content looks robotic or poorly structured. We focus on the details that make AI videos
              feel premium, human, and business-ready.
            </p>

            <div className="mt-8 hidden lg:block">
              <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)]">
                <p className="text-sm font-semibold text-[#0A211F]">
                  What you get:
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">
                  Clean structure, consistent branding, and a repeatable system—so your content scales without turning
                  into chaos.
                </p>
                <div className="mt-5 grid gap-2">
                  {['Clarity', 'Consistency', 'Speed', 'Scale'].map((x) => (
                    <div key={x} className="flex items-center gap-2 text-sm text-[#0A211F]/75">
                      <span className="block size-1.5 rounded-full bg-[#0A211F]/70" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-120px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="grid gap-5 lg:col-span-7 sm:grid-cols-2"
          >
            {pillars.map((p) => {
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
                  className="h-full"
                >
                  <Card className="group h-full rounded-3xl border-black/10 bg-white/70 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/25">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                          <Icon className="size-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold">{p.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#0A211F]/70">{p.desc}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="h-px w-16 bg-black/10 transition group-hover:w-24" />
                        <div className="text-xs font-semibold text-[#0A211F]/55">Quality-first</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="lg:hidden">
            <div className="mt-4 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)]">
              <p className="text-sm font-semibold text-[#0A211F]">What you get:</p>
              <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">
                Clean structure, consistent branding, and a repeatable system—so your content scales without turning into
                chaos.
              </p>
              <div className="mt-5 grid gap-2">
                {['Clarity', 'Consistency', 'Speed', 'Scale'].map((x) => (
                  <div key={x} className="flex items-center gap-2 text-sm text-[#0A211F]/75">
                    <span className="block size-1.5 rounded-full bg-[#0A211F]/70" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
