import { getDictionary } from "@/app/[lang]/dictionaries"
import Image from "next/image"

export default async function Catalogs({ lang, items }) {
    const { catalogs } = await getDictionary(lang)

    return <section>
        <div className="pb-4 text-xl md:pb-8 md:text-2xl lg:pb-12">{catalogs.title}</div>
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {items.map((item, index) => (
                <a
                    key={index}
                    className="group"
                    href={item.href}
                    target="_blank"
                >
                    <div className="border-2 border-gray-600 aspect-video overflow-hidden">
                        <Image
                            alt={`${item.name} catalog`}
                            width={100}
                            height={100}
                            src={item.src}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        ></Image>
                    </div>
                    <label className="font-light text-sm group-hover:text-blue-600">{item.name}</label>
                </a>
            ))}
        </div>
    </section>
}