import { BarChart3, Languages, LayoutTemplate, PenLine, ShieldCheck, Timer } from 'lucide-react'

const items = [
    {
        icon: PenLine,
        title: 'Script-first',
        description: 'Hooks, clarity, pacing—built for retention and results.',
    },
    {
        icon: LayoutTemplate,
        title: 'Brand-consistent',
        description: 'Templates and visual rules so every video looks on-brand.',
    },
    {
        icon: Timer,
        title: 'Fast delivery',
        description: 'A production pipeline optimized for speed and iterations.',
    },
    {
        icon: Languages,
        title: 'Multilingual',
        description: 'Localize quickly with subtitles, voice, and regional variants.',
    },
    {
        icon: BarChart3,
        title: 'Performance edits',
        description: 'Ads, explainers, onboarding, and training designed to convert.',
    },
    {
        icon: ShieldCheck,
        title: 'Clean handoff',
        description: 'Organized assets, versions, and client-ready exports.',
    },
]

export default function FeaturesSection() {
    return (
        <section className="bg-[#F7F9F2] py-12 text-[#0A211F] md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-14">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-10">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">
                        The foundation for premium AI video.
                    </h2>
                    <p className="text-base leading-relaxed text-[#0A211F]/75">
                        SynthFlow combines human storytelling with a repeatable AI production system—so your content stays
                        consistent, fast, and scalable across campaigns and teams.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y divide-black/10 border border-black/10 bg-white/60 backdrop-blur-sm *:p-10 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it) => {
                        const Icon = it.icon
                        return (
                            <div key={it.title} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="grid size-8 place-items-center rounded-full bg-[#0A211F] text-[#8AF7B7]">
                                        <Icon className="size-4" />
                                    </span>
                                    <h3 className="text-sm font-semibold">{it.title}</h3>
                                </div>
                                <p className="text-sm text-[#0A211F]/70">{it.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
