import hero_bg from "@/public/hero/hero.png"

export default function Hero({ dict }) {
  const { hero } = dict

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat`} 
      style={{
        backgroundImage: `url(${hero_bg.src})`
      }} 
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/45 sm:to-transparent"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left sm:bg-white/45 sm:p-4 sm:rounded-md">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {hero.title}

            <strong className="block font-extrabold text-rose-700 py-2 sm:text-5xl sm:py-6"> {hero.title_bold} </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            {hero.brief}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/products"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              {hero.button_products}
            </a>

            <a
              href="/contact"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              {hero.button_contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}