import React from "react";

interface Category {
  name: string;
  icon: string;
}

interface Stay {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
}

const AirbnbCloneLanding: React.FC = () => {
  const categories: Category[] = [
    { name: "Tiny homes", icon: "🏠" },
    { name: "Beachfront", icon: "🏖️" },
    { name: "Cabins", icon: "🌲" },
    { name: "Amazing pools", icon: "🏊" },
    { name: "Countryside", icon: "🌾" },
    { name: "Design", icon: "✨" },
    { name: "Trending", icon: "🔥" },
    { name: "Play", icon: "🎪" },
    { name: "City", icon: "🏙️" },
    { name: "Lake", icon: "⛵" },
    { name: "Skiing", icon: "⛷️" },
    { name: "Iconic cities", icon: "🌆" },
  ];

  const featuredStays: Stay[] = [
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Modern Treehouse Retreat",
      location: "Portland, Oregon",
      price: "$149",
      rating: "4.98",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Desert Glass House",
      location: "Joshua Tree, CA",
      price: "$299",
      rating: "4.92",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Seaside Modern Villa",
      location: "Malibu, California",
      price: "$450",
      rating: "4.95",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Navigation */}
      <nav className="px-6 py-4 md:px-12 lg:px-20 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <div className="text-black font-black text-2xl tracking-tighter">
            wanderly
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-black transition-colors">
              Stays
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Experiences
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Online Experiences
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hidden md:block text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Become a host
          </a>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-600">🌎</span>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 lg:px-20 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-6">
              Live{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                anywhere.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Discover homes and experiences that make you feel like a local,
              wherever you go.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    WHERE
                  </label>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl border border-gray-200 transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    CHECK IN
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl border border-gray-200 transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    CHECK OUT
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl border border-gray-200 transition-all"
                  />
                </div>
                <div className="flex-1 md:w-32">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    GUESTS
                  </label>
                  <select className="w-full px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl border border-gray-200 transition-all">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3+ guests</option>
                  </select>
                </div>
                <div className="md:w-20 flex items-end">
                  <button className="w-full bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-xl transition-all duration-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Explore by category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-violet-50 transition-colors duration-300 relative overflow-hidden">
                    <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="text-center font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Listings */}
          <div className="mb-24">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Stays</h2>
              <a
                href="#"
                className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
              >
                View all
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStays.map((stay, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                    <img
                      src={stay.image}
                      alt={stay.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-violet-600 transition-colors">
                    {stay.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{stay.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-violet-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">{stay.rating}</span>
                    </div>
                    <p className="font-bold">{stay.price} night</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Wander?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join millions of travelers discovering unique stays and
              unforgettable experiences around the world.
            </p>
            <button className="bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Start Exploring
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Discover</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Trust & Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Travel Credit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Seasonal Deals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Hosting</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Host your home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Host an experience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Responsible hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Community forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Cancellation options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Neighborhood Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-black font-black text-xl tracking-tighter mb-4 md:mb-0">
              WaterBnb
            </div>
            <div className="flex space-x-6 text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Sitemap
              </a>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">🌎</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AirbnbCloneLanding;
