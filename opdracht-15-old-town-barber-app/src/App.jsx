import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserProfile, getAppointments } from './utils/localStorage';
import UserProfile from './components/UserProfile';
import ShopInfo from './components/ShopInfo';
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';
import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const profile = getUserProfile();
    setUserProfile(profile);
  }, []);

  useEffect(() => {
    const checkReminders = () => {
      const appointments = getAppointments();
      const now = new Date();
      appointments.forEach(app => {
        const appTime = new Date(`${app.date}T${app.time}`);
        const diff = (appTime - now) / (1000 * 60); // minutes
        if (diff > 0 && diff <= 15 && !app.reminded) {
          toast.info(`Herinnering: Je afspraak voor ${app.service} is over ${Math.floor(diff)} minuten!`);
          // Mark as reminded, but since localStorage, perhaps add a flag
        }
      });
    };
    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleProfileSaved = () => {
    const profile = getUserProfile();
    setUserProfile(profile);
    setShowProfile(false);
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-8">Welkom bij Old Town Barber</h1>
          <UserProfile onProfileSaved={handleProfileSaved} />
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Old Town Barber</h1>
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="bg-blue-700 px-4 py-2 rounded"
        >
          Profiel
        </button>
      </header>
      <div className="container mx-auto p-4">
        {showProfile && (
          <div className="mb-4">
            <UserProfile onProfileSaved={handleProfileSaved} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShopInfo />
          <BookingForm />
          <BookingsList />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
