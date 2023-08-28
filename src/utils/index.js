export const getIpData = (ip) => {
    const API = `http://api.ipstack.com/${ip}?access_key=8ed95baff2ad28f530e33e55783da88d`;
    return fetch(API);
}