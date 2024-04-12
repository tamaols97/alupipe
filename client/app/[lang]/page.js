import Hero from "../components/commons/hero"
import { getDictionary } from "./dictionaries"
import LangSwitcher from "../components/commons/language_switcher"
import Intro from "../components/home/intro"
import Manufactures from "../components/home/manufactures"
import Customers from "../components/home/customers"
import OutstandingProjects from "../components/home/outstanding_projects"

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  
  
  return (
    <>
      <Hero dict={dict}></Hero>
      <Intro dict={dict}></Intro>
      <Manufactures dict={dict}></Manufactures>
      <Customers dict={dict}></Customers>
      <OutstandingProjects dict={dict}></OutstandingProjects>
      <p>{dict.homepage.test}</p>
      <LangSwitcher></LangSwitcher>
    </>
  )
}
