'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { BadgeCheck, Captions, Film, Languages, Palette, TrendingUp, ChevronRight, Sparkles } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

function makeId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function AboutWhyClientsWorkWithUs() {
  const [active, setActive] = React.useState(0)
  const current = pillars[active]

  return (
    <section className="relative overflow-hidden bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
            <BadgeCheck className="size-4 text-[#0A211F]" />
            Why Clients Work With Us
          </div>

          <h2 className="mt-4 text-balance text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
            AI video is easy to generate.
            <span className="block text-[#0A211F]/70">Good AI video is engineered.</span>
          </h2>

          <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
            Most AI videos fail on structure, pacing, and consistency. We focus on the craft that makes it feel premium,
            human, and ready for real business use.
          </p>

          <div className="mx-auto mt-6 w-full max-w-sm lg:hidden">
            <Select
              value={String(active)}
              onValueChange={(v) => setActive(Number(v))}
            >
              <SelectTrigger className="py-5 w-full border-black/10 bg-white/80 text-[#0A211F] shadow-sm">
                <SelectValue placeholder="Select a pillar" />
              </SelectTrigger>
              <SelectContent>
                {pillars.map((p, idx) => (
                  <SelectItem key={makeId(p.title)} value={String(idx)}>
                    {p.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-120px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="rounded-xl border border-black/10 bg-white/70 p-2 shadow-[0_22px_70px_-60px_rgba(0,0,0,.30)]">
              {pillars.map((p, idx) => {
                const Icon = p.icon
                const isActive = idx === active
                return (
                  <motion.button
                    key={p.title}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.7 } },
                    }}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={[
                      'group flex w-full items-start gap-3 rounded-xl border px-4 py-4 text-left transition',
                      isActive
                        ? 'border-black/15 bg-white shadow-sm'
                        : 'border-transparent hover:border-black/10 hover:bg-white/80',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'grid size-11 shrink-0 place-items-center rounded-xl border transition',
                        isActive
                          ? 'border-black/10 bg-[#0A211F] text-[#8AF7B7]'
                          : 'border-black/10 bg-white text-[#0A211F]',
                      ].join(' ')}
                    >
                      <Icon className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <div className="truncate text-sm font-semibold text-[#0A211F]">{p.title}</div>
                        <ChevronRight
                          className={[
                            'mt-0.5 size-4 shrink-0 text-[#0A211F]/45 transition',
                            isActive ? 'translate-x-0.5 text-[#0A211F]/65' : 'group-hover:translate-x-0.5',
                          ].join(' ')}
                        />
                      </div>
                      <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#0A211F]/65">{p.desc}</div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <Card className="relative overflow-hidden rounded-xl border-black/10 bg-white/70 p-0 shadow-[0_22px_80px_-70px_rgba(0,0,0,.40)]">
              <CardContent className="relative p-6 sm:p-8">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={makeId(current.title)}
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    transition={{ type: 'spring', bounce: 0.5, duration: 0.4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                        <current.icon className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-2xl font-semibold tracking-tight">{current.title}</div>
                        <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70 sm:text-base">{current.desc}</p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {[
                        { k: 'What we fix', v: 'Robotic pacing, vague scripts, and scenes that don’t land.' },
                        { k: 'What you get', v: 'A repeatable structure that stays consistent as content grows.' },
                        { k: 'Best for', v: 'Training libraries, onboarding, product explainers, internal comms.' },
                        { k: 'Outcome', v: 'Clearer communication, fewer back-and-forths, faster scale.' },
                      ].map((x) => (
                        <div key={x.k} className="rounded-2xl border border-black/10 bg-white/70 p-4">
                          <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">{x.k}</div>
                          <div className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">{x.v}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-black/10 bg-[#0A211F] p-5 text-[#E9F3E6]">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-[#8AF7B7]">
                          <Sparkles className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">The difference</div>
                          <div className="mt-1 text-sm leading-relaxed text-[#E9F3E6]/80">
                            We treat AI video like a system: repeatable templates + human pacing + brand rules—so output
                            stays premium as volume increases.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
