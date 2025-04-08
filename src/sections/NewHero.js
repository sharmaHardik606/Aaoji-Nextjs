// Extra Design Component for Hero Section

export default function NewHero() {
    return (

      <section id="hero" className="min-h-screen flex items-center justify-end rounded-b-4xl">
        <img className="h-screen relative z-0 w-full transition-all duration-300 rounded-b-4xl blur-xs hover:blur-none" src="https://images.pexels.com/photos/28674690/pexels-photo-28674690/free-photo-of-rich-indian-lamb-curry-in-traditional-metal-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image description"></img>
        <div className="text-end max-w-2xl z-10 absolute pr-10">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
            Bold Flavors, Fun Vibes, Authentic Taste
          </h1>
          <p className="text-lg text-white mb-6">
          Aaoji is your perfect pit stop on the highway, serving up
            bold, authentic flavors that are fast, fun, and full of taste.
            Whether you're craving a quick bite or a satisfying meal on
            the go, Aaoji brings the perfect blend of tradition and
            excitement to your journey. Stop by for a flavorful
            adventure – no detours needed!
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition hover:cursor-pointer">
              Call Us for Bookings
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition hover:cursor-pointer">
              Explore Menu
            </button>
          </div>
        </div>
      </section>
    );
  }
  