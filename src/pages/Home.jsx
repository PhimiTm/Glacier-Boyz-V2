import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "Standard Ice Cubes",
      description: "Perfect for drinks, restaurants, and everyday cooling needs",
      icon: "🧊"
    },
    {
      title: "Crushed Ice",
      description: "Ideal for cocktails, smoothies, and rapid cooling",
      icon: "❄️"
    },
    {
      title: "Bulk Ice Blocks",
      description: "Large quantities for events, industrial use, and storage",
      icon: "🏔️"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "The Blue Moon Restaurant",
      rating: 5,
      text: "Glazier Boyz has been our reliable ice supplier for 2 years. Always on time, always fresh!"
    },
    {
      name: "Mike Chen",
      business: "Chen's Event Planning",
      rating: 5,
      text: "They delivered 500kg of ice for our wedding event. Exceptional service and quality!"
    },
    {
      name: "Lisa Williams",
      business: "Sunset Nightclub",
      rating: 5,
      text: "Fast delivery and competitive prices. Our bar never runs out of ice anymore."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 ice-gradient"></div>
        <div className="absolute inset-0 shimmer-bg opacity-30"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-ice-800 mb-6 animate-float">
            Keeping It Cool
          </h1>
          <p className="text-xl md:text-2xl text-ice-600 mb-8 font-medium">
            Premium Ice Delivered Fresh to Johannesburg
          </p>
          <p className="text-lg text-ice-500 mb-12 max-w-2xl mx-auto">
            From restaurants to events, from businesses to your backyard BBQ - 
            we deliver high-quality ice with reliability you can count on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Order Now
            </Link>
            <Link to="/products" className="btn-secondary text-lg px-8 py-4">
              View Products
            </Link>
          </div>
        </div>

        {/* Floating ice crystals animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">❄️</div>
          <div className="absolute top-40 right-20 text-3xl animate-float opacity-40" style={{animationDelay: '1s'}}>🧊</div>
          <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-30" style={{animationDelay: '2s'}}>❄️</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-50" style={{animationDelay: '0.5s'}}>🧊</div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">Our Premium Ice Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We produce and deliver the highest quality ice products to meet all your cooling needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-ice-50 to-frost-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-ice-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/products" className="text-ice-600 font-semibold hover:text-ice-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-ice-50 to-frost-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">Why Choose Glazier Boyz?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ice-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day and emergency delivery available across Johannesburg</p>
            </div>

            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ice-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crystal clear, pure ice made with filtered water and eco-friendly methods</p>
            </div>

            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ice-800 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Best rates in Johannesburg with bulk discounts available</p>
            </div>

            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ice-800 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Family-owned business committed to exceptional customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-ice-50 to-frost-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-ice-800">{testimonial.name}</p>
                  <p className="text-ice-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-ice-50 to-frost-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">Service Areas in Johannesburg</h2>
            <p className="text-xl text-gray-600 mb-8">We deliver premium ice across the greater Johannesburg area</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-ice-800 mb-6">Areas We Serve:</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sandton
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Randburg
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Roodepoort
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Midrand
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Johannesburg CBD
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Soweto
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Kempton Park
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-ice-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Benoni
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Check If We Deliver To You
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-ice-100 to-frost-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-ice-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-ice-600 font-semibold">Interactive Service Area Map</p>
                  <p className="text-gray-500 text-sm mt-2">Contact us to see our full delivery coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ice-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Order Premium Ice?</h2>
          <p className="text-xl text-ice-100 mb-8">
            Get fast, reliable ice delivery for your business, event, or personal needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-ice-600 font-semibold py-4 px-8 rounded-lg hover:bg-ice-50 transition-colors">
              Get Quote Now
            </Link>
            <Link to="/products" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-ice-600 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;