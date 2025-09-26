import React, { useState, useEffect } from 'react';
import { 
  Mountain, 
  Calendar, 
  MapPin, 
  Users, 
  Camera, 
  TreePine, 
  Waves, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ChevronDown,
  Star,
  Check,
  X,
  Menu,
  Clock,
  Shield,
  Heart
} from 'lucide-react';

function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itinerary = [
    {
      day: "Day 00",
      image:"/train-svgrepo-com.svg",
      title: "Mumbai/Pune - Guwahati Train",
      description: "Begin your beautiful journey to Meghalaya from Mumbai. Assemble at LTT railway station and meet our coordinators.",
      highlights: ["Train journey begins", "Meet fellow travelers", "Fun games and interactions"]
    },
    {
      day: "Day 01", 
      title: "Guwahati - Kaziranga",
      image:"/park-svgrepo-com.svg",
      description: "Arrive at Guwahati, freshen up and travel to Kaziranga National Park, a UNESCO World Heritage site.",
      highlights: ["Airport pickup", "Scenic drive to Kaziranga", "Hotel check-in"]
    },
    {
      day: "Day 02",
      title: "Jungle Safari - Shillong", 
       image:"/jeep-safari-svgrepo-com.svg",
      description: "Thrilling Jeep Safari through Kaziranga to spot the One-Horned Rhino, tigers, elephants, and diverse wildlife.",
      highlights: ["Morning safari", "Wildlife spotting", "Drive to Shillong"]
    },
    {
      day: "Day 03",
      title: "Laitlum Canyons - Phi Phi Falls - Dawki",
      image:"/waterfall-development-svgrepo-com.svg",
      description: "Visit the mesmerizing Laitlum Canyons and Phephe Falls, then continue to Dawki for camping under the stars.",
      highlights: ["End of Hills views", "Hidden waterfall", "Camping at Shnongpeng"]
    },
    {
      day: "Day 04", 
      title: "Dawki - Mawlynnong - Cherrapunji",
      image:"/fiord-svgrepo-com.svg",
      description: "Crystal-clear Umngot River boat ride, visit Asia's cleanest village, and explore the Indo-Bangladesh border.",
      highlights: ["Cleanest river in Asia", "Cliff jumping option", "Asia's cleanest village"]
    },
    {
      day: "Day 05",
      title: "Cherrapunji - Nongriat Double Decker",
      image:"/bridge-svgrepo-com.svg",
      description: "Trek to the famous Double Decker Living Root Bridges through thick forest - a true marvel of nature.",
      highlights: ["Tyrna Village trek", "Living Root Bridges", "Natural water bodies"]
    },
    {
      day: "Day 06",
      title: "Explore Cherrapunji - Shillong",
      image:"/cave-landscape-nature-svgrepo-com.svg",
      description: "Visit Wei Sawdong Waterfalls, Arwah Caves, and the spectacular Nohkalikai Falls - Meghalaya's tallest waterfall.",
      highlights: ["Wei Sawdong Falls", "Limestone caves", "1,115 feet waterfall"]
    },
    {
      day: "Day 07",
      title: "Shillong - Guwahati Departure", 
      image:"/return-svgrepo-com.svg",
      description: "Early morning breakfast and proceed to Guwahati Railway station for your return journey to Mumbai.",
      highlights: ["Return journey", "Sweet memories", "Time for farewell"]
    }
  ];

  const highlights = [
  {
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    title: "Living Root Bridges",
    description: "Marvel at nature's engineering in Nongriat village"
  },
  {
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    title: "Umngot River",
    description: "Asia's cleanest river with crystal-clear waters"
  },
  {
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    title: "Wildlife Safari",
    description: "Spot the Great Indian One-Horned Rhinoceros"
  },
  {
    image: "https://images.pexels.com/photos/1146578/pexels-photo-1146578.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    title: "Nohkalikai Falls",
    description: "India's tallest plunge waterfall at 1,115 feet"
  },
  {
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    title: "Mawlynnong Village",
    description: "Asia's cleanest village experience"
  },
  {
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    title: "Laitlum Canyons",
    description: "Breathtaking views at the 'End of Hills'"
  }
];

  const packages = [
    {
      route: "Guwahati - Guwahati",
      regular: "₹21,999",
      newYear: "₹24,999",
      pickup: "11am Guwahati Airport",
      drop: "3pm Guwahati Airport"
    },
    {
      route: "Mumbai - Mumbai", 
      regular: "₹27,999",
      newYear: "₹29,999",
      pickup: "LTT Railway Station",
      drop: "LTT Railway Station"
    },
    {
      route: "Pune - Pune",
      regular: "₹28,999", 
      newYear: "₹30,999",
      pickup: "Pune Railway Station",
      drop: "Pune Railway Station"
    }
  ];

  const tourDates = [
    { date: "9th - 17th November", special: "Cherry Blossom Special" },
    { date: "24th December - 3rd January", special: "New Year Special" },
    { date: "18th January - 28th January", special: "Long Weekend Special" }
  ];

  const inclusions = [
    "3AC/3E Train Travel from Mumbai - Guwahati & return",
    "Private Transport throughout the Journey", 
    "Premium Hotel/Homestay/Tent accommodations on 3-4 Sharing",
    "Pure Veg 6 Breakfast with local taste of meals",
    "All entry fees & permits for different locations",
    "First aid kit & medical assistance",
    "Expert Trip leader with fun games & best service",
    "Jeep Safari in Kaziranga & Boating in Dawki",
    "₹1000 Cap for Pune to Mumbai Travel"
  ];

  const exclusions = [
    "Any kind of personal expenses",
    "Insurance coverage",
    "Meals during road journey & lunch on all days", 
    "Additional costs due to unforeseen circumstances",
    "Anything not mentioned in inclusions",
    "Adventure activities not mentioned in inclusions"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Travelocity</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#itinerary" className="text-gray-700 hover:text-emerald-600 transition-colors">Itinerary</a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">Pricing</a>
              <a href="#details" className="text-gray-700 hover:text-emerald-600 transition-colors">Details</a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">Book Now</a>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#itinerary" className="block px-3 py-2 text-gray-700">Itinerary</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700">Pricing</a>
              <a href="#details" className="block px-3 py-2 text-gray-700">Details</a>
              <a href="#contact" className="block px-3 py-2 text-emerald-600">Book Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-3 py-8 sm:py-12">
  <div 
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800&w=360&fit=crop')`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
  </div>

  <div className="relative z-10 w-full max-w-md mx-auto text-center text-white flex flex-col gap-5">
    <p className="text-base sm:text-lg text-emerald-300 font-medium mt-2">Nature's Hidden Symphony</p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">Meghalaya</h1>
    <p className="text-base sm:text-lg text-gray-200 mb-4">
      Discover the abode of clouds with living root bridges and sparkling rivers in India's most beautiful state.
    </p>
    <div className="flex flex-col gap-3 w-full">
      <a href="#pricing"
         className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full text-base font-semibold transition-all">
        Explore Packages
      </a>
      <a href="#itinerary"
         className="w-full border border-white text-white hover:bg-white hover:text-emerald-700 py-3 rounded-full text-base font-semibold transition-all">
        View Itinerary
      </a>
    </div>

    {/* If you want to show stats, use a horizontal scroll */}
    <div className="flex gap-2 overflow-x-auto mt-3 pb-3">
      <div className="flex-shrink-0 bg-white/10 backdrop-blur rounded-lg px-3 py-2 min-w-[85px]">
        <Calendar className="h-6 w-6 mx-auto mb-1 text-emerald-300" />
        <p className="text-xs font-semibold">9 Days</p>
        <p className="text-xs text-gray-300">Adventure</p>
      </div>
      {/* ... Repeat for other stats ... */}
    </div>
  </div>
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <ChevronDown className="h-7 w-7" />
  </div>
</section>



      {/* Itinerary Section */}
<section id="itinerary" className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4">
    <div className="mb-12 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 inline-block text-transparent bg-clip-text tracking-tight mb-3">
        Your Meghalaya Adventure
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl">
        Marvel at each day’s journey through captivating visuals and handpicked experiences.
      </p>
    </div>

    {/* Visual Timeline */}
    <ul className="relative border-l-4 border-emerald-100 space-y-12">
      {itinerary.map((day, index) => (
        <li key={index} className="group relative pl-10 fade-in">
          {/* Timeline Dot */}
          <span className="absolute -left-3.5 top-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-400 via-emerald-700 to-cyan-400 border-4 border-white z-10 shadow-lg group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-sm">{day.day.replace(/[^0-9]/g, '')}</span>
          </span>

          {/* Timeline Card */}
          <div
            className={`bg-gray-50 rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-400 hover:shadow-xl cursor-pointer ${
              activeDay === index ? 'ring-4 ring-emerald-200 scale-[1.02] bg-white' : ''
            }`}
            onClick={() => setActiveDay(activeDay === index ? -1 : index)}
          >
            <div className="flex items-center gap-4 mb-1">
              <img
                src={day.image}
                alt={day.title}
                className="w-12 h-12 rounded-lg bg-emerald-100 object-cover border-2 border-white shadow"
              />
              <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
              <ChevronDown className={`ml-auto h-5 w-5 text-emerald-400 transition-transform ${activeDay === index ? 'rotate-180' : ''}`} />
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              {day.brief}
            </p>
            {/* Animated Expand */}
            <div className={`overflow-hidden transition-all duration-300 ${activeDay === index ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}>
              {activeDay === index && (
                <>
                  <p className="text-gray-800 mt-2 text-base">{day.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {day.highlights.map((highlight, idx) => (
                      <span key={idx} className="inline-flex items-center bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-xs font-semibold">
                        <Check className="h-4 w-4 mr-1" /> {highlight}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>

    {/* CTA at the Bottom */}
    <div className="mt-14 flex justify-center">
      <a
        href="#pricing"
        className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
      >
        See Packages
      </a>
    </div>
  </div>
</section>




      {/* Highlights Gallery */}
       <section className="py-12 bg-gradient-to-br from-white via-emerald-50 to-cyan-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text mb-2">
            Experience the Magic
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xs sm:max-w-md mx-auto leading-relaxed">
            From living root bridges to crystal-clear rivers, discover nature’s masterpieces.
          </p>
        </div>

        {/* Mobile Swipeable Cards */}
        <div className="flex md:hidden overflow-x-scroll space-x-6 pb-4 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 rounded-lg shadow-lg bg-white relative">
              <img 
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-44 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{highlight.title}</h3>
                <p className="text-xs text-gray-600 mt-1 truncate">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop and Tablet grids */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="group relative rounded-xl shadow-md bg-white overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{highlight.title}</h3>
                <p className="text-gray-200 text-sm">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible packages designed for your convenience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 fade-in">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-3 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-8 text-center rounded-t-3xl">
                <h3 className="text-2xl font-bold text-white mb-1">{pkg.route}</h3>
                <p className="text-emerald-200 text-sm">{pkg.pickup}</p>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="flex justify-center items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-gray-900">{pkg.regular}</span>
                    <span className="text-gray-500 text-lg">/ person</span>
                  </div>
                  <p className="text-gray-600 font-medium">Regular Batches</p>
                </div>

                <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-8 text-center">
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-amber-700">{pkg.newYear}</span>
                    <span className="text-amber-600 text-lg">/ person</span>
                  </div>
                  <p className="text-amber-700 font-semibold text-sm mt-1">New Year Special</p>
                </div>

                <div className="space-y-5 mb-10">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-emerald-500" />
                    <span className="text-gray-700 font-medium">Pickup: {pkg.pickup}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-emerald-500" />
                    <span className="text-gray-700 font-medium">Drop: {pkg.drop}</span>
                  </div>
                </div>

                <button className="mt-auto w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Tour Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Tour Dates</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tourDates.map((tour, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">{tour.date}</p>
                <p className="text-emerald-600 text-sm">{tour.special}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Inclusions */}
            <div className="fade-in">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Check className="h-8 w-8 text-emerald-500" />
                  <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
                </div>
                
                <div className="space-y-4">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exclusions */}
            <div className="fade-in">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <X className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Not Included</h3>
                </div>
                
                <div className="space-y-4">
                  {exclusions.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Travelocity
            </h2>
            <p className="text-xl text-gray-600">
              Creating unforgettable experiences with safety, comfort, and adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community Travel",
                description: "Join like-minded adventurers aged 17-40 for fun, active, and outdoorsy travel experiences."
              },
              {
                icon: Shield,
                title: "Safe Space for Everyone",
                description: "We ensure a welcoming and safe environment for all travelers, especially solo female travelers."
              },
              {
                icon: Heart,
                title: "Customer Satisfaction", 
                description: "Curated experiences at the right price - you know what you pay for, and you get what you pay for."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center fade-in group">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Meghalaya Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today to book your unforgettable journey to the Northeast
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <Phone className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-300 mb-2">Ojuskorde: 90049 51429</p>
              <p className="text-gray-300">Mohit: 93726 31909</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <Instagram className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-gray-300">@travelocity.tourism</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Instagram className="h-6 w-6 text-pink-400" />
                <Facebook className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-emerald-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Payment Details</h3>
            <div className="text-left max-w-md mx-auto">
              <p className="mb-2"><strong>Account Name:</strong> TRAVELOCITY TOURISM</p>
              <p className="mb-2"><strong>Account Number:</strong> 924020041902681</p>
              <p className="mb-2"><strong>IFSC Code:</strong> UTIB0000201</p>
              <p className="mb-2"><strong>GPay/PhonePay:</strong> 9004951429</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Mountain className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold">Travelocity Tourism</span>
          </div>
          <p className="text-gray-400 mb-4">
            Creating memories through adventure travel experiences
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Travelocity Tourism. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;