import { getDictionary } from "@/app/[lang]/dictionaries";
import alcotop from "@/public/cooperate/alcotop.jpg"
import husteel from "@/public/cooperate/husteel.png"
import korea from "@/public/cooperate/korea.jpeg"
import pvpipe from "@/public/cooperate/pvpipe.gif"
import Image from "next/image";


const cooperate_companys = [
    {
        src: alcotop.src
    },
    {
        src: husteel.src
    },
    {
        src: korea.src,
    },
    {
        src: pvpipe.src,
    }
]

export default async function Cooperate({ lang }) {
    const { about_us } = await getDictionary(lang)


    return <section className="bg-gray-900 text-white p-4 lg:p-16">
        <div className="text-center text-lg font-semibold py-4 lg:text-3xl lg:py-8">{about_us.manufacture_coporate.title}</div>
        <div className="text-center mt-4 grid grid-cols-2 md:mt-12 md:grid-cols-4">
            {cooperate_companys.map((company, index) => (
                <Image 
                    key={index}
                    alt="company"
                    width={100}
                    height={100}
                    src={company.src}
                    className="w-full"
                ></Image>
            ))}

        </div>
    </section>
}