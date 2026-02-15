'use client'

import React from 'react'
import Link from 'next/link'
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
    return (
        <section className="bg-[#F7F9F2] pb-16 md:pt-10 pt-2 text-[#0A211F] md:pb-24">
            <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
                <b className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">Contact</b>

                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                    Let’s build something great together.
                </h2>

                <p className="mt-3 max-w-2xl text-base text-[#0A211F]/70 sm:text-lg">
                    Have a question, issue, or request? Send a message and we’ll get back to you soon.
                </p>

                <div className="md:mt-14 mt-6 grid md:grid-cols-2 grid-cols-1  gap-5">
                    <div className="grid w-full grid-cols-1 gap-1 rounded-3xl border border-black/10 bg-white/70 p-1 *:rounded-2xl *:border *:border-black/10 *:bg-white *:p-6 sm:grid-cols-2 ">
                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <MailIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Email</h3>
                            <p className="my-2.5 text-[#0A211F]/70">Send details anytime.</p>
                            <Link
                                className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80"
                                href="mailto:hello@synthflow.com"
                            >
                                hello@synthflow.com
                            </Link>
                        </div>

                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <MessageCircle />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Live chat</h3>
                            <p className="my-2.5 text-[#0A211F]/70">Quick question? Start a chat.</p>
                            <Link className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80" href="#">
                                Start new chat
                            </Link>
                        </div>

                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <MapPinIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Location</h3>
                            <p className="my-2.5 text-[#0A211F]/70">Remote-first. Available worldwide.</p>
                            <Link
                                className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80"
                                href="https://map.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Karachi, PK · Global delivery
                            </Link>
                        </div>

                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <PhoneIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Phone</h3>
                            <p className="my-2.5 text-[#0A211F]/70">Mon–Fri · 10am–6pm</p>
                            <Link
                                className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80"
                                href="tel:+0000000000"
                            >
                                +00 000 000 000
                            </Link>
                        </div>
                    </div>

                    <div className="w-full rounded-3xl border border-black/10 bg-white/70 p-1">
                        <Card className="rounded-[22px] border-black/10 bg-white shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)]">
                            <CardHeader>
                                <CardTitle>Send a message</CardTitle>
                                <CardDescription>Simple form for questions, issues, feedback, or complaints.</CardDescription>
                            </CardHeader>

                            <CardContent className="mt-2">
                                <form className="space-y-6">
                                    <div className="grid gap-6">
                                        <div>
                                            <Label htmlFor="name">
                                                Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="name"
                                                required
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="Your name"
                                                autoComplete="name"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email">
                                                Email <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                required
                                                type="email"
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="you@company.com"
                                                autoComplete="email"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="phone">Phone / WhatsApp</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="+92..."
                                                autoComplete="tel"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message">
                                                Message <span className="text-red-500">*</span>
                                            </Label>
                                            <Textarea
                                                id="message"
                                                required
                                                className="mt-2 bg-white shadow-none"
                                                placeholder="Tell us what you need or what issue you’re facing."
                                                rows={6}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full rounded-full bg-[#0A211F] text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                    >
                                        Send message
                                    </Button>

                                    <p className="text-center text-xs text-[#0A211F]/55">We typically reply within 24 hours on business days.</p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
