import { useState, useEffect } from 'react';
import { getAppointments } from '../utils/localStorage';

const BookingsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = () => {
      const apps = getAppointments();
      const sorted = apps.sort((a, b) => new Date(a.date) - new Date(b.date));
      setAppointments(sorted);
    };
    loadAppointments();
    // Check every minute for reminders
    const interval = setInterval(() => {
      checkReminders();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const checkReminders = () => {
    const now = new Date();
    appointments.forEach(app => {
      const appTime = new Date(`${app.date}T${app.time}`);
      const diff = (appTime - now) / (1000 * 60); // minutes
      if (diff > 0 && diff <= 15) {
        // toast.info(`Herinnering: Je afspraak is over ${Math.floor(diff)} minuten!`);
        // Since toast is not imported here, perhaps handle in App
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Jouw Afspraken</h2>
      {appointments.length === 0 ? (
        <p>Geen afspraken gevonden.</p>
      ) : (
        <ul className="space-y-2">
          {appointments.map((app) => (
            <li key={app.id} className="border-b pb-2">
              <div className="flex justify-between">
                <span>{app.service}</span>
                <span>€{app.price}</span>
              </div>
              <div className="text-gray-600">
                {app.date} om {app.time}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingsList;