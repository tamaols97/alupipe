import Breadcumbs from "@/app/components/commons/breadcrumbs";
import ContactForm from "@/app/components/commons/contact_form";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../dictionaries";

export default async function Contact({params: {lang}}) {
    const { contact } = await getDictionary(lang)
    const { infomation } = contact

    return <section>
        <SubHero title={contact.title}></SubHero>
        <div className="mx-auto max-w-screen-xl p-4 lg:p-8">
           <Breadcumbs></Breadcumbs>
            <div className="py-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:py-12">
                <div>
                    {infomation.items.map((item, i) => {
                        return (
                            <div key={i} className="py-2">{item}</div>
                        )
                    })}

                </div>
                <ContactForm lang={lang}></ContactForm>
            </div>
        </div>
    </section>
}