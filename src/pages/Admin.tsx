
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Phone, User, CheckCircle, X, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

interface Booking {
  id: string;
  service: {
    name: string;
    price: string;
    duration: string;
  };
  date: Date;
  time: string;
  customerName: string;
  customerPhone: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
}

const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem('barbershop_bookings') || '[]');
    const parsedBookings = storedBookings.map((booking: any) => ({
      ...booking,
      date: new Date(booking.date),
      createdAt: new Date(booking.createdAt)
    }));
    setBookings(parsedBookings.sort((a: Booking, b: Booking) => new Date(a.date).getTime() - new Date(b.date).getTime()));
  };

  const updateBookingStatus = (bookingId: string, newStatus: 'completed' | 'cancelled') => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('barbershop_bookings', JSON.stringify(updatedBookings));
    
    toast({
      title: "Booking Updated",
      description: `Booking has been marked as ${newStatus}.`,
    });
  };

  const deleteBooking = (bookingId: string) => {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem('barbershop_bookings', JSON.stringify(updatedBookings));
    
    toast({
      title: "Booking Deleted",
      description: "Booking has been permanently removed.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingBookings = bookings.filter(booking => 
    booking.status === 'confirmed' && new Date(booking.date) >= new Date()
  );
  
  const pastBookings = bookings.filter(booking => 
    booking.status !== 'confirmed' || new Date(booking.date) < new Date()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Admin Dashboard</h1>
            <p className="text-xl text-slate-600">
              Manage your barbershop appointments and bookings
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{upcomingBookings.length}</div>
                  <div className="text-sm text-slate-600">Upcoming</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {bookings.filter(b => b.status === 'completed').length}
                  </div>
                  <div className="text-sm text-slate-600">Completed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">
                    {bookings.filter(b => b.status === 'cancelled').length}
                  </div>
                  <div className="text-sm text-slate-600">Cancelled</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">{bookings.length}</div>
                  <div className="text-sm text-slate-600">Total</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Bookings */}
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingBookings.length === 0 ? (
                <p className="text-slate-500 text-center py-8">No upcoming appointments</p>
              ) : (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="border border-slate-200 rounded-lg p-4 bg-white">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                            <span className="text-lg font-semibold text-slate-900">
                              {booking.service.name}
                            </span>
                            <span className="text-amber-600 font-semibold">{booking.service.price}</span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              {format(booking.date, "PPPP")}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {booking.time} ({booking.service.duration})
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              {booking.customerName}
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2" />
                              {booking.customerPhone}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => updateBookingStatus(booking.id, 'completed')}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Complete
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            className="border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Past Bookings */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Booking History</CardTitle>
            </CardHeader>
            <CardContent>
              {pastBookings.length === 0 ? (
                <p className="text-slate-500 text-center py-8">No booking history</p>
              ) : (
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div key={booking.id} className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                            <span className="text-lg font-semibold text-slate-900">
                              {booking.service.name}
                            </span>
                            <span className="text-amber-600 font-semibold">{booking.service.price}</span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              {format(booking.date, "PPP")}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {booking.time}
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              {booking.customerName}
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2" />
                              {booking.customerPhone}
                            </div>
                          </div>
                        </div>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => deleteBooking(booking.id)}
                          className="border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
