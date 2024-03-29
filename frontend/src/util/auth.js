import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedExpDate = localStorage.getItem("expiration");
  const expDate = new Date(storedExpDate);
  const now = new Date();
  const duration = expDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}
