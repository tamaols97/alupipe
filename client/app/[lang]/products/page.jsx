import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../dictionaries";
import Link from "next/link";
import './index.css'

export default async function Products({ params: { lang } }) {

    const { products, product_screen } = await getDictionary(lang)

    const elements = []
    for (let key in products) {
        if (products.hasOwnProperty(key)) {
            console.log(key);
            elements.push(
                <Link href={products[key].href} class="grid-item h-32 rounded-lg bg-gradient-to-r from-blue-200 to-blue-400 flex justify-center items-center">
                    {products[key].title}
                </Link>)
        }
    }

    return <section>
        <SubHero title={product_screen.title}></SubHero>
        <div class="mx-auto grid grid-cols-1 gap-4 px-8 my-4 lg:grid-cols-3 lg:gap-8 lg:container">
            <div className="col-span-1 md:col-span-3 text-ellipsis">
                <Breadcumbs ></Breadcumbs>
            </div>
            {elements}

        </div>        
    </section>
}