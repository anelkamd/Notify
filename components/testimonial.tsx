import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Trusted by thinkers, loved by note-takers
                    </h2>
                    <p>
                        MD Notes is more than just a note-taking app. It empowers students, professionals,
                        and creatives to capture ideas, organize projects, and stay productive with ease.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img
                                className="h-6 w-fit dark:invert"
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="React Logo"
                                height="24"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    MD Notes completely changed how I organize my work. With markdown support
                                    and an intuitive interface, I save hours every week. It feels natural to
                                    write and structure my thoughts.
                                </p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="Jane Doe"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Jane Doe</cite>
                                        <span className="text-muted-foreground block text-sm">Product Manager</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    Writing my lecture notes has never been this easy. I just open MD Notes,
                                    write in markdown, and everything is beautifully organized.
                                </p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/46.jpg"
                                            alt="John Smith"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">John Smith</cite>
                                        <span className="text-muted-foreground block text-sm">University Student</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    I use MD Notes every day for journaling and tracking my ideas.
                                    The simplicity is unmatched, and I love how fast it is.
                                </p>
                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/65.jpg"
                                            alt="Sarah Lee"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>SL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Sarah Lee</cite>
                                        <span className="text-muted-foreground block text-sm">Freelance Writer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    I’ve tried a dozen note apps, but MD Notes is the one I finally stuck with.
                                    Clean, fast, and reliable — exactly what I needed.
                                </p>
                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/33.jpg"
                                            alt="Carlos Mendes"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>CM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Carlos Mendes</p>
                                        <span className="text-muted-foreground block text-sm">Entrepreneur</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
