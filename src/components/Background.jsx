import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContext } from 'react';
import { Context } from '../ContextProvider';

export default function Background() {
  let isSmallScreen = window.innerWidth < 768
  const { ipData } = useContext(Context)
  
  const ipPosition = [ipData.lat, ipData.lon]
  
  return (
    <>
      <img
        className="overflow-hidden object-cover w-screen h-80 lg:h-[15.4rem]"
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
          <Popup>Your pinpoint title</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}