// utils/localStorage.js

const USER_STORAGE_KEY = 'users';
const LOGGED_IN_USER_KEY = 'loggedInUserEmail';

// Get all users from local storage
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || [];
};

// Initialize local storage with default users
export const initializeUsers = () => {
    const users = getUsers();
    if (users.length === 0) {
        const defaultUsers = [
            { email: 'user1@example.com', location: 'Location1', faceData: null },
            { email: 'user2@example.com', location: 'Location2', faceData: null },
            { email: 'user3@example.com', location: 'Location3', faceData: null },
        ];
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUsers));
    }
};

// Save a new user to local storage
export const saveUser = (email, location) => {
    const users = getUsers();
    if (!users.some(user => user.email === email)) {
        users.push({ email, location, faceData: null });
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
    }
};

// Update user's face data
export const updateUserFaceData = (email, faceData) => {
    const users = getUsers();
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        users[userIndex].faceData = faceData;
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
    }
};

// Set the logged-in user email in local storage
export const setLoggedInUser = (email) => {
    localStorage.setItem(LOGGED_IN_USER_KEY, email);
};

// Get the logged-in user email from local storage
export const getLoggedInUser = () => {
    return localStorage.getItem(LOGGED_IN_USER_KEY);
};

// Clear the logged-in user email from local storage
export const clearLoggedInUser = () => {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
};
