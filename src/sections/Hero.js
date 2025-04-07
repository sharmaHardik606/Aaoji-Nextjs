// for hero section i am going for a simple approach with a image background but maybe i should add something to it its too plain so i am going to add a blur to it that will be removed when hovered. 

export default function Hero() {
    return (

      <section id="hero" className="min-h-screen flex items-center justify-center rounded-b-4xl">
        <img class="h-screen relative z-0 w-full transition-all duration-300 rounded-b-4xl blur-xs hover:blur-none" src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image description"></img>
        <div className="text-center max-w-2xl z-10 absolute ">



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
  