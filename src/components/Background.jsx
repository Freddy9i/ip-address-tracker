import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

import { useContext } from 'react';
import { Context } from '../ContextProvider';

export default function Background() {
  let isSmallScreen = window.innerWidth < 768
  const { ipData } = useContext(Context)
  
  const ipPosition = [ipData.lat, ipData.lon]
  
  return (
    <>
      <img
        className="overflow-hidden object-cover w-screen h-[15rem] lg:h-[15.4rem]"
        src={isSmallScreen ? '/pattern-bg-mobile.png' : '/pattern-bg-desktop.png'}
        alt="img"
      />
      <MapContainer
        key={ipPosition[0]}
        center={ipPosition}
        zoom={15}
        zoomControl={false}
        style={{ width: "100%", height: "calc(100vh - 15.4rem)", zIndex:0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={ipPosition}>
          <Popup>IP estimated position</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}