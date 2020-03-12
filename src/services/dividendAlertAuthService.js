
export const TOKEN_KEY = "@dividend-alert-token";

// todo move to redux
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null && localStorage.getItem(TOKEN_KEY) !== '';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loginAuth = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logoutAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
};