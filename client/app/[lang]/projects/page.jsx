import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../dictionaries";

import empirecity from "@/public/projects/EMPIRE-CITY.jpg"
import saigonbinhan from "@/public/projects/SAI-GON-BINH-AN.jpg"
import cobitower from "@/public/projects/COBI-TOWER.jpeg"
import fpttower from "@/public/projects/FPT-TOWER.jpg"
import lottemall from "@/public/projects/LOTTE-MALL-HA-NOI.jpg"

const PROJECTS = [
    {
        name: "SÀI GÒN BÌNH AN",
        src: saigonbinhan.src,
    }, 
    {
        name: "COBI TOWER",
        src: cobitower.src,
    },
    {
        name: "EMPIRE CITY",
        src: empirecity.src,
    },
    {
        name: "PFT TOWER",
        src: fpttower.src,
    }, 
    {
        name: "LOTTE MALL HÀ NỘI",
        src: lottemall.src,
    }
]

export default async function Projects({params: {lang}}) {
    const { projects } = await getDictionary(lang)

    const blocks = []
    PROJECTS.forEach(item => {
        blocks.push((
            <div key={item.name} className="group shadow-lg bg-gradient-to-tr from-orange-200 to-orange-400 cursor-pointer">
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.src}
                    ></img>
                </div>
                <div className="text-xl py-4 lg:py-8">{item.name}</div>
            </div>
        ))
    })

    return <section>
        <SubHero title={projects.title} sub_title={projects.sub_title}></SubHero>
        <div className="mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-8">
           <Breadcumbs></Breadcumbs>
           <div className="my-4 text-center grid grid-cols-1 gap-x-4 gap-y-8 lg:my-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
            {blocks}
           </div>
        </div>
    </section>
}