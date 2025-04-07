export default function Testimonials() {
    const reviews = [
      {
        name: "Rahul Mehta",
        text: "One of the best North Indian food experiences I’ve had. The vibes, the thali — everything’s just perfect!",
      },
      {
        name: "Priya Sharma",
        text: "The place is so quirky and fun! Their food tastes like home, and the service is top-notch.",
      },
      {
        name: "Amit Joshi",
        text: "I’ve brought all my friends here — Aaoji never disappoints. Highly recommended!",
      },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-red-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Guests Say</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <h4 className="text-red-600 font-semibold">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  