'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, X, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ViewProject } from './ViewProject'

type Category = 'All' | 'Explainers' | 'Ads' | 'Training' | 'Onboarding' | 'Multilingual' | 'Social'

type PortfolioItem = {
    title: string
    description: string
    category: Exclude<Category, 'All'>
    thumbnail: string
    href: string
}

const categories: Category[] = ['All', 'Explainers', 'Ads', 'Training', 'Onboarding', 'Multilingual', 'Social']

const items: PortfolioItem[] = [
    {
        title: 'Product Explainer',
        description: 'Clear structure + clean scenes that make the product instantly understandable.',
        category: 'Explainers',
        thumbnail:
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/portfolio/product-explainer',
    },
    {
        title: 'Performance Ad',
        description: 'Hook-first pacing designed for retention, clicks, and conversions.',
        category: 'Ads',
        thumbnail:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/portfolio/performance-ad',
    },
    {
        title: 'Onboarding Walkthrough',
        description: 'Step-by-step flow that helps new users get value faster with fewer tickets.',
        category: 'Onboarding',
        thumbnail:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/portfolio/onboarding-walkthrough',
    },
    {
        title: 'Internal Training Module',
        description: 'Repeatable training content built for clarity, consistency, and scale.',
        category: 'Training',
        thumbnail:
            'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/portfolio/training-module',
    },
    {
        title: 'Multilingual Version',
        description: 'Localized delivery with consistent branding across markets and languages.',
        category: 'Multilingual',
        thumbnail:
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/portfolio/multilingual-version',
    },
    {
        title: 'Social Cutdowns',
        description: 'Short-form edits with fast pacing—built for scroll-stopping clarity.',
        category: 'Social',
        thumbnail:
            'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/portfolio/social-cutdowns',
    },
]

function cx(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ')
}

function StaticThumb({ src, alt }: { src: string; alt: string }) {
    const isRemote = /^https?:\/\//.test(src)
    if (isRemote) return <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    return <Image src={src} alt={alt} fill className="object-cover" width={400} height={300} />
}

export default function PortfolioGallerySection() {
    const [query, setQuery] = React.useState('')
    const [active, setActive] = React.useState<Category>('All')

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase()
        return items.filter((it) => {
            const matchCategory = active === 'All' ? true : it.category === active
            const matchQuery = q.length === 0 ? true : `${it.title} ${it.description} ${it.category}`.toLowerCase().includes(q)
            return matchCategory && matchQuery
        })
    }, [query, active])

    return (
        <section className="bg-[#F7F9F2] py-14 text-[#0A211F] md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:max-w-md">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#0A211F]/50" />
                            <Input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search portfolio..."
                                className="h-11 border-black/10 bg-white pl-10 pr-10 shadow-none"
                            />
                            {query.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#0A211F]/55 hover:bg-black/5"
                                    aria-label="Clear search"
                                >
                                    <X className="size-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <div className="md:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="h-11 w-full justify-between border-black/10 bg-white px-4 text-sm font-semibold text-[#0A211F] hover:bg-black/5"
                                    >
                                        <span className="truncate">{active}</span>
                                        <ChevronDown className="size-4 text-[#0A211F]/60" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-full">
                                    {categories.map((c) => (
                                        <DropdownMenuItem
                                            key={c}
                                            onSelect={() => setActive(c)}
                                            className={cx(active === c && 'font-semibold')}
                                        >
                                            {c}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="hidden md:flex md:flex-wrap md:justify-end md:gap-1">
                            {categories.map((c) => (
                                <Button
                                    key={c}
                                    type="button"
                                    variant={active === c ? 'default' : 'outline'}
                                    onClick={() => setActive(c)}
                                    className={cx(
                                        'h-10 px-4 text-sm font-semibold',
                                        active === c
                                            ? 'bg-[#0A211F] text-[#8AF7B7] hover:bg-[#0A211F]/90'
                                            : 'border-black/10 bg-white text-[#0A211F] hover:bg-black/5'
                                    )}
                                >
                                    {c}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="text-sm text-[#0A211F]/65">
                            Showing <span className="font-semibold text-[#0A211F]">{filtered.length}</span> items
                            {active !== 'All' ? (
                                <>
                                    {' '}
                                    in <span className="font-semibold text-[#0A211F]">{active}</span>
                                </>
                            ) : null}
                            {query.trim().length ? (
                                <>
                                    {' '}
                                    for <span className="font-semibold text-[#0A211F]">“{query.trim()}”</span>
                                </>
                            ) : null}
                        </div>

                        <div className="flex items-center gap-2">
                            {active !== 'All' && (
                                <Badge variant="secondary" className="rounded-full">
                                    {active}
                                </Badge>
                            )}
                            {query.trim().length > 0 && (
                                <Badge variant="secondary" className="rounded-full">
                                    Search
                                </Badge>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((it) => (
                            <div className="flex w-full flex-col text-start" key={it.title}>
                                <Card className="mb-3 overflow-hidden rounded-xl border border-black/10 bg-white py-0 shadow-[0_20px_70px_-55px_rgba(0,0,0,.35)]">
                                    <CardContent className="p-0">
                                        <div className="relative h-60 w-full">
                                            <StaticThumb src={it.thumbnail} alt={it.title} />
                                            <div className="absolute left-3 top-3">
                                                <div className="rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[11px] font-semibold text-[#0A211F]/70">
                                                    {it.category}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <span className="text-xl font-semibold tracking-[-0.015em] text-[#0A211F]">{it.title}</span>
                                <p className="mt-2 max-w-[32ch] line-clamp-2 text-[15px] leading-relaxed text-[#0A211F]/70">
                                    {it.description}
                                </p>

                                <div className="mt-3">
                                    <div
                                        className="flex items-center gap-2 text-sm font-medium text-[#0A211F] transition-all duration-500 hover:gap-3"
                                    >
                                        <ViewProject />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-8 text-center">
                            <div className="text-lg font-semibold">No results found</div>
                            <p className="mt-2 text-sm text-[#0A211F]/70">Try a different keyword or switch to another category.</p>
                            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                                <Button
                                    type="button"
                                    onClick={() => setActive('All')}
                                    className="h-10 rounded-full bg-[#0A211F] px-5 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                >
                                    Reset filters
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setQuery('')}
                                    className="h-10 rounded-full border-black/10 bg-white px-5 text-[#0A211F] hover:bg-black/5"
                                >
                                    Clear search
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
