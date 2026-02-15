'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
]

export const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 18)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuState(false)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    React.useEffect(() => {
        document.body.style.overflow = menuState ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuState])

    return (
        <header className="relative z-50">
            <nav className="fixed left-0 top-0 w-full px-2">
                <div
                    className={cn(
                        'mx-auto mt-3 max-w-7xl px-4 transition-all duration-300 sm:px-6 lg:px-10',
                        isScrolled &&
                        'max-w-6xl rounded-2xl border border-white/10 bg-[#0A211F]/70 shadow-[0_20px_70px_-45px_rgba(0,0,0,.85)] backdrop-blur-xl'
                    )}
                >
                    <div className="relative flex items-center justify-between w-full py-3 lg:py-4">
                        <Link href="/" aria-label="home" className="flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#8AF7B7] shadow-[0_10px_30px_-20px_rgba(138,247,183,.6)]">
                                <span className="text-sm font-semibold">SF</span>
                            </span>
                            <span className="text-base font-semibold tracking-tight text-[#8AF7B7]">SynthFlow</span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-10">
                            <ul className="flex items-center gap-8 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-[#E9F3E6]/75 hover:text-[#8AF7B7] transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="lg:flex hidden items-center gap-3">
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="h-10 rounded-full border hover:text-white border-white/10 bg-white/5 px-5 text-[#E9F3E6] hover:bg-white/10"
                            >
                                <Link href="/portfolio">View work</Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="h-10 rounded-full bg-[#D8F782] px-5 font-medium text-[#0A211F] hover:bg-[#CFF06F]"
                            >
                                <Link href="/contact">Get a quote</Link>
                            </Button>
                        </div>

                        <button
                            onClick={() => setMenuState((v) => !v)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            aria-expanded={menuState}
                            className="relative z-[60] -m-2.5 block cursor-pointer p-2.5 lg:hidden"
                        >
                            <span className="relative block size-6">
                                <Menu
                                    className={cn(
                                        'absolute inset-0 m-auto size-6 text-[#E9F3E6] transition-all duration-200',
                                        menuState ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                                    )}
                                />
                                <X
                                    className={cn(
                                        'absolute inset-0 m-auto size-6 text-[#E9F3E6] transition-all duration-200',
                                        menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
                                    )}
                                />
                            </span>
                        </button>
                    </div>
                </div>

                <div
                    className={cn(
                        'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
                        menuState ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                    )}
                    onClick={() => setMenuState(false)}
                    aria-hidden
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>

                <div
                    className={cn(
                        'fixed left-0 right-0 top-0 z-50 lg:hidden',
                        'transition-all duration-300 ease-out',
                        menuState ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 pointer-events-none'
                    )}
                >
                    <div className="mx-auto mt-3 max-w-6xl px-2">
                        <div className="rounded-3xl border border-white/10 bg-[#0A211F]/90 shadow-[0_25px_90px_-55px_rgba(0,0,0,.95)] backdrop-blur-xl">
                            <div className="px-6 pb-6 pt-16">
                                <ul className="space-y-5 text-base">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setMenuState(false)}
                                                className="block text-[#E9F3E6]/85 transition-colors duration-200 hover:text-[#8AF7B7]"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="lg"
                                        className="h-12 rounded-full border border-white/10 bg-white/5 px-6 text-[#E9F3E6] hover:bg-white/10"
                                    >
                                        <Link href="/portfolio" onClick={() => setMenuState(false)}>
                                            View work
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full bg-[#D8F782] px-6 font-medium text-[#0A211F] hover:bg-[#CFF06F]"
                                    >
                                        <Link href="/contact" onClick={() => setMenuState(false)}>
                                            Get a quote
                                        </Link>
                                    </Button>
                                </div>

                                <div className="mt-6 text-xs text-[#E9F3E6]/55 text-center">
                                    Human creativity. <span className="italic text-[#8AF7B7]">AI acceleration.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
