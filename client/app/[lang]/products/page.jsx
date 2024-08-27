import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../dictionaries";
import Link from "next/link";

export default async function Products({ params: { lang } }) {
    const { products, product_screen } = await getDictionary(lang);

    const elements = [];
    for (let key in products) {
        if (products.hasOwnProperty(key)) {
            elements.push(
                <Link href={products[key].href} key={key} className="relative grid-item h-32 rounded-md bg-gradient-to-r from-blue-200 to-blue-400 flex justify-center items-center group overflow-hidden">
                    <span className="z-10 font-bold text-black group-hover:opacity-0">{products[key].title}</span>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
                    <span className="absolute opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-200">SEE DETAIL...</span>
                </Link>
            );
        }
    }

    return (
        <section>
            <SubHero title={product_screen.title}></SubHero>
            <div className="mx-auto grid grid-cols-1 gap-4 px-8 my-4 lg:grid-cols-4 lg:gap-8 lg:container mb-14">
                <div className="col-span-1 md:col-span-4 text-ellipsis">
                    <Breadcumbs></Breadcumbs>
                </div>
                {elements}
            </div>
        </section>
    );
}

