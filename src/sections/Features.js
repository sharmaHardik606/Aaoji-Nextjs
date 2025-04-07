export default function Features() {
    return (
      <section id="features" className="py-16 bg-white text-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose Aaoji?
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Authentic North Indian Food</h3>
              <p className="text-gray-700">Experience the rich flavors of Punjabi and North Indian cuisine made with love.</p>
            </div>
  
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Vibrant Ambiance</h3>
              <p className="text-gray-700">A colorful, lively atmosphere perfect for hangouts, dates, or family outings.</p>
            </div>
  
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Friendly Staff</h3>
              <p className="text-gray-700">Our team is here to give you a warm welcome and the best service possible.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  