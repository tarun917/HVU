function Footer() {
  return (
    
    <footer className="bg-black text-gray-300 text-sm">
      {/* Divider */}
      <div className="border-t border-gray-700 my-6 mx-2"></div>
      {/* Top Section */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            Hindustan Virtual University is a platform for immersive learning and innovation. Join us to experience the future of education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-purple-400 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-purple-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>
              <strong>Support Email:</strong> support@hvu.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9999934999
            </li>
            <li>
              <strong>Address:</strong> Virtual House, HVU Lane, Silicon City, 560029, Banglore, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition"
            >
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition"
            >
              <i className="fab fa-twitter-square text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-white transition"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white transition"
            >
              <i className="fab fa-instagram-square text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6 mx-2"></div>

      {/* Bottom Section */}
      <div className="text-center py-4">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Hindustan Virtual University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;