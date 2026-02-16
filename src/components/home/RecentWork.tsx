'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  GraduationCap,
  Megaphone,
  BookOpenCheck,
  Languages,
} from 'lucide-react'

const services = [
  {
    title: 'Training & E-Learning Videos',
    description:
      'Structured modules for onboarding, SOPs, compliance, and internal training—clear, repeatable.',
    href: '/services',
    icon: GraduationCap,
    highlights: ['Onboarding', 'Compliance'],
  },
  {
    title: 'Marketing & Promotional Videos',
    description:
      'Product explainers, landing videos, and campaigns with hook-first pacing—built for clarity.',
    href: '/services',
    icon: Megaphone,
    highlights: ['Explainers', 'Landing videos'],
  },
  {
    title: 'Client Education & Explainers',
    description:
      'Turn complex services into clean, easy-to-follow videos that reduce repetitive calls and build trust.',
    href: '/services',
    icon: BookOpenCheck,
    highlights: ['Healthcare', 'Law', 'SaaS'],
  },
  {
    title: 'Multilingual AI Production',
    description:
      'Localize content properly with subtitles, voice adaptation, and consistent branding across markets.',
    href: '/services',
    icon: Languages,
    highlights: ['Localization', 'Subtitles', 'Voice'],
  },
]

const portfolio = [
  {
    title: 'Product Explainer',
    description: 'Clean scenes + clear story that makes the product instantly understandable.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Performance Ad',
    description: 'Hook-first pacing designed for retention, clicks, and conversions.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Training Module',
    description: 'Structured onboarding that reduces support load and speeds up learning.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Multilingual Version',
    description: 'Localized delivery with consistent branding across markets.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function ServicesAndPortfolio() {
  return (
    <section className="bg-[#0A211F] px-6 py-12 text-[#E9F3E6] md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#E9F3E6]/55">What We Do</div>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-[#8AF7B7] sm:text-5xl">
            AI Video Services Built for Business
          </h2>
          <p className="mt-3 text-pretty text-[17px] text-[#E9F3E6]/75">
            We help companies use AI video technology in a structured and professional way.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_25px_90px_-55px_rgba(0,0,0,.95)] backdrop-blur"
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#8AF7B7]/12 blur-3xl" />
                  <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
                </div>

                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/25 text-[#8AF7B7]">
                      <Icon className="size-5" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold text-[#E9F3E6]/75">
                      Service
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-[#E9F3E6]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#E9F3E6]/70">{s.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {s.highlights.map((h) => (
                      <div
                        key={h}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-[#E9F3E6]/70"
                      >
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={s.href}
                      className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#8AF7B7] px-5 text-sm font-semibold text-[#0A211F] transition hover:bg-[#8AF7B7]/90"
                    >
                      Explore Service <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 md:mt-32">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#E9F3E6]/55">Portfolio Preview</div>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-balance text-3xl font-semibold tracking-tight text-[#E9F3E6] sm:text-4xl">
                See Our Work in Action
              </h3>
              <p className="mt-2 max-w-2xl text-[15px] text-[#E9F3E6]/70">
                A few quick previews—consistent visuals, clean pacing, and on-brand delivery.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-[#E9F3E6] transition hover:bg-white/10"
            >
              View Full Portfolio <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((p) => (
              <div className="flex w-full flex-col text-start" key={p.title}>
                <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_25px_90px_-55px_rgba(0,0,0,.95)] backdrop-blur sm:mb-6">
                  <div className="relative h-60 w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                </div>

                <span className="text-xl font-semibold tracking-[-0.015em] text-[#E9F3E6]">{p.title}</span>
                <p className="mt-2 max-w-[32ch] text-[15px] leading-relaxed text-[#E9F3E6]/70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
