import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../dictionaries";
import Link from "next/link"

export default async function Products({ params: { lang } }) {

    const { products } = await getDictionary(lang)
    const { all_products } = products

    const elements = []
    for (let key in all_products) {
        if (all_products.hasOwnProperty(key)) {
            
            elements.push(
                <div key={key}>
                    <Link className="text-orange-600" href={`/products/${all_products[key]["slug"]}`}>{all_products[key]["slug"]}: {all_products[key]["name"]}</Link>
                </div>)
        }
    }

    console.log(lang);

    return <section>
        <SubHero></SubHero>
        <Breadcumbs></Breadcumbs>
        <div className="text-center text-cyan-600"><a href="products/1">Product One</a></div>
        Products Gallery
        {elements}
    </section>
}