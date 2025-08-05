
export default function Jobs() {
    return (
       <section id="jobs" className="text-white flex flex-col items-center rounded-xl md:rounded-2xl w-full gap-3 mt-2">
            <h2 className="text-pink-600 text-3xl md:text-5xl font-extrabold tracking-tight bg-black py-12 w-full rounded-xl md:rounded-2xl text-center">
                SWAGAT HAI AAPKA
            </h2>
            <div className="bg-yellow-400 text-black text-xs md:text-xl uppercase tracking-wider font-semibold px-4 py-2 rounded-full text-center w-full font-clash">
                looking for a job?
            </div>

           <div className="bg-[#0678F4] text-black flex flex-col sm:flex-row items-center sm:items-center justify-between w-full rounded-xl md:rounded-2xl py-10 px-3 md:px-6 gap-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">SEND YOUR RESUME</h2>
            <p className="text-xs md:text-xl">
                <a href="mailto:jobs@thekaikostudios.com" className="underline hover:text-white transition">
                jobs@thekaikostudios.com
                </a>
            </p>
            </div>

        </section>

    )

}
