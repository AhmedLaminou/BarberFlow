
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Sparkles, Star, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <Navbar />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-2xl">
                  <MapPin className="h-12 w-12 text-white animate-bounce" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-amber-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Visit us at our premium location or get in touch to schedule your appointment. 
              We're here to make you look and feel your absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="group shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl">
                    <MapPin className="h-6 w-6 mr-2 text-amber-400 animate-pulse" />
                    Our Location
                    <Sparkles className="h-5 w-5 ml-2 text-amber-400 animate-spin" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="text-slate-700 text-lg font-medium">📍 123 Main Street</p>
                    <p className="text-slate-700 text-lg">🏙️ Downtown District</p>
                    <p className="text-slate-700 text-lg">🗽 New York, NY 10001</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl">
                    <MessageCircle className="h-6 w-6 mr-2 text-blue-200 animate-pulse" />
                    Contact Information
                    <Sparkles className="h-5 w-5 ml-2 text-blue-200 animate-spin" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="group flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    <Phone className="h-5 w-5 mr-4 text-blue-600 group-hover:animate-pulse" />
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="text-slate-700 font-semibold text-lg">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="group flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    <Mail className="h-5 w-5 mr-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="text-slate-700 font-semibold">info@suavestyling.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="h-6 w-6 mr-2 text-green-200 animate-pulse" />
                    Business Hours
                    <Sparkles className="h-5 w-5 ml-2 text-green-200 animate-spin" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 rounded hover:bg-green-50 transition-colors duration-300">
                      <span className="text-slate-700 font-medium">Monday - Friday</span>
                      <span className="text-green-600 font-bold">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded hover:bg-green-50 transition-colors duration-300">
                      <span className="text-slate-700 font-medium">Saturday</span>
                      <span className="text-green-600 font-bold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded hover:bg-green-50 transition-colors duration-300">
                      <span className="text-slate-700 font-medium">Sunday</span>
                      <span className="text-green-600 font-bold">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and CTA */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 overflow-hidden bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2 animate-pulse" />
                    Find Us on the Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-square lg:aspect-[4/3] w-full relative group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1087145727814!2d-73.98569668459457!3d40.74881707932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1639472736950!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-300 group-hover:saturate-110"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-0 overflow-hidden relative">
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-amber-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center text-amber-400 text-2xl">
                    <Star className="h-6 w-6 mr-2 animate-spin" />
                    Ready to Transform Your Look?
                    <Star className="h-6 w-6 ml-2 animate-spin" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    🌟 Experience the finest in traditional barbering and modern grooming. 
                    Book your appointment today and discover why we're the premier 
                    destination for discerning gentlemen who demand excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/booking" 
                      className="group inline-block"
                    >
                      <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <Clock className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                        Book Your Appointment
                      </Button>
                    </a>
                    <a 
                      href="tel:(555)123-4567" 
                      className="group inline-block"
                    >
                      <Button variant="outline" className="w-full sm:w-auto border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                        <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Features Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Visit Us?</h2>
              <p className="text-slate-600 text-lg">Discover what makes our barbershop special</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🅿️", title: "Free Parking", desc: "Convenient parking available right outside" },
                { icon: "💳", title: "Multiple Payment Options", desc: "Cash, card, and digital payments accepted" },
                { icon: "🎵", title: "Great Atmosphere", desc: "Relaxing music and comfortable environment" }
              ].map((feature, index) => (
                <div key={index} className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
