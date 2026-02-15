'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Layers, BadgeCheck, Repeat2, Wallet, Sparkles } from 'lucide-react'

const outcomes = [
  {
    title: 'Scale Content Production',
    desc: 'Build a pipeline that produces consistent videos on schedule—without chaos.',
    icon: Layers,
  },
  {
    title: 'Reduce Traditional Costs',
    desc: 'Cut production overhead while keeping output polished and business-ready.',
    icon: Wallet,
  },
  {
    title: 'Maintain Brand Consistency',
    desc: 'Repeatable templates and styling ensure every video feels like your brand.',
    icon: BadgeCheck,
  },
  {
    title: 'Repeatable Messaging',
    desc: 'Clear structure and systems that make updates fast across teams and markets.',
    icon: Repeat2,
  },
]

export default function AboutApproachSection() {
  return (
    <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 shadow-[0_24px_80px_-70px_rgba(0,0,0,.45)]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#0A211F]/10 blur-3xl" />
            <div className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-[#8AF7B7]/22 blur-3xl" />
            <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(10,33,31,0.08)_0%,rgba(255,255,255,0)_55%)]" />
          </div>

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
                <Sparkles className="size-4 text-[#0A211F]" />
                Our Approach
              </div>

              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                We treat AI video like a system—
                <span className="block text-[#0A211F]/70">not a one-off project.</span>
              </h2>

              <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                Whether it’s one video or an entire content pipeline, we build with long-term efficiency in mind—so your
                team can publish faster, stay consistent, and scale without complexity.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 rounded-full bg-[#0A211F] px-6 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                >
                  <Link href="/contact#contact-form">
                    Discuss Your Project <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-black/10 bg-white px-6 text-[#0A211F] hover:bg-black/5"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-white/80 p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                  Built for long-term teams
                </div>
                <div className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">
                  You get templates, workflows, and structure that make updates easy—so content doesn’t break when things
                  change.
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
              {outcomes.map((o) => {
                const Icon = o.icon
                return (
                  <motion.div
                    key={o.title}
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
                    <Card className="group h-full rounded-3xl border-black/10 bg-white shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[#0A211F]/25">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                            <Icon className="size-5" />
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold">{o.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-[#0A211F]/70">{o.desc}</p>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="h-px w-16 bg-black/10 transition group-hover:w-24" />
                          <div className="text-xs font-semibold text-[#0A211F]/55">System-first</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
