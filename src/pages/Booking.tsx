
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, Scissors, CheckCircle, Sparkles, User, Phone as PhoneIcon, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    { 
      id: 'haircut', 
      name: "Classic Haircut", 
      price: "$35", 
      duration: "45 min", 
      popular: false, 
      emoji: "✂️",
      description: "Traditional precision cut with styling" 
    },
    { 
      id: 'beard', 
      name: "Beard Trim", 
      price: "$25", 
      duration: "30 min", 
      popular: false, 
      emoji: "🧔",
      description: "Professional beard shaping and styling" 
    },
    { 
      id: 'combo', 
      name: "Haircut + Beard Combo", 
      price: "$55", 
      duration: "60 min", 
      popular: true, 
      emoji: "💎",
      description: "Complete grooming experience" 
    },
    { 
      id: 'shave', 
      name: "Hot Towel Shave", 
      price: "$40", 
      duration: "45 min", 
      popular: false, 
      emoji: "🔥",
      description: "Luxury straight razor experience" 
    },
    { 
      id: 'wash', 
      name: "Hair Wash & Style", 
      price: "$20", 
      duration: "30 min", 
      popular: false, 
      emoji: "💧",
      description: "Relaxing wash with premium styling" 
    },
    { 
      id: 'mustache', 
      name: "Mustache Trim", 
      price: "$15", 
      duration: "15 min", 
      popular: false, 
      emoji: "👨",
      description: "Precision mustache grooming" 
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !customerName || !customerPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const booking = {
      id: Date.now().toString(),
      service: services.find(s => s.id === selectedService),
      date: selectedDate,
      time: selectedTime,
      customerName,
      customerPhone,
      status: 'confirmed',
      createdAt: new Date()
    };

    const existingBookings = JSON.parse(localStorage.getItem('barbershop_bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('barbershop_bookings', JSON.stringify(existingBookings));

    setIsSubmitted(true);
    toast({
      title: "Booking Confirmed! 🎉",
      description: "Your appointment has been successfully booked.",
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <Navbar />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl animate-bounce">
                  <CheckCircle className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-green-600 bg-clip-text text-transparent">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              🎉 Your appointment has been successfully booked. We can't wait to see you!
            </p>
            
            <Card className="bg-gradient-to-br from-white to-green-50 shadow-2xl border-green-200 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-green-700">
                  <Sparkles className="h-6 w-6 mr-2 animate-spin" />
                  Appointment Details
                  <Sparkles className="h-6 w-6 ml-2 animate-spin" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <Scissors className="h-5 w-5 text-amber-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Service</p>
                        <p className="font-semibold">{services.find(s => s.id === selectedService)?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <CalendarIcon className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Date</p>
                        <p className="font-semibold">{selectedDate && format(selectedDate, "PPPP")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <Clock className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Time</p>
                        <p className="font-semibold">{selectedTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <User className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Customer</p>
                        <p className="font-semibold">{customerName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 hover:scale-105 transition-all duration-300"
              >
                Return Home
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/booking'}
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Book Another
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-amber-600 bg-clip-text text-transparent">
              Book Your Appointment
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Select your service and preferred time for the ultimate grooming experience
            </p>
            
            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                      currentStep >= step 
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg" 
                        : "bg-slate-200 text-slate-500"
                    )}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={cn(
                        "w-12 h-1 mx-2 transition-all duration-300",
                        currentStep > step ? "bg-amber-500" : "bg-slate-200"
                      )} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50">
            <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Scissors className="h-6 w-6 mr-2 text-amber-400 animate-pulse" />
                Step {currentStep}: {
                  currentStep === 1 ? 'Choose Service' :
                  currentStep === 2 ? 'Select Date' :
                  currentStep === 3 ? 'Pick Time' : 'Your Details'
                }
                <Sparkles className="h-5 w-5 ml-2 text-amber-400 animate-spin" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <Label className="text-lg font-semibold text-slate-900">Choose Your Service</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={cn(
                            "relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl group",
                            selectedService === service.id
                              ? "border-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg scale-105"
                              : "border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                          )}
                          onClick={() => setSelectedService(service.id)}
                        >
                          {service.popular && (
                            <div className="absolute -top-2 -right-2">
                              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                                POPULAR
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                              {service.emoji}
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                              <div className="flex items-center text-slate-500 text-sm mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {service.duration}
                              </div>
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-slate-900 text-lg mb-2">{service.name}</h4>
                          <p className="text-slate-600 text-sm">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <Label className="text-lg font-semibold text-slate-900">Select Your Preferred Date</Label>
                    <div className="flex justify-center">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-80 justify-start text-left font-normal h-14 text-lg border-2 hover:border-amber-400 hover:bg-amber-50",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-amber-600" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="center">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                )}

                {/* Step 3: Time Selection */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <Label className="text-lg font-semibold text-slate-900">Choose Your Time Slot</Label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className={cn(
                            "h-12 text-sm font-medium transition-all duration-300 hover:scale-105",
                            selectedTime === time
                              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                              : "hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"
                          )}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Customer Information */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <Label className="text-lg font-semibold text-slate-900">Your Information</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-base font-medium flex items-center">
                          <User className="h-4 w-4 mr-2 text-amber-600" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="h-12 border-2 focus:border-amber-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-base font-medium flex items-center">
                          <PhoneIcon className="h-4 w-4 mr-2 text-amber-600" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="h-12 border-2 focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-8 py-3 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button 
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && !selectedService) ||
                        (currentStep === 2 && !selectedDate) ||
                        (currentStep === 3 && !selectedTime)
                      }
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-3 hover:scale-105 transition-all duration-300"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Confirm Booking
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
