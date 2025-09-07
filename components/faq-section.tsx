'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'pencil',
            question: 'Does MD Notes support Markdown?',
            answer: 'Yes! MD Notes is built with full Markdown support, so you can use shortcuts like **bold**, _italic_, code blocks, checklists, and more to structure your notes quickly.',
        },
        {
            id: 'item-2',
            icon: 'cloud',
            question: 'Where are my notes stored?',
            answer: 'Your notes are securely stored in the cloud, so you can access them anytime, anywhere. Offline mode is also supported, and your notes will sync once you reconnect.',
        },
        {
            id: 'item-3',
            icon: 'shield',
            question: 'Is my data safe with MD Notes?',
            answer: 'Absolutely. All notes are encrypted both in transit and at rest. Only you have access to your content, and we never sell or share your data.',
        },
        {
            id: 'item-4',
            icon: 'smartphone',
            question: 'Can I use MD Notes on mobile?',
            answer: 'Yes. MD Notes works seamlessly on desktop, tablet, and mobile browsers. A dedicated mobile app is coming soon for iOS and Android.',
        },
        {
            id: 'item-5',
            icon: 'credit-card',
            question: 'Is MD Notes free to use?',
            answer: 'MD Notes offers a free plan with all core features. For power users, our Pro plan unlocks unlimited storage, advanced collaboration, and priority support.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can’t find what you’re looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
