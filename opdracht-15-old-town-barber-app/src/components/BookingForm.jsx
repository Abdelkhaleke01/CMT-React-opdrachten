import { useState, useEffect } from 'react';
import { getUserProfile, getAppointments, setAppointments } from '../utils/localStorage';
import { toast } from 'react-toastify';

const BookingForm = () => {
  const [form, setForm] = useState({
    service: '',
    date: '',
    time: ''
  });
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const profile = getUserProfile();
    setUserProfile(profile);
  }, []);

  const services = [
    { name: 'Haar knippen', price: 25 },
    { name: 'Baard trimmen', price: 15 },
    { name: 'Haar + Baard', price: 35 },
    { name: 'Wassen & Stylen', price: 20 }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.service || !form.date || !form.time) {
      toast.error('Vul alle velden in');
      return;
    }
    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      toast.error('Kies een datum in de toekomst');
      return;
    }
    const appointments = getAppointments();
    const newAppointment = {
      id: Date.now(),
      ...form,
      user: userProfile,
      price: services.find(s => s.name === form.service).price
    };
    setAppointments([...appointments, newAppointment]);
    toast.success('Afspraak geboekt!');
    setForm({ service: '', date: '', time: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Nieuwe Afspraak</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Kies een service</option>
            {services.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name} - €{service.price}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Datum</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tijd</label>
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Kies een tijd</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Boeken
        </button>
      </form>
    </div>
  );
};

export default BookingForm;