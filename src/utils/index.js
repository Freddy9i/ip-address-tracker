export const getIpData = (ip) => {
  const API = `https://ipapi.co/${ip}/json/`;
  return fetch(API);
};