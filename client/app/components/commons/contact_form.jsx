import { getDictionary } from "@/app/[lang]/dictionaries"

export default async function ContactForm({lang}) {
    const {contact} = await getDictionary(lang)
    const {form} = contact

    return (
        <section className="bg-white">
                <main
                    className="flex items-center justify-center"
                >
                    <div className="max-w-xl lg:max-w-3xl">

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            {form.title}
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            {form.sub_title}
                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                />
                            </div>

                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700"> Message </label>

                                <textarea
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                ></textarea>
                            </div>
                            <label className="col-span-6 block text-sm font-medium text-gray-700"> Send to: alupipe@gmail.com </label>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    {form.button}
                                </button>

                            </div>
                        </form>
                    </div>
                </main>
        </section>
    )
}