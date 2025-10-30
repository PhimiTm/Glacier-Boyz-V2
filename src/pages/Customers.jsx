import React from 'react';

const Customers = () => {
  const customerTypes = [
    {
      type: "Restaurants & Bars",
      description: "Daily ice supply for drinks, food preservation, and kitchen operations",
      needs: ["Consistent quality", "Regular deliveries", "Bulk quantities"],
      icon: "🍽️"
    },
    {
      type: "Night Clubs",
      description: "High-volume ice for cocktails and beverage service",
      needs: ["Premium crushed ice", "Late-night delivery", "Emergency orders"],
      icon: "🍸"
    },
    {
      type: "Event Planners",
      description: "Large quantities for weddings, parties, and corporate events",
      needs: ["Flexible scheduling", "Various ice types", "Reliable service"],
      icon: "🎉"
    },
    {
      type: "Garages & Industrial",
      description: "Ice for cooling systems and industrial applications",
      needs: ["Block ice", "Scheduled delivery", "Competitive pricing"],
      icon: "🔧"
    },
    {
      type: "Family Events",
      description: "Perfect for Braai's, picnics, and home gatherings",
      needs: ["Small to medium orders", "Weekend delivery", "Affordable pricing"],
      icon: "👨‍👩‍👧‍👦"
    },
    {
      type: "Individual Customers",
      description: "Personal use for home parties, camping, and daily needs",
      needs: ["Flexible quantities", "Convenient pickup", "Quality assurance"],
      icon: "🏠"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "The Blue Moon Restaurant",
      rating: 5,
      comment: "Glacier Boyz has been our ice supplier for 2 years. Always reliable, always fresh!"
    },
    {
      name: "Mike Chen",
      business: "Elite Events Planning",
      rating: 5,
      comment: "They delivered 300kg of ice for our wedding event. Perfect service and quality."
    },
    {
      name: "David Smith",
      business: "Downtown Auto Garage",
      rating: 5,
      comment: "Great for our cooling needs. Competitive prices and always on time."
    }
  ];

  const caseStudies = [
    {
      title: "Major Music Festival Supply",
      description: "Successfully supplied 2 tons of ice over 3 days for a major music festival in Johannesburg",
      details: ["2000kg total ice delivered", "Multiple delivery points", "24/7 support during event"]
    },
    {
      title: "Restaurant Chain Partnership",
      description: "Daily deliveries to 15 restaurant locations across Johannesburg",
      details: ["150kg daily average", "Consistent quality", "Cost savings of 20%"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Valued Customers</h1>
          <p className="text-xl mb-8">Serving diverse clients across Johannesburg with premium ice solutions</p>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerTypes.map((customer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl text-center mb-4">{customer.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{customer.type}</h3>
                <p className="text-gray-600 mb-6">{customer.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Needs:</h4>
                  <ul className="text-sm text-gray-600">
                    {customer.needs.map((need, idx) => (
                      <li key={idx} className="mb-1">• {need}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600">
                    {study.details.map((detail, idx) => (
                      <li key={idx} className="mb-1">✓ {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl mb-8">Get a custom quote for your ice needs today</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Customers;