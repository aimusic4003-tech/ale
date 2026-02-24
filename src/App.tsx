import { useState } from 'react';
import { Menu, X, Wrench, Settings, Shield, Truck, Phone, MapPin, CheckCircle, Award, Users, Clock } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                TWO BROTHERS CARAVAN COMPANY
              </h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-500 transition-colors duration-300 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-500 transition-colors duration-300 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-500 transition-colors duration-300 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-500 transition-colors duration-300 font-medium">
                Contact
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-orange-500 transition-colors"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-white hover:text-orange-500 transition-colors duration-300 font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-orange-500 transition-colors duration-300 font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white hover:text-orange-500 transition-colors duration-300 font-medium py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-orange-500 transition-colors duration-300 font-medium py-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img src="/images/72.jpg" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            TWO BROTHERS CARAVAN COMPANY
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12 font-light">
            Complete Caravan Service, Repairs & Custom Work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request a Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional caravan care and maintenance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Full Service & Maintenance</h3>
              <p className="text-gray-600">Complete caravan servicing to keep your vehicle in top condition.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mechanical Check</h3>
              <p className="text-gray-600">Thorough mechanical inspection and diagnostic services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tyres & Brake System</h3>
              <p className="text-gray-600">Expert tyre fitting and brake system inspection services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Trailer Service</h3>
              <p className="text-gray-600">Comprehensive trailer maintenance and repair solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Service</h3>
              <p className="text-gray-600">Convenient on-site service at your location.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Woodrot Repair</h3>
              <p className="text-gray-600">Expert timber damage repair and replacement services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Resealing</h3>
              <p className="text-gray-600">Professional resealing to prevent water damage and leaks.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Alterations</h3>
              <p className="text-gray-600">Custom modifications to suit your specific needs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Movers</h3>
              <p className="text-gray-600">Safe and reliable caravan moving services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Aircons</h3>
              <p className="text-gray-600">Air conditioning installation, service and repair.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Stickers & Branding</h3>
              <p className="text-gray-600">Professional vinyl graphics and branding solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Caravan Windows</h3>
              <p className="text-gray-600">Window replacement and repair services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Off-road Trailer</h3>
              <p className="text-gray-600">Specialized off-road trailer modifications and repairs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Teardrop Rebuild</h3>
              <p className="text-gray-600">Complete teardrop trailer rebuild and repair services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Canvas Work</h3>
              <p className="text-gray-600">Expert canvas repairs and custom fabrication.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Parts Supply</h3>
              <p className="text-gray-600">Quality caravan parts and accessories available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Recent Work</h2>
            <p className="text-xl text-gray-600">Quality craftsmanship in every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/1.jpg" alt="Gallery 1" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/2.jpg" alt="Gallery 2" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/3.jpg" alt="Gallery 3" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/4.jpg" alt="Gallery 4" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/6.jpg" alt="Gallery 6" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/7.jpg" alt="Gallery 7" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/8.jpg" alt="Gallery 8" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/5.jpg" alt="Gallery 8" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/9.jpg" alt="Gallery 9" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/10.jpg" alt="Gallery 10" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/11.jpg" alt="Gallery 11" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/12.jpg" alt="Gallery 12" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/13.jpg" alt="Gallery 13" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/14.jpg" alt="Gallery 14" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/15.jpg" alt="Gallery 15" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/16.jpg" alt="Gallery 16" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/17.jpg" alt="Gallery 17" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/18.jpg" alt="Gallery 18" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/19.jpg" alt="Gallery 19" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/20.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/21.jpg" alt="Gallery 21" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/22.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/23.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/24.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/25.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/26.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/27.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/28.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/29.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/30.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/31.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/32.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/33.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/34.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/35.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/36.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/37.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/38.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/39.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/40.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/41.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src="/images/42.jpg" alt="Gallery 20" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Your trusted caravan service partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Experienced Technicians</h3>
              <p className="text-gray-600">Highly skilled professionals with years of caravan expertise</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Service Available</h3>
              <p className="text-gray-600">We come to you for convenient on-site repairs and maintenance</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Parts</h3>
              <p className="text-gray-600">Only the best parts and materials for lasting results</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Workmanship</h3>
              <p className="text-gray-600">Meticulous attention to detail in every job we undertake</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Caravan Repairs or Service?</h2>
          <p className="text-xl text-gray-300 mb-10">Get in touch with us today for a quote or to book your service</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition-colors">Services</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Contact</button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>Phone: Coming Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Location: Coming Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>Hours: Coming Soon</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">TWO BROTHERS CARAVAN COMPANY</h3>
              <p className="text-gray-400">
                Your trusted partner for complete caravan service, repairs, and custom work.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 SEGULLAH PROJECTS AND DESIGNS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
