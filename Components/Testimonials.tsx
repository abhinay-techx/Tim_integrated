import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: "Incredible experience from start to finish.", author: "Devika", image:"/images/dev.jpg" },
    { id: 3, text: "Absolutely fantastic! Will definitely use again.", author: "Sarath", image:"/images/sar.jpg" },
    { id: 5, text: "Outstanding support team! Thank you!", author: "Vimal Joy", image:"/images/vim.jpg" },
    { id: 2, text: "Best experience ever! Highly recommended.", author: "Satyam Abhishek", image: "/images/sat.jpg" },
    { id: 4, text: "Remarkable experience! Will definitely be a returning customer.", author: "Abhinay", image: "/images/abi.jpeg" },
    { id: 6, text: "Impressive quality and professionalism. Will definitely return .", author: "Mohana", image: "/images/moh.jpg" }
    ,
    // { id: 6, text: "Incredible experience from start to finish.", author: "Mohana", image: "path/to/image6.jpg" }
  ];

  return (
    <div className="mt-8 p-5 pb-8"> {/* Added pb-8 class for bottom padding */}
      <p className="text-center text-3xl font-bold uppercase text-yellow-400 mb-4">Testimonials</p> {/* Added mb-4 class for bottom margin */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="p-4 bg-[#b5e5f3] rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
            <img src={testimonial.image} alt="Testimonial" className="w-48 h-48 object-cover rounded-full mb-4" />
            <p className="text-lg mb-2">{testimonial.text}</p>
            <p className="text-sm text-gray-600">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
