export default function Customers({dict}) {
    const {homepage} = dict 
    const {customers} = homepage

    return (
        <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">{customers.title}</h2>
            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
                {customers.sub_title}
            </p>
            <div className="mx-auto w-full max-w-4xl bg-white">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    <a target="_blank" href="">
                        <img alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/442910/brand-apple.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443329/brand-pixar.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443079/brand-geforce.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443042/brand-ethereum.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443206/brand-line.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/519278/slack.svg" />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}