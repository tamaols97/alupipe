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
      <Hero></Hero>
      <Intro></Intro>
      <Manufactures></Manufactures>
      <Customers></Customers>
      <OutstandingProjects></OutstandingProjects>
      <p>{dict.homepage.test}</p>
      <LangSwitcher></LangSwitcher>
    </>
  )
}
