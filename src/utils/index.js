export const getIpData = (ip) => {
    const API = `http://ip-api.com/json/${ip}`;
    return fetch(API);
}