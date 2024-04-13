import SubHero from "@/app/components/commons/sub_hero"
import Breadcrumbs from "../../components/commons/breadcrumbs"
import { getDictionary } from "../dictionaries"


export default async function News({params: {lang}}) {
    const { news } = await getDictionary(lang)
    return <section>
        <SubHero title={news.title}></SubHero>
        <div className="mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-8">
            <Breadcrumbs></Breadcrumbs>
        </div>
    </section>
}