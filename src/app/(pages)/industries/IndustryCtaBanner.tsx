'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays, Mail } from 'lucide-react'

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

export default function IndustryCtaBanner() {
  return (
    <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/70 shadow-[0_24px_90px_-70px_rgba(0,0,0,.5)]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 -top-28 h-[26rem] w-[26rem] rounded-full bg-[#0A211F]/10 blur-3xl" />
            <div className="absolute -right-32 top-8 h-[30rem] w-[30rem] rounded-full bg-[#8AF7B7]/22 blur-3xl" />
            <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.16)_0%,rgba(247,249,242,0)_58%)]" />
          </div>

          <div className="relative p-7 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
                className="lg:col-span-5"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0A211F]/70">
                  <span className="inline-block size-1.5 rounded-full bg-[#0A211F]/60" />
                  Next step
                </div>

                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Ready to create AI videos for your industry?
                </h2>

                <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
                  Whether it’s training, client education, or marketing—we’ll help you build a professional, scalable
                  AI video system that stays consistent.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-full bg-[#0A211F] px-6 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                  >
                    <Link href="/contact#book">
                      Book a Free Strategy Call <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-black/10 bg-white px-6 text-[#0A211F] hover:bg-black/5"
                  >
                    <Link href="/contact#contact-form">
                      Send Project Details <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#0A211F]/65">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
                    <CalendarDays className="size-4" />
                    15–20 min call
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
                    <Mail className="size-4" />
                    Proposal in 24–48h
                  </div>
                </div>
              </motion.div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 md:grid-cols-3">
                  {steps.map((s) => (
                    <motion.div
                      key={s.n}
                      initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.9 }}
                      className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6"
                    >
                      <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
                      </div>

                      <div className="relative">
                        <div className="text-sm font-semibold text-[#0A211F]/55">{s.n}</div>
                        <div className="mt-2 text-lg font-semibold text-[#0A211F]">{s.title}</div>
                        <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">{s.desc}</p>

                        <div className="mt-6 h-px w-16 bg-black/10" />
                        <div className="mt-3 text-xs font-semibold text-[#0A211F]/55">Clear + repeatable</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-[2rem] border border-black/10 bg-[#0A211F] text-[#E9F3E6]">
                  <div className="relative p-7 sm:p-8">
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#8AF7B7]/20 blur-3xl" />
                      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                    </div>

                    <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
                      <div className="md:col-span-8">
                        <div className="text-xs font-semibold uppercase tracking-wide text-[#E9F3E6]/60">
                          Fastest way to start
                        </div>
                        <p className="mt-2 text-sm text-[#E9F3E6]/80">
                          Send one example: a policy doc, onboarding steps, FAQ list, or feature notes. We’ll turn it into a
                          clean video structure + production plan.
                        </p>
                      </div>

                      <div className="md:col-span-4 md:text-right">
                        <Button
                          asChild
                          className="h-11 rounded-full bg-[#8AF7B7] px-6 text-[#0A211F] hover:bg-[#8AF7B7]/90"
                        >
                          <Link href="/contact#contact-form">
                            Request Proposal <ArrowRight className="ml-2 size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-black/20 px-7 py-5 text-xs text-[#E9F3E6]/65 sm:px-8">
                    No hard pitch. Just a clear plan, timeline, and the exact system you’ll get.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
