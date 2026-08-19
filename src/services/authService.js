import { mockUsers, getUsers, saveUsers } from './mockData';

const AUTH_STORAGE_KEY = 'pos-user';

export const getStoredUser = () => {
  if (typeof window === 'undefined') return null;

  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};

export const loginUser = (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getUsers();
  const matchingUser = users.find((user) => user.email === normalizedEmail);

  if (!matchingUser) {
    return { success: false, message: 'No matching mock account found.' };
  }

  if (password !== '123456') {
    return { success: false, message: 'Use the password 123456 for the demo accounts.' };
  }

  const user = { id: matchingUser.id, name: matchingUser.name, email: matchingUser.email, role: matchingUser.role };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  return { success: true, user };
};

export const registerUser = (formData) => {
  const user = {
    id: Date.now(),
    name: formData.fullName,
    email: formData.email.trim().toLowerCase(),
    role: 'cashier',
  };

  // persist new user to the mock users list and to current session
  try {
    const users = getUsers();
    const next = [...users, user];
    saveUsers(next);
  } catch (e) {
    // ignore
  }

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  return { success: true, user };
};

export const logoutUser = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

const authService = {
  isAuthenticated: () => !!getStoredUser(),
  getUserData: () => getStoredUser(),
  logout: () => logoutUser(),
};

export default authService;
