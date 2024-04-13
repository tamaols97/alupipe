"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function LangSwitcher() {

    const router = useRouter();
    const pathname = usePathname();
    const lang = pathname.split("/")[1]
    const options = [
        { country: "VietNamese", code: "vi", flag: "🇻🇳" },
        { country: "English", code: "en", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    ];

    const setOption = (option) => {
        router.push(`/${option.code}`);
    };
    

    const active = ' text-sm font-bold text-yellow-600 border-yellow-600 bg-yellow-100 focus:bg-yellow-200'
    const inactive = 'text-sm font-thin text-gray-700 border-gray-300 hover:bg-gray-100 focus:bg-gray-200'
    
    return (
        <div className="flex flex-row justify-center h-screen select-none">
            <div className="flex flex-row items-center right-1 ">
                {options.map(country => {
                    return (
                        <button 
                            key={country.code}
                            onClick={() => setOption(country)}
                            className={`p-2 flex flex-row items-center border focus:outline-none ${lang == country.code ? active : inactive}`}
                        >
                            <span className="text-md">{country.code}</span>
                            <span className="ml-1 text-lg">{country.flag}</span>
                        </button>
                    )
                })}
            </div>

        </div>
    );
};

export default LangSwitcher;