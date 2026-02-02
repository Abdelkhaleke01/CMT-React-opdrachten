// localStorage utility functions

export const getUserProfile = () => {
  try {
    const profile = localStorage.getItem('userProfile');
    return profile ? JSON.parse(profile) : null;
  } catch (error) {
    console.error('Error loading user profile:', error);
    return null;
  }
};

export const setUserProfile = (profile) => {
  try {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
};

export const getAppointments = () => {
  try {
    const appointments = localStorage.getItem('appointments');
    return appointments ? JSON.parse(appointments) : [];
  } catch (error) {
    console.error('Error loading appointments:', error);
    return [];
  }
};

export const setAppointments = (appointments) => {
  try {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  } catch (error) {
    console.error('Error saving appointments:', error);
  }
};