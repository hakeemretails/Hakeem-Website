import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0D2B4F] to-[#081A2B] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Hakkem Fleet Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <h1 className="font-poppins text-2xl font-bold text-white">
                Hakkem Fleet
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#booking" className="text-white hover:text-[#00B4D8] transition-colors">
                Book Truck
              </Link>
              <Link href="#tracking" className="text-white hover:text-[#00B4D8] transition-colors">
                Track Delivery
              </Link>
              <Link href="/privacy" className="text-white hover:text-[#00B4D8] transition-colors">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D2B4F] to-[#081A2B] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00B4D8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6B00] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fast, Reliable Truck Delivery
            <br />
            <span className="text-[#00B4D8]">Across Nigeria</span> 🚚
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Book company-owned trucks easily, get instant price estimates, and track your delivery in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#booking" 
              className="bg-[#00B4D8] hover:bg-[#0099C4] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Truck
            </Link>
            <Link 
              href="#tracking" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0D2B4F] font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Track Delivery
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0D2B4F] mb-4">
              Why Choose Hakkem Fleet?
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              We make truck delivery simple, transparent, and reliable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#00B4D8] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Easy Booking Form
              </h3>
              <p className="text-[#333333]">
                Simple form to enter pickup and destination details with truck type selection.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Instant Price Estimate
              </h3>
              <p className="text-[#333333]">
                Get transparent pricing instantly based on your route and truck type.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0D2B4F] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🆔</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Unique Booking ID
              </h3>
              <p className="text-[#333333]">
                Receive a unique tracking code for your delivery (e.g., BH-2025-0001).
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#00B4D8] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Real-Time Tracking
              </h3>
              <p className="text-[#333333]">
                Track your delivery status from booking to completion in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0D2B4F] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              Get your goods delivered in 4 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Fill Pickup & Destination
              </h3>
              <p className="text-[#333333]">
                Enter your pickup state and destination state details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Choose Truck Type
              </h3>
              <p className="text-[#333333]">
                Select the appropriate truck type for your cargo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0D2B4F] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Get Fixed Price & Confirm
              </h3>
              <p className="text-[#333333]">
                Receive transparent pricing and confirm your booking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0D2B4F] mb-3">
                Track Your Delivery
              </h3>
              <p className="text-[#333333]">
                Monitor your delivery progress with real-time updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="booking" className="py-20 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0D2B4F] mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              No hidden fees. Get instant estimates for your delivery routes.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-6">
                  Sample Routes
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-[#F4F6F8] rounded-lg">
                    <span className="font-medium text-[#333333]">Lagos → Abuja</span>
                    <span className="font-bold text-[#0D2B4F] text-lg">₦1,100,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#F4F6F8] rounded-lg">
                    <span className="font-medium text-[#333333]">Lagos → Kano</span>
                    <span className="font-bold text-[#0D2B4F] text-lg">₦1,350,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#F4F6F8] rounded-lg">
                    <span className="font-medium text-[#333333]">Abuja → Port Harcourt</span>
                    <span className="font-bold text-[#0D2B4F] text-lg">₦950,000</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
                  Get Your Estimate
                </h3>
                <p className="text-[#333333] mb-6">
                  Enter your specific route details to get an accurate price estimate for your delivery.
                </p>
                <Link 
                  href="#booking" 
                  className="bg-[#00B4D8] hover:bg-[#0099C4] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0D2B4F] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              Trusted by businesses across Nigeria for reliable delivery services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F6F8] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#0D2B4F]">Adebayo O.</h4>
                  <p className="text-[#333333] text-sm">Lagos Business Owner</p>
                </div>
              </div>
              <p className="text-[#333333] italic">
                &ldquo;Hakkem Fleet made our logistics so much easier. The booking process is simple and the tracking feature gives us peace of mind.&rdquo;
              </p>
            </div>
            
            <div className="bg-[#F4F6F8] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold">
                  F
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#0D2B4F]">Fatima M.</h4>
                  <p className="text-[#333333] text-sm">Abuja Trader</p>
                </div>
              </div>
              <p className="text-[#333333] italic">
                &ldquo;Transparent pricing and reliable delivery. I&apos;ve been using Hakkem Fleet for 6 months and never had any issues.&rdquo;
              </p>
            </div>
            
            <div className="bg-[#F4F6F8] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0D2B4F] rounded-full flex items-center justify-center text-white font-bold">
                  I
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#0D2B4F]">Ibrahim K.</h4>
                  <p className="text-[#333333] text-sm">Kano Distributor</p>
                </div>
              </div>
              <p className="text-[#333333] italic">
                &ldquo;The real-time tracking feature is amazing. I always know where my goods are and when they&apos;ll arrive.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D2B4F] to-[#081A2B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Move Your Goods?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Hakkem Fleet for their delivery needs.
          </p>
          <Link 
            href="#booking" 
            className="bg-[#00B4D8] hover:bg-[#0099C4] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Book Now on Hakkem Fleet
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#081A2B] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-poppins text-2xl font-bold text-white mb-4">
                Hakkem Fleet
              </h3>
              <p className="text-gray-300 mb-4">
                Fast, reliable truck delivery across Nigeria. Book company-owned trucks easily, get instant price estimates, and track your delivery in real time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-[#00B4D8] transition-colors">Home</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-[#00B4D8] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#00B4D8] transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#00B4D8] transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +234 800 HAKKEM</p>
                <p>✉️ support@hakeemretails.com</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Hakkem Fleet. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}