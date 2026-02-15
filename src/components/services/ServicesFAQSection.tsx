'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
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
    <section className="bg-[#F7F9F2] pb-16 md:pt-8 pt-5 text-[#0A211F] md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="flex flex-col items-start gap-x-12 gap-y-8 md:flex-row md:items-start"
        >
          <motion.div variants={item} className="md:max-w-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">FAQ</div>
            <h2 className="mt-3 text-balance md:text-4xl text-3xl font-semibold leading-[1.12] tracking-[-0.03em] ">
              Answers to the most common questions
            </h2>
            <p className="mt-4 text-pretty text-base text-[#0A211F]/70 md:text-lg">
              Everything you need to know about timelines, inputs, revisions, and scaling your video system.
            </p>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <Accordion className="w-full" defaultValue="question-0" type="single" collapsible>
              {faqs.map((f, index) => (
                <AccordionItem key={f.q} value={`question-${index}`} className="border-black/10">
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0A211F] hover:no-underline md:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#0A211F]/70 md:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
