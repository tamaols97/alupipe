import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";

export default function Product({ params: {slug} }) {
    return <section>
        <SubHero></SubHero>
        <Breadcumbs></Breadcumbs>
        Product {slug}
    </section>
}