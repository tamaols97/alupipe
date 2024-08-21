import Hero from "../components/commons/hero";
import { getDictionary } from "./dictionaries";
import LangSwitcher from "../components/commons/language_switcher";
import Intro from "../components/home/intro";
import Manufactures from "../components/home/manufactures";
import Customers from "../components/home/customers";
import OutstandingProjects from "../components/home/outstanding_projects";
import Image from "next/image";
import avatar from "../../public/popup/avt.jpg";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <div
        className="fixed z-50 mt-20 right-2 bg-white pl-4 rounded-xl px-5 py-2 hidden md:block"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <h2 className="font-medium">Thông tin liên hệ</h2>
        <Image
          className="w-10 rounded-full my-2"
          src={avatar}
          alt="Avatar of Mr Đạt"
        />
        <p className="text-xs">Mr Đạt – GENERAL DIRECTOR</p>
        <p className="text-xs my-1">Phone: +84 857 489 576</p>
        <p className="text-xs">Gmail: dattt@alupipe.com.vn</p>
      </div>
      <Hero dict={dict}></Hero>
      <Intro dict={dict}></Intro>
      <Manufactures dict={dict}></Manufactures>
      <Customers dict={dict}></Customers>
      <OutstandingProjects dict={dict}></OutstandingProjects>
    </>
  );
}
