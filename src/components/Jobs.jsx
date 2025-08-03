
export default function Jobs() {
    return (
       <section id="jobs" className="text-white flex flex-col items-center rounded-xl w-full gap-3 mt-2">
            <h2 className="text-pink-600 text-4xl md:text-5xl font-extrabold tracking-tight bg-black py-12 w-full rounded-3xl text-center">
                SWAGAT HAI AAPKA
            </h2>
            <div className="bg-yellow-400 text-black text-md uppercase tracking-wider font-semibold px-4 py-2 rounded-full text-center w-full font-clans">
                looking for a job?
            </div>

           <div className="bg-[#0678F4] text-black flex flex-col sm:flex-row items-center sm:items-center justify-between w-full rounded-xl py-10 px-6 gap-4">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Send Us Your Resume</h2>
            <p className="text-xl">
                <a href="mailto:jobs@thekaikostudios.com" className="underline hover:text-white transition">
                jobs@thekaikostudios.com
                </a>
            </p>
            </div>

        </section>

    )

}
