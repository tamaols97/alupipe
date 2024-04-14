import empirecity from "@/public/projects/EMPIRE-CITY.jpg"
import saigonbinhan from "@/public/projects/SAI-GON-BINH-AN.jpg"
import cobitower from "@/public/projects/COBI-TOWER.jpeg"
import Image from "next/image"

const OUTSTANDING_PROJECTS = [
    {
        name: "SÀI GÒN BÌNH AN",
        src: saigonbinhan.src,
    }, 
    {
        name: "COBI TOWER",
        src: cobitower.src,
    },
    {
        name: "EMPIRE CITY",
        src: empirecity.src,
    }
]

export default function OutstandingProjects({ dict }) {
    const { homepage } = dict
    const { outstanding_projects } = homepage

    return (
        <div className="bg-gray-100 p-4">
            <div className="container mx-auto pt-12 pb-20">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    {outstanding_projects.title}
                </h1>
                <p className="text-gray-700 text-lg text-center mb-12">
                    {outstanding_projects.sub_title}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {OUTSTANDING_PROJECTS.map((project, index) => {
                        return (
                            <div key={index} className="group bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-transform duration-500">{project.name}</h2>
                                <div className="w-full aspect-square overflow-hidden flex items-center">
                                    <Image
                                        alt="projects served"
                                        width={100}                                
                                        height={100}
                                        src={project.src}
                                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    ></Image>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="text-center">
                    <a
                        href="/projects"
                        className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        {outstanding_projects.button}
                    </a>
                </div>
            </div>
        </div>
    )
}