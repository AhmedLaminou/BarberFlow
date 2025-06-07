
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Clock, MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const services = [
    { name: "Classic Haircut", price: "$35", description: "Traditional cut with styling", duration: "45 min" },
    { name: "Beard Trim", price: "$25", description: "Professional beard shaping", duration: "30 min" },
    { name: "Haircut + Beard Combo", price: "$55", description: "Complete grooming package", duration: "60 min" },
    { name: "Hot Towel Shave", price: "$40", description: "Luxury straight razor shave", duration: "45 min" },
    { name: "Hair Wash & Style", price: "$20", description: "Shampoo and professional styling", duration: "30 min" },
    { name: "Mustache Trim", price: "$15", description: "Precision mustache grooming", duration: "15 min" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-500 rounded-full">
              <Scissors className="h-12 w-12 text-slate-900" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            Suave Styling
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-2 font-light">
            Premium Barbershop & Grooming
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Where tradition meets modern style. Experience the art of classic barbering with contemporary flair.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional grooming services tailored to your style and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-slate-900">{service.name}</CardTitle>
                    <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                  </div>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-slate-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/booking">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg transition-all duration-300">
                <Scissors className="h-5 w-5 mr-2" />
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Suave Styling?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the difference of professional barbering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-500 rounded-full">
                  <Star className="h-8 w-8 text-slate-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Barbers</h3>
              <p className="text-slate-300">Skilled professionals with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-500 rounded-full">
                  <Scissors className="h-8 w-8 text-slate-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Tools</h3>
              <p className="text-slate-300">Top-quality equipment for the perfect cut</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-500 rounded-full">
                  <Clock className="h-8 w-8 text-slate-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenient Hours</h3>
              <p className="text-slate-300">Flexible scheduling to fit your lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Suave Styling</h3>
            <p className="text-slate-300 mb-4">
              Your premier destination for classic barbering and modern grooming.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <span>123 Main St, Downtown</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="text-slate-300 space-y-1">
              <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 8:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Suave Styling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
