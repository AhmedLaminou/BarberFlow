
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, Scissors, CheckCircle } from "lucide-react";
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

  const services = [
    { id: 'haircut', name: "Classic Haircut", price: "$35", duration: "45 min" },
    { id: 'beard', name: "Beard Trim", price: "$25", duration: "30 min" },
    { id: 'combo', name: "Haircut + Beard Combo", price: "$55", duration: "60 min" },
    { id: 'shave', name: "Hot Towel Shave", price: "$40", duration: "45 min" },
    { id: 'wash', name: "Hair Wash & Style", price: "$20", duration: "30 min" },
    { id: 'mustache', name: "Mustache Trim", price: "$15", duration: "15 min" }
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

    // Store in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('barbershop_bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('barbershop_bookings', JSON.stringify(existingBookings));

    setIsSubmitted(true);
    toast({
      title: "Booking Confirmed!",
      description: "Your appointment has been successfully booked.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <Navbar />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-500 rounded-full">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Your appointment has been successfully booked. We'll see you soon!
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>
              <div className="space-y-2 text-left">
                <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                <p><strong>Date:</strong> {selectedDate && format(selectedDate, "PPPP")}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Name:</strong> {customerName}</p>
                <p><strong>Phone:</strong> {customerPhone}</p>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/'}
              className="bg-slate-900 hover:bg-slate-800"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
            <p className="text-xl text-slate-600">
              Select your service and preferred time slot
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Scissors className="h-6 w-6 mr-2 text-amber-600" />
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Select Service</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={cn(
                          "p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md",
                          selectedService === service.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-slate-200 hover:border-amber-300"
                        )}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-slate-900">{service.name}</h4>
                            <p className="text-sm text-slate-600 flex items-center mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {service.duration}
                            </p>
                          </div>
                          <span className="text-lg font-bold text-amber-600">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
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

                {/* Time Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Select Time</Label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={cn(
                          "h-10 text-sm transition-all duration-300",
                          selectedTime === time
                            ? "bg-amber-500 hover:bg-amber-600 text-white"
                            : "hover:bg-amber-50 hover:border-amber-300"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="(555) 123-4567"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-slate-900 hover:bg-slate-800 h-14 text-lg font-semibold"
                >
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
