import alcotop from "@/public/manufactures/alcotop.jpg"
import dongyang from "@/public/manufactures/dongyang.jpg"
import husteel from "@/public/manufactures/husteel.jpg"
import pipipe from "@/public/manufactures/pvpipe.jpg"
import hsnl_alcotop from "@/public/manufactures/HSNL-ALCOTOP.png"
import hsnl_dongyang from "@/public/manufactures/HSNL-DONGYANG.png"
import hsnl_husteel from "@/public/manufactures/HSNL-HUSTEEL.png"
import hsnl_pvpipe from "@/public/manufactures/HSNL-PVPIPE.png"
import Image from "next/image"

export default function Manufactures({ dict }) {
    const { homepage } = dict
    const { manufactures } = homepage

    const items = [
        {
            "picture": alcotop,
            "title": "ALCOTOP"
        },
        {
            "picture": dongyang,
            "title": "DONG YANG STEEL PIPE"
        },
        {
            "picture": husteel,
            "title": "HUSTEEL PIPE"
        },
        {
            "picture": pipipe,
            "title": "PV PIPE"
        },
        {
            "picture": hsnl_alcotop,
            "title": "Company Profile (pdf)",
            "href": ""
        },
        {
            "picture": hsnl_dongyang,
            "title": "Company Profile (pdf)",
            "href": ""
        },
        {
            "picture": hsnl_husteel,
            "title": "Company Profile (pdf)​",
            "href": ""
        },
        {
            "picture": hsnl_pvpipe,
            "title": "Company Profile (pdf)​",
            "href": ""
        }
    ]

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{manufactures.title}</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">{manufactures.sub_title}</p>
                </header>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="#" className="group block overflow-hidden ">
                                    {index < 4 ? (
                                        <Image
                                            alt="manufacture companys"
                                            width={100}
                                            height={100}
                                            src={item.picture}
                                            className="w-full border-4 group-hover:scale-105 transition-transform duration-500"
                                        ></Image>
                                    ) : (
                                        <Image
                                            alt="manufacture companys"
                                            width={100}
                                            height={100}
                                            className="w-full border-4 group-hover:scale-105 transition-transform duration-500 lg:w-28"
                                            src={item.picture}
                                        ></Image>
                                    )}


                                    <div className="relative bg-white pt-3">
                                        <p className="mt-2">
                                            <span className="tracking-wider font-bold text-gray-900 group-hover:text-blue-400">{item.title}</span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}