import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";
import { stringDashToShiftDash } from "@/utilities";
import Catalogs from "@/app/components/products/catalogs";
import { getProduct } from "@/app/contents/actions";

export default async function Product({ params: { slug, lang } }) {
    const { products, product_screen } = await getDictionary(lang)
    const entity = products[stringDashToShiftDash(slug)]
    const _product = await getProduct(stringDashToShiftDash(slug), lang)
    if (!_product) return (
        <section>404</section>
    ) 

    if (!entity) return <section>
        <SubHero></SubHero>
        <p className="text-center text-lg mt-8">404</p>
    </section>

    if (slug == "ALCOTOP") {
        return (
            <section>
                <SubHero title={product_screen.title_detail}></SubHero>
                <div className="mx-auto px-4 py-4 grid grid-cols-1 gap-4 md:px-8 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-3">
                        <Breadcumbs></Breadcumbs> 
                    </div>
                    <div className="lg:col-span-2 bg-grey-100 shadow-md p-4 min-h-96 md:p-8">
                        <h1 className="text-lg text-ellipsis font-medium">{entity.title}</h1>
                        <article className="py-4 md:py-8">
                            <h2 className="text-md text-ellipsis font-medium">{entity.pe.title}</h2>
                            <p className="whitespace-pre-wrap py-4 md:py-8">
                                {entity.pe.content}
                            </p>
                            <Link href={entity.pe.href}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{entity.pe.button}</button>
                            </Link>
                        </article>
                        <article className="py-4 md:py-8">
                            <h2 className="text-md text-ellipsis font-medium">{entity.fr.title}</h2>
                            <p className="whitespace-pre-wrap py-4 md:py-8">
                                {entity.fr.content}
                            </p>
                            <Link href={entity.fr.href}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{entity.fr.button}</button>
                            </Link>
                        </article>
                    </div>
                    <div className="lg:col-span-1">
                        <Catalogs lang={lang} items={_product.catalogs}></Catalogs>
                    </div>
                </div>
            </section>
        )
    }

    return <section>
        <SubHero title={product_screen.title_detail}></SubHero>
        <div className="mx-auto px-8 py-4 lg:container grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-3">
                <Breadcumbs></Breadcumbs>
            </div>
            <div className="lg:col-span-2 bg-grey-100 shadow-md p-4 min-h-96 md:p-8">
                <h1 className="text-lg text-ellipsis font-medium">{entity.title}</h1>
                <p className="whitespace-pre-wrap">
                    {entity.content}
                </p>
            </div>
            <div className="lg:col-span-1">
                <Catalogs lang={lang} items={_product.catalogs}></Catalogs>
            </div>

        </div>
    </section>
}