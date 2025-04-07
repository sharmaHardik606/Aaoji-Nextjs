const images = [
    "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30858402/pexels-photo-30858402/free-photo-of-delicious-paneer-tikka-masala-dish-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28885201/pexels-photo-28885201/free-photo-of-delicious-indian-paratha-with-chutneys.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  
  export default function Gallery() {
    return (
      <section id="gallery" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Food ${index}`}
                loading="lazy"
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  