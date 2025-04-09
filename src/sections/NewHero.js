import { motion } from 'framer-motion';
export default function NewHero() {
    return (

  <section id="hero" className="min-h-screen flex items-center justify-start bg-amber-50 rounded-b-4xl">
    <div className="bg-gradient-to-b from-amber-50 to-amber-100">
      <section className="py-5 sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    {["Bold Flavors,", "Fun Vibes,"].map((item, index)=> <h1 key={index} className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">{item} </h1>)}
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-red-600"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Authentic Taste.</h1>
                        </div>

                    <p className="mt-8 text-base text-black sm:text-xl">
                      Aaoji is your perfect pit stop on the highway, serving up
                      bold, authentic flavors that are fast, fun, and full of taste.
                      Whether you're craving a quick bite or a satisfying meal on
                      the go, Aaoji brings the perfect blend of tradition and
                      excitement to your journey. Stop by for a flavorful
                      adventure – no detours needed!.
                    </p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-4 ">
                        <a href="#" title="" className=" px-6 py-3 inline-flex items-center justify-center text-base font-semibold text-white transition-all duration-200 rounded-md hover:bg-red-700 hover:cursor-pointer bg-red-600 focus:bg-red-400" role="button">Call Us for Bookings</a>
                        <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition hover:cursor-pointer">
                          Explore Menu
                        </button>

                    </div>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img className="w- " src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>  
  </section>
    );
  }
  