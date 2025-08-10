import React from 'react';

// LandingPage component serves as the main structure for the GoCohort landing page layout.
const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">GoCohort</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-blue-500 transition duration-300">Features</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Join the Waitlist</h2>
          <p className="text-lg text-gray-600 mb-6">Make ads easily without a marketing agency, powered by AI.</p>
          <form className="flex flex-col items-center w-full max-w-md">
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded p-2 w-full mb-4" required />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Subscribe</button>
          </form>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Features</h3>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-6">Discover how GoCohort can streamline your advertising efforts with AI technology.</p>
          <ul className="space-y-4">
            <li className="bg-white shadow rounded p-4 text-gray-700">✦ Easy to Use Interface</li>
            <li className="bg-white shadow rounded p-4 text-gray-700">✦ AI-Powered Insights</li>
            <li className="bg-white shadow rounded p-4 text-gray-700">✦ No Marketing Agency Needed</li>
          </ul>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">About Us</h3>
          <p className="text-center text-gray-600 max-w-xl mx-auto">We are dedicated to empowering businesses to create and manage ads effortlessly.</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h3>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded p-2 w-full mb-4" required />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded p-2 w-full mb-4" required />
            <textarea placeholder="Your Message" className="border border-gray-300 rounded p-2 w-full mb-4 h-32" required></textarea>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 GoCohort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;