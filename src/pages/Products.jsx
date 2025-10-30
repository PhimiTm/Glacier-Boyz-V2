import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Standard Ice Cubes",
      description: "Perfect for drinks, restaurants, and everyday use",
      sizes: ["5kg bag", "10kg bag", "25kg bag"],
      price: "From R25",
      image: "🧊",
      features: ["Crystal clear", "Slow melting", "Food grade"]
    },
    {
      id: 2,
      name: "Crushed Ice",
      description: "Ideal for cocktails, smoothies, and rapid cooling",
      sizes: ["5kg bag", "10kg bag", "20kg bag"],
      price: "From R30",
      image: "❄️",
      features: ["Fine texture", "Quick cooling", "Bar quality"]
    },
    {
      id: 3,
      name: "Block Ice",
      description: "Long-lasting ice for large events and industrial use",
      sizes: ["10kg block", "25kg block", "50kg block"],
      price: "From R40",
      image: "🧊",
      features: ["Extended cooling", "Bulk quantities", "Event ready"]
    }
  ];

  const deliveryOptions = [
    { name: "Same-Day Delivery", time: "Within 4 hours", price: "R50" },
    { name: "Scheduled Delivery", time: "Next day", price: "R30" },
    { name: "Emergency Orders", time: "Within 2 hours", price: "R80" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Premium Ice Products</h1>
          <p className="text-xl mb-8">High-quality ice for every need - from intimate gatherings to large events</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Ice Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Available Sizes:</h4>
                  <ul className="text-sm text-gray-600">
                    {product.sizes.map((size, index) => (
                      <li key={index} className="mb-1">• {size}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index} className="mb-1">✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Delivery Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="text-center p-8 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{option.name}</h3>
                <p className="text-gray-600 mb-4">{option.time}</p>
                <p className="text-2xl font-bold text-blue-600">{option.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">How do you ensure ice quality?</h3>
              <p className="text-gray-600">We use purified water and maintain strict hygiene standards throughout our production process.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">What's the minimum order quantity?</h3>
              <p className="text-gray-600">We accept orders from single 5kg bags to bulk quantities of 500kg or more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">How should I store the ice?</h3>
              <p className="text-gray-600">Keep ice in a freezer or insulated cooler. Our ice stays fresh for up to 24 hours in proper storage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;