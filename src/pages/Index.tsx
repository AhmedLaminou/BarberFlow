
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Clock, MapPin, Phone, Star, Award, Users, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { 
      name: "Classic Haircut", 
      price: "$35", 
      description: "Traditional cut with styling", 
      duration: "45 min",
      popular: false,
      image: "✂️"
    },
    { 
      name: "Beard Trim", 
      price: "$25", 
      description: "Professional beard shaping", 
      duration: "30 min",
      popular: false,
      image: "🧔"
    },
    { 
      name: "Haircut + Beard Combo", 
      price: "$55", 
      description: "Complete grooming package", 
      duration: "60 min",
      popular: true,
      image: "💎"
    },
    { 
      name: "Hot Towel Shave", 
      price: "$40", 
      description: "Luxury straight razor shave", 
      duration: "45 min",
      popular: false,
      image: "🔥"
    },
    { 
      name: "Hair Wash & Style", 
      price: "$20", 
      description: "Shampoo and professional styling", 
      duration: "30 min",
      popular: false,
      image: "💧"
    },
    { 
      name: "Mustache Trim", 
      price: "$15", 
      description: "Precision mustache grooming", 
      duration: "15 min",
      popular: false,
      image: "👨"
    }
  ];

  const testimonials = [
    { name: "Marcus Johnson", text: "Best barbershop in the city! The attention to detail is incredible.", rating: 5 },
    { name: "David Chen", text: "Professional service and amazing atmosphere. Highly recommend!", rating: 5 },
    { name: "Alex Rodriguez", text: "Been coming here for years. Never disappointed with the results.", rating: 5 }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "4.9", label: "Star Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>
        
        <div className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative p-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Scissors className="h-16 w-16 text-slate-900 animate-pulse" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent animate-fade-in">
            Suave Styling
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-amber-400 mr-2 animate-spin" />
            <p className="text-2xl md:text-3xl text-amber-100 font-light tracking-wide">
              Premium Barbershop & Grooming
            </p>
            <Sparkles className="h-6 w-6 text-amber-400 ml-2 animate-spin" />
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Where tradition meets modern style. Experience the art of classic barbering with contemporary flair 
            and unmatched attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/booking">
              <Button size="lg" className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu">
                <Scissors className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book Your Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                <MapPin className="h-5 w-5 mr-2" />
                Visit Us
              </Button>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-amber-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional grooming services tailored to your style and preferences, 
              delivered with precision and care by our expert barbers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-3 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.image}
                    </div>
                    <span className="text-3xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {service.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-amber-700 transition-colors duration-300">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center text-slate-500 group-hover:text-amber-600 transition-colors duration-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/booking">
              <Button size="lg" className="group bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Scissors className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Book Your Service Now
                <Sparkles className="h-5 w-5 ml-3 group-hover:animate-spin" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-slate-200 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-amber-400 font-semibold">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-amber-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Why Choose Suave Styling?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference of professional barbering with our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Expert Barbers", desc: "Skilled professionals with years of experience and continuous training" },
              { icon: Scissors, title: "Premium Tools", desc: "Top-quality equipment and products for the perfect cut every time" },
              { icon: Clock, title: "Convenient Hours", desc: "Flexible scheduling to fit your busy lifestyle and preferences" }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-amber-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                <Scissors className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400">Suave Styling</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your premier destination for classic barbering and modern grooming. 
              Where craftsmanship meets style.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Contact Info</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                <Phone className="h-4 w-4 mr-3 text-amber-400 group-hover:animate-pulse" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                <MapPin className="h-4 w-4 mr-3 text-amber-400" />
                <span>123 Main St, Downtown District</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Business Hours</h4>
            <div className="text-slate-300 space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-amber-400">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-amber-400">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-400">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Suave Styling. All rights reserved. Crafted with ❤️ for style enthusiasts.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
