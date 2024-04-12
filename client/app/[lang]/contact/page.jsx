import Breadcumbs from "@/app/components/commons/breadcrumbs";
import ContactForm from "@/app/components/commons/contact_form";
import SubHero from "@/app/components/commons/sub_hero";

export default function Contact() {
    return <section>
        <SubHero></SubHero>
        <Breadcumbs></Breadcumbs>
        <ContactForm></ContactForm>
        <p>Contact</p>
    </section>
}