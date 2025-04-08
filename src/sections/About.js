export default function About() {
    return (
      <section id="about" className="py-16 bg-[#FEFCE8] px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1536305030588-45dc07a2a372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Aaoji Restaurant"
              className="rounded-lg shadow-lg"
            />
          </div>
  
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-2xl font-bold text-red-600 mb-3 "><span className="border-t-2 border-b-2 border-red-600 py-1">The Story</span></h2>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 underline">What Aoji is All About</h2>
            <p className="text-gray-700 mb-4">
            Founded in 2020, Aaoji was born out of a passion for
            bringing authentic, bold flavors to the streets, offering
            a fun twist on traditional cuisine. We’ve quickly become
            a favorite destination for locals and travelers alike,
            serving up not just meals, but unforgettable
            experiences. Whether you're stopping by for a quick
            bite or settling in for a leisurely meal, we take pride in
            offering delicious dishes made from the finest, locally
            sourced ingredients.
            </p>
            <div className="space-x-4 space-y-4">
            <button className="bg-red-600 hover:cursor-pointer active:bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
              Call Us for Bookings
            </button>
            <button className="border hover:cursor-pointer active:bg-red-100 border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition">
              Explore Menu
            </button>
          </div>
          </div>
        </div>
      </section>
    );
  }
  