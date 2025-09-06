import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">
                        Everything you need for smarter note-taking
                    </h2>
                    <p>
                        MD Notes is more than just a simple notes app. It’s a fast, secure, and intuitive
                        way to capture ideas, stay organized, and boost your productivity.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Lightning Fast</h3>
                        </div>
                        <p className="text-sm">
                            Create, edit, and search your notes instantly — no delays, just flow.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful Editor</h3>
                        </div>
                        <p className="text-sm">
                            Enjoy a clean, modern editor with markdown support and smart shortcuts.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />
                            <h3 className="text-sm font-medium">Secure</h3>
                        </div>
                        <p className="text-sm">
                            Your notes are safe, private, and always accessible only to you.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">Customizable</h3>
                        </div>
                        <p className="text-sm">
                            Personalize your workspace with themes, tags, and flexible organization.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">Stay in Control</h3>
                        </div>
                        <p className="text-sm">
                            Organize your notes your way — folders, filters, and quick search included.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">AI-Assisted</h3>
                        </div>
                        <p className="text-sm">
                            Summarize, organize, and find insights with smart AI-powered features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
