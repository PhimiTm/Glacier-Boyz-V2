import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ice-50 to-frost-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-ice-800 mb-6">About Glazier Boyz</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A family-owned business committed to delivering premium ice products with exceptional service since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ice-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2025, Glazier Boyz began as a vision to provide Johannesburg with the highest quality ice products and most reliable delivery service. What started as a small family operation has grown into the city's trusted ice supplier.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We recognized that businesses, event planners, and individuals needed a dependable source for premium ice - whether it's crystal-clear cubes for upscale restaurants, crushed ice for busy nightclubs, or bulk quantities for large events.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve hundreds of satisfied customers across Johannesburg, from small family gatherings to major corporate events, always maintaining our commitment to quality and service excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-ice-100 to-frost-200 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-ice-800 mb-4">Family-Owned Since 2025</h3>
              <p className="text-gray-600">Built on values of quality, reliability, and exceptional customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-ice-50 to-frost-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">Our Mission & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-ice-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide top-grade ice products with exceptional service, keeping your needs chilled while building lasting relationships with our customers through reliability, quality, and competitive pricing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-ice-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be Johannesburg's leading ice supplier, known for innovation in sustainable ice production, unmatched customer service, and contributing to our community's success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-ice-800 mb-2">Quality</h4>
              <p className="text-gray-600">Premium ice made with filtered water and eco-friendly processes</p>
            </div>

            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-ice-800 mb-2">Reliability</h4>
              <p className="text-gray-600">Consistent delivery schedules and dependable service you can trust</p>
            </div>

            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-ice-800 mb-2">Customer Focus</h4>
              <p className="text-gray-600">Your satisfaction is our priority in every interaction</p>
            </div>

            <div className="text-center">
              <div className="bg-ice-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-ice-800 mb-2">Sustainability</h4>
              <p className="text-gray-600">Eco-friendly production methods and responsible business practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The dedicated people behind Glazier Boyz</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-ice-50 to-frost-100 rounded-xl p-8 text-center max-w-md">
              <div className="w-32 h-32 bg-ice-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-ice-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ice-800 mb-2">Phemelo Makwatse</h3>
              <p className="text-ice-600 font-semibold mb-4">Founder & Operations Manager</p>
              <p className="text-gray-700 mb-6">
                Phemelo founded Glazier Boyz with a vision to revolutionize ice delivery in Johannesburg. 
                He handles everything from production oversight to customer relations, ensuring every order 
                meets our high standards.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/phemelo_makwatse" target="_blank" rel="noopener noreferrer" className="text-ice-500 hover:text-ice-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/phemelo-makwatse" target="_blank" rel="noopener noreferrer" className="text-ice-500 hover:text-ice-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-to-br from-ice-50 to-frost-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ice-800 mb-4">Our Commitment to Sustainability</h2>
            <p className="text-xl text-gray-600">Protecting the environment while serving our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-ice-800 mb-4">Water Conservation</h3>
              <p className="text-gray-700">
                We use advanced filtration systems and water recycling processes to minimize waste and ensure the purest ice quality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-ice-800 mb-4">Energy Efficiency</h3>
              <p className="text-gray-700">
                Our production facility uses energy-efficient equipment and renewable energy sources to reduce our carbon footprint.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-ice-800 mb-4">Eco-Friendly Packaging</h3>
              <p className="text-gray-700">
                We use biodegradable and recyclable packaging materials, and offer reusable container options for regular customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;