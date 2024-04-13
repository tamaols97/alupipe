import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Cooperate({ lang }) {
    const { about_us } = await getDictionary(lang)

    console.log(about_us.manufacture_coporate.title);

    return <section className="bg-gray-900 text-white p-4 lg:p-16">
        <div className="text-center text-lg font-semibold py-4 lg:text-3xl lg:py-8">{about_us.manufacture_coporate.title}</div>
        <div className="text-center mt-4 grid grid-cols-2 md:mt-12 md:grid-cols-4">
            <div className="hover:scale-125 transition-transform">Alcotop</div>
            <div className="hover:scale-125 transition-transform">Pvpipe</div>
            <div className="hover:scale-125 transition-transform">Husteel</div>
            <div className="hover:scale-125 transition-transform">Dongyang</div>
        </div>
    </section>
}