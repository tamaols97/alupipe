import SubHero from "@/app/components/commons/sub_hero"
import Breadcrumbs from "../../components/commons/breadcrumbs"
import { getDictionary } from "../dictionaries"
import Cooperate from "@/app/components/about/cooprates"


export default async function About({ params: { lang }}) {
    console.log(lang);
    const { about_us } = await getDictionary(lang)
    return <section>
        <SubHero title={about_us.title} sub_title={about_us.sub_title}></SubHero>
        <div className="mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-8">
            <Breadcrumbs></Breadcrumbs>
            <div className="whitespace-pre-wrap px-4 py-4 lg:px-8 lg:py-8 lg:shadow-md">
                {about_us.content}
            </div>
        </div>
        <Cooperate lang={lang}></Cooperate>
    </section>
}