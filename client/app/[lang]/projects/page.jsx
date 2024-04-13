import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../dictionaries";

export default async function Projects({params: {lang}}) {
    const { projects } = await getDictionary(lang)
    const { items } = projects 

    const blocks = []
    items.forEach(item => {
        blocks.push((
            <div className="hover:scale-105 transition-transform shadow-lg bg-gradient-to-tr from-orange-200 to-orange-400">
                <img
                    className="aspect-square w-full"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                ></img>
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