"use client"
import Image from "next/image"
import logo from "../../../public/commons/logo.png"
import LangSwitcher from "./language_switcher"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header({items}) {
  const [menuOpen, setMenuOpen] = useState(false);
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

{/* Menu cho màn hình máy tính */}
<div className="hidden md:flex items-center justify-center">
  <nav aria-label="Global">
    <ul className="flex flex-row items-center gap-6 text-sm">
      {items.map(item => {
        return (
          <li key={item.link} className="relative group">
            <a 
              href={item.link}
              className={`text-gray-500 text-lg transition hover:text-gray-500/75 ${noLangPathName == item.link ? active : ""}`}>
              {item.title}</a>

            {/* Hiển thị menu khi hover vào "Sản phẩm" */}
            {item.title === 'Sản phẩm' && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li><a href="/products/ALCOTOP" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">ALCOTOP</a></li>
                <li><a href="/products/STEEL-PIPE-FOR-PIPING" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">DONGYANG</a></li>
                <li><a href="/products/PV-PIPE-1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">PV PIPE</a></li>
                <li><a href="/products/STEEL-HUSTEEL-KOREA" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">HUSTEEL</a></li>
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  </nav>
</div>


          {/* Menu cho màn hình điện thoại */}
          <div className={`md:hidden fixed inset-0 flex items-center justify-center bg-white z-40 transition-transform transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full pointer-events-none'}`}>
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-6 text-sm">
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
            <div className="block md:hidden z-50">
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
