import heroimg from "@/public/hero/hero2.jpg"

export default function SubHero({ title = 'NOT FOUND', sub_title = '' }) {
    return (
        <div className="relative h-80 w-full">
            <img src={heroimg.src} alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-16">
                <h1 className="text-4xl text-white font-bold">{title}</h1>
                <p className="text-xl text-white mt-4">{sub_title}</p>
            </div>
        </div>
    )
}