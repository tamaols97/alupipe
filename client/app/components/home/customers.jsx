import central from "@/public/customers/central.png"
import charmgroup from "@/public/customers/charmgroup.png"
import ecc from "@/public/customers/ecc.jpg"
import honda from "@/public/customers/honda.png"
import keppelland from "@/public/customers/keppelland.svg"
import masterhomes from "@/public/customers/masterhomes.png"
import novaland from "@/public/customers/novaland.jpg"
import petrogas from "@/public/customers/petrogas.jpg"
import ptsc from "@/public/customers/ptsc.jpg"
import pvcoating from "@/public/customers/pvcoating.jpg"
import vietsopetro from "@/public/customers/vietsovpetro.jpg"

const CUSTOMERS = [
    central,
    charmgroup,
    ecc,
    honda,
    keppelland,
    masterhomes,
    novaland,
    petrogas,
    ptsc,
    pvcoating,
    vietsopetro,
]

export default function Customers({ dict }) {
    const { homepage } = dict
    const { customers } = homepage

    return (
        <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">{customers.title}</h2>
            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
                {customers.sub_title}
            </p>
            <div className="mx-auto w-full max-w-4xl bg-white">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">

                    {
                        CUSTOMERS.map((customer, index) => (
                            <a key={index} target="_blank" href="">
                                <img alt="customer logo" className="h-20  mx-auto" src={customer.src} />
                            </a>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}