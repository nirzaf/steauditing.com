import { tailwindColors } from '../theme';
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi';

export default function Contact() {
  return (
    <div id="contact" className={`relative ${tailwindColors.background} py-20`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className={`absolute -skew-y-12 transform ${tailwindColors.primary} opacity-5 w-full h-full`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4">
            <div className={`h-1 w-12 ${tailwindColors.primary}`}></div>
            <h2 className={`text-4xl font-extrabold ${tailwindColors.primaryText} sm:text-5xl`}>
              Contact Us
            </h2>
            <div className={`h-1 w-12 ${tailwindColors.primary}`}></div>
          </div>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our expert team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${tailwindColors.primary} bg-opacity-10 rounded-lg`}>
                  <FiPhone className={`w-6 h-6 ${tailwindColors.primaryText}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
                  <a 
                    href="tel:+97450008194" 
                    className={`text-lg ${tailwindColors.primaryText} hover:underline`}
                  >
                    +974 5000 8194
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${tailwindColors.primary} bg-opacity-10 rounded-lg`}>
                  <FiMail className={`w-6 h-6 ${tailwindColors.primaryText}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Email</h3>
                  <a 
                    href="mailto:info@steaudit.com" 
                    className={`text-lg ${tailwindColors.primaryText} hover:underline`}
                  >
                    info@steaudit.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${tailwindColors.primary} bg-opacity-10 rounded-lg`}>
                  <FiMapPin className={`w-6 h-6 ${tailwindColors.primaryText}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Office No. 4, Building No. 3,<br />
                    Street No. 902, Zone No. 55,<br />
                    Muaither Area, Qatar
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/zVLPxbrQbEnaJx4R7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center mt-2 text-sm ${tailwindColors.primaryText} hover:underline`}
                  >
                    View on Google Maps <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full ${tailwindColors.primary} text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity duration-300`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-xl p-4 transform hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14432.914085278253!2d51.415211!3d25.262897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d9609642333b%3A0xe1b2139c78662585!2sSalem%20Taleb%20Efaifa%20Auditing%20and%20consultancy!5e0!3m2!1sen!2sus!4v1732233471451!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="mt-8 bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}