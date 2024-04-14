import img from "@/public/commons/home-introduction.png"
import img2 from "@/public/commons/home-introduction2.jpg"
import Image from "next/image"

export default function Intro({ dict }) {
    const { about_us } = dict
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
                    <div className="relative flex flex-col items-end">
                        <Image 
                            alt="random image"
                            width={100}
                            height={100}
                            src={img}
                            className="w-full object-cover"
                        ></Image>
                        <Image
                            alt="random image 2"
                            width={100}
                            height={100}
                            src={img2}
                            className="invisible md:visible md:relative md:w-2/5 md:-top-12 md:right-0 "
                        ></Image>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold sm:text-4xl">{about_us.title}</h2>
                        <div className="mt-4 text-gray-600 whitespace-pre-wrap">{about_us.content}</div>

                        <a
                            href="/about"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            {about_us.button}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}