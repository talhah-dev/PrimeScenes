'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'How fast can you deliver the first draft?',
    a: 'Most projects get a first draft in 3–7 business days depending on length, script readiness, and the number of versions needed.',
  },
  {
    q: 'What do you need from us to start?',
    a: 'A clear goal, target audience, brand references (logo/colors/fonts), key talking points, and any existing assets like screenshots, slides, or product demos.',
  },
  {
    q: 'Do you provide scripting and structure?',
    a: 'Yes. We can write the script from your notes, restructure an existing script, or adapt a document into a clean, video-ready flow.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Typically 2 structured revision rounds are included. If you need ongoing updates, we can set up templates and a repeatable system.',
  },
  {
    q: 'Can you produce multilingual versions?',
    a: 'Yes. We can translate, localize, adapt voice/subtitles, and keep branding consistent across languages and markets.',
  },
  {
    q: 'Can you help us scale ongoing video content?',
    a: 'Absolutely. We build branded templates, repeatable workflows, and structured video series so your team can produce consistent content long-term.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', bounce: 0.25, duration: 0.9 },
  },
}

export default function ServicesFAQSection() {
  return (
    <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Answers to the most common questions
          </h2>
          <p className="mt-3 text-pretty text-base text-[#0A211F]/70 md:text-lg">
            Everything you need to know about timelines, inputs, revisions, and scaling your video system.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-2 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] md:mt-16"
        >
          <motion.div variants={item} className="rounded-2xl bg-white">
            <Accordion type="single" collapsible className="px-2 py-1">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${idx + 1}`}
                  className="border-black/10"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0A211F] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#0A211F]/70">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)] md:mt-12 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h3 className="text-balance text-xl font-semibold md:text-2xl">
                Want a proposal tailored to your exact use case?
              </h3>
              <p className="mt-2 text-sm text-[#0A211F]/70 md:text-base">
                Tell us your project type, timeline, and goals—we’ll send a clear plan with pricing and deliverables.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Button
                asChild
                className="h-11 rounded-full bg-[#0A211F] px-6 text-[#8AF7B7] hover:bg-[#0A211F]/90"
              >
                <Link href="/contact#contact-form">
                  Request Proposal <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-black/10 bg-white px-6 text-[#0A211F] hover:bg-black/5"
              >
                <Link href="/contact#contact-form">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
