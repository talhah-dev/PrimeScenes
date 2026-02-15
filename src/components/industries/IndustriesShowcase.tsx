'use client'

import * as React from 'react'
import {
  Gavel,
  Stethoscope,
  Laptop2,
  Briefcase,
  GraduationCap,
  Headset,
  BadgeDollarSign,
  ShieldCheck,
  Megaphone,
  Search,
  Check,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Industry = {
  title: string
  intro: string
  benefit: string
  useCases: string[]
  icon: React.ElementType
}

const industries: Industry[] = [
  {
    title: 'Law Firms',
    intro: 'Law firms spend too much time answering the same client questions and explaining procedures. AI videos make client education simple and consistent.',
    benefit: 'Save time and keep clients informed.',
    useCases: ['Client onboarding videos', 'Case process walkthroughs', 'FAQ explainers'],
    icon: Gavel,
  },
  {
    title: 'Healthcare & Dental Clinics',
    intro: 'Patients often have questions about treatments, procedures, and clinic policies. AI videos educate patients clearly, freeing your staff for higher-value tasks.',
    benefit: 'Reduce repetitive calls and improve patient satisfaction.',
    useCases: ['Procedure explanation videos', 'Appointment prep guides', 'Health education videos'],
    icon: Stethoscope,
  },
  {
    title: 'SaaS & Technology Companies',
    intro: 'Product features and onboarding can be confusing for new users. AI videos deliver clear, step-by-step guidance at scale.',
    benefit: 'Faster user adoption and fewer support requests.',
    useCases: ['Product walkthroughs', 'Feature demos', 'Onboarding tutorials'],
    icon: Laptop2,
  },
  {
    title: 'Consulting Firms',
    intro: 'Clients need consistent explanations of processes, recommendations, or deliverables. AI videos help present information clearly while maintaining professionalism.',
    benefit: 'Improve clarity and client satisfaction.',
    useCases: ['Client briefings', 'Process explanations', 'Training for staff'],
    icon: Briefcase,
  },
  {
    title: 'Learning & Development Teams',
    intro: 'Creating training content takes time and effort. AI videos provide consistent learning modules that can be easily updated and scaled.',
    benefit: 'Save time and ensure consistency across teams.',
    useCases: ['Employee onboarding', 'Compliance training', 'Skill development modules'],
    icon: GraduationCap,
  },
  {
    title: 'Customer Service Departments',
    intro: 'Support teams get repetitive questions daily. AI videos answer common questions and guide customers efficiently.',
    benefit: 'Reduce workload and improve customer experience.',
    useCases: ['FAQ videos', 'Service process walkthroughs', 'Account setup guides'],
    icon: Headset,
  },
  {
    title: 'Sales Teams',
    intro: 'Sales reps need consistent messaging and demos for prospects. AI videos deliver professional, repeatable presentations at scale.',
    benefit: 'Improve conversion and save time for sales reps.',
    useCases: ['Product demos', 'Objection handling videos', 'Proposal support'],
    icon: BadgeDollarSign,
  },
  {
    title: 'Information Technology Departments',
    intro: 'IT teams spend hours explaining systems, tools, and procedures. AI videos provide clear step-by-step instructions for staff.',
    benefit: 'Reduce repeated explanations and increase efficiency.',
    useCases: ['Software tutorials', 'System onboarding videos', 'Security awareness videos'],
    icon: ShieldCheck,
  },
  {
    title: 'Marketing Teams',
    intro: 'Marketing campaigns need consistent, professional content across channels. AI videos help scale campaigns without extra studio costs.',
    benefit: 'Maintain brand consistency and reach a wider audience.',
    useCases: ['Product announcements', 'Multilingual campaigns', 'Thought leadership videos'],
    icon: Megaphone,
  },
]

const MAX_ITEMS = 7

function makeId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function IndustriesShowcase() {
  const [q, setQ] = React.useState('')
  const [openValues, setOpenValues] = React.useState<string[]>([])

  const filtered = React.useMemo(() => {
    const needle = q.trim().toLowerCase()
    const list = needle
      ? industries.filter((x) => {
          const hay = [
            x.title,
            x.intro,
            x.benefit,
            ...x.useCases,
          ]
            .join(' ')
            .toLowerCase()
          return hay.includes(needle)
        })
      : industries

    return list.slice(0, MAX_ITEMS).map((x) => ({ ...x, id: makeId(x.title) }))
  }, [q])

  React.useEffect(() => {
    const first = filtered[0]?.id
    const allowed = new Set(filtered.map((x) => x.id))
    const cleaned = openValues.filter((v) => allowed.has(v))

    if (cleaned.length === 0 && first) {
      setOpenValues([first])
      return
    }

    if (cleaned.length !== openValues.length) {
      setOpenValues(cleaned)
    }
  }, [filtered])

  const allOpen = filtered.length > 0 && openValues.length === filtered.length
  const toggleAll = () => {
    if (filtered.length === 0) return
    if (allOpen) {
      setOpenValues([filtered[0].id])
    } else {
      setOpenValues(filtered.map((x) => x.id))
    }
  }

  return (
    <section className=" py-8 text-[#0A211F] md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Card className="shadow-none border-0">
          <CardContent className="">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#0A211F]/55" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search industries, use cases, benefits..."
                  className="h-11 rounded-xl border-black/10 bg-white pl-10 text-[#0A211F] placeholder:text-[#0A211F]/50 focus-visible:ring-[#0A211F]/10"
                />
              </div>

              <Button
                type="button"
                onClick={toggleAll}
                variant="outline"
                className="h-11 rounded-xl border-black/10 bg-white px-5 text-[#0A211F] hover:bg-black/5"
                disabled={filtered.length === 0}
              >
                {allOpen ? 'Collapse all' : 'Expand all'}
              </Button>
            </div>

            <div className="mt-4 rounded-3xl border border-black/10 bg-white/60 p-2 sm:p-3">
              {filtered.length === 0 ? (
                <div className="grid place-items-center px-4 py-10 text-sm text-[#0A211F]/65">
                  No results. Try a different keyword.
                </div>
              ) : (
                <Accordion type="multiple" value={openValues} onValueChange={setOpenValues} className="space-y-2">
                  {filtered.map((ind) => {
                    const Icon = ind.icon
                    return (
                      <AccordionItem
                        key={ind.id}
                        value={ind.id}
                        className="overflow-hidden rounded-xl border border-black/10 bg-white"
                      >
                        <AccordionTrigger className="px-4 py-4 text-left hover:no-underline sm:px-5">
                          <div className="flex items-center gap-3">
                            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                              <Icon className="size-5" />
                            </span>
                            <div className="min-w-0">
                              <div className="truncate text-base font-semibold text-[#0A211F]">{ind.title}</div>
                              <div className="mt-0.5 line-clamp-1 text-sm text-[#0A211F]/65">{ind.benefit}</div>
                            </div>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-5 sm:px-5">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-black/10 bg-[#F7F9F2]/60 p-4">
                              <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                Use cases
                              </div>
                              <div className="mt-3 space-y-2">
                                {ind.useCases.map((u) => (
                                  <div key={u} className="flex items-start gap-2 text-sm text-[#0A211F]/75">
                                    <span className="mt-1.5 block size-1.5 rounded-full bg-[#0A211F]/60" />
                                    <span>{u}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-xl border border-black/10 bg-[#F7F9F2]/60 p-4">
                              <div className="text-xs font-semibold uppercase tracking-wide text-[#0A211F]/55">
                                Details
                              </div>
                              <p className="mt-3 text-sm leading-relaxed text-[#0A211F]/75">{ind.intro}</p>

                              <div className="mt-4 rounded-xl border border-black/10 bg-white/80 p-3">
                                <div className="flex items-start gap-2 text-sm text-[#0A211F]/80">
                                  <span className="mt-0.5 shrink-0 grid size-6 place-items-center rounded-full bg-[#0A211F] text-[#8AF7B7]">
                                    <Check className="size-4" />
                                  </span>
                                  <span className="leading-relaxed">{ind.benefit}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
