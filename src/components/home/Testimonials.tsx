import Link from 'next/link'
import { StarIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const testimonials = [
    {
        id: 1,
        name: 'Ayesha Khan',
        designation: 'Marketing Lead',
        company: 'SaaS Brand',
        testimonial:
            'SynthFlow made our AI videos feel premium—tight pacing, clean scenes, and the story actually lands. The turnaround was fast and the output stayed on-brand.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Daniel Reed',
        designation: 'Product Manager',
        company: 'Fintech Startup',
        testimonial:
            'We replaced long docs with short onboarding videos. Completion rates went up and support questions went down. The process was smooth from script to final export.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Fatima Noor',
        designation: 'Founder',
        company: 'Agency Studio',
        testimonial:
            'The biggest win is consistency. Every delivery looks like the same brand system—templates, typography, and motion rules are nailed.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Michael Chen',
        designation: 'Growth Manager',
        company: 'E-commerce',
        testimonial:
            'Ad cuts were sharp and performance-focused. Hooks, pacing, and CTAs were stronger than what we were doing manually.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Sara Malik',
        designation: 'L&D Specialist',
        company: 'Enterprise Team',
        testimonial:
            'Training videos were clear, structured, and easy to localize. We shipped multilingual versions without chaos.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Omar Iqbal',
        designation: 'Operations Lead',
        company: 'B2B Company',
        testimonial:
            'It felt like a real production system, not random AI clips. Review cycles were clean and revisions were handled fast.',
        rating: 5,
    },
]

function Stars({ count }: { count: number }) {
    return (
        <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                    key={i}
                    className={
                        i < count
                            ? 'h-5 w-5 fill-[#D8F782] stroke-[#D8F782]'
                            : 'h-5 w-5 fill-transparent stroke-black/20'
                    }
                />
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="bg-[#F7F9F2] px-6 py-16 text-[#0A211F] md:py-24">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] lg:text-5xl">
                        Trusted by teams shipping video at scale
                    </h2>
                    <p className="mt-4 text-base text-[#0A211F]/75 md:text-lg">
                        Real feedback from founders, marketers, and operators using SynthFlow for ads, onboarding, and training.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <Button
                            asChild
                            className="h-11 rounded-full bg-[#0A211F] px-6 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                        >
                            <Link href="/testimonials">View all testimonials</Link>
                        </Button>
                    </div>
                </div>

                <div className="mx-auto mt-10 w-full max-w-(--breakpoint-xl) sm:mt-14">
                    <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-black/10 bg-white/60 backdrop-blur-sm md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="flex flex-col px-6 py-8 outline outline-1 outline-black/10"
                            >
                                <Stars count={t.rating} />

                                <p className="my-6 max-w-md text-center text-[16px] leading-relaxed text-[#0A211F]/85">
                                    &quot;{t.testimonial}&quot;
                                </p>

                                <div className="mt-auto flex items-center justify-center gap-3">
                                    <Avatar className="size-9">
                                        <AvatarFallback className="bg-[#0A211F] font-medium text-[#8AF7B7]">
                                            {t.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="text-left">
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-sm text-[#0A211F]/60">
                                            {t.designation} · {t.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
