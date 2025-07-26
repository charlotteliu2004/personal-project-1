// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

export default function MapView() {
    const center = [37.7749, -122.4194]; // San Francisco coordinates

    return (
        <div style={{height: "400px", width: "100%", borderRadius: "12px", overflow: "hidden", marginBottom: "1rem"}}>
            <MapContainer center={center} zoom={3} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="© OpenStreetMap contributors"
                />
                <Marker position={center}>
                    <Popup>
                        Example Project <br/> Near this location.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
