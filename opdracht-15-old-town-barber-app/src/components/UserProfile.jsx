import { useState, useEffect } from 'react';
import { getUserProfile, setUserProfile } from '../utils/localStorage';
import { toast } from 'react-toastify';

const UserProfile = ({ onProfileSaved }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const existingProfile = getUserProfile();
    if (existingProfile) {
      setProfile(existingProfile);
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!profile.name.trim()) newErrors.name = 'Naam is verplicht';
    if (!profile.email.trim()) newErrors.email = 'Email is verplicht';
    else if (!/\S+@\S+\.\S+/.test(profile.email)) newErrors.email = 'Ongeldige email';
    if (!profile.phone.trim()) newErrors.phone = 'Telefoon is verplicht';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setUserProfile(profile);
      toast.success('Profiel opgeslagen!');
      if (onProfileSaved) onProfileSaved();
    } else {
      toast.error('Corrigeer de fouten');
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Jouw Profiel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Naam</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefoon</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Opslaan
        </button>
      </form>
    </div>
  );
};

export default UserProfile;