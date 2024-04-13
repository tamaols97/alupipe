"use client"
import Image from "next/image"
import logo from "../../../public/commons/logo.png"
import LangSwitcher from "./language_switcher"
import { usePathname } from "next/navigation"
export default function Header({items}) {
  const pathName = usePathname()
  const noLangPathName = "/" + pathName.split("/")[2]

  const active = "border-b-2 border-yellow-600 text-yellow-600"

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block w-16 text-teal-600" href="/">
              <Image className="w-full aspect-auto" src={logo} alt="logo" width="120" height="120"></Image>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {items.map(item => {
                  return (
                    <li key={item.link}>
                      <a 
                      href={item.link}
                      className={`text-gray-500 text-lg transition hover:text-gray-500/75 ${noLangPathName == item.link ? active : ""}`}>
                        {item.title}</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <LangSwitcher></LangSwitcher>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}