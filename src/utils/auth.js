import { jwtDecode } from 'jwt-decode'; // ✅ correct way


export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};
