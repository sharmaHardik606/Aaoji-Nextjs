// for hero section i am going for a simple approach with a image background but maybe i should add something to it its too plain so i am going to add a blur to it that will be removed when hovered. 

export default function Hero() {
    return (

      <section id="hero" className="min-h-screen flex items-center justify-center rounded-b-4xl">
        <img className="h-screen relative z-0 w-full transition-all duration-300 rounded-b-4xl blur-xs hover:blur-none" src="https://images.pexels.com/photos/28674690/pexels-photo-28674690/free-photo-of-rich-indian-lamb-curry-in-traditional-metal-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image description"></img>
        <div className="text-center max-w-3xl z-10 absolute ">



          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
            Bold Flavors, Fun Vibes, Authentic Taste
          </h1>
          <p className="text-lg text-white mb-6">
          Aaoji welcomes you to explore mouth-watering North Indian cuisine that hits just right!
          </p>
          <div className="space-x-4 space-y-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition hover:cursor-pointer active:bg-red-800">
              Call Us for Bookings
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md active:bg-red-100 hover:bg-red-50 transition hover:cursor-pointer">
              Explore Menu
            </button>
          </div>
        </div>
      </section>
    );
  }
  