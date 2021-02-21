import React, { ReactElement, FC } from "react";
import { Marker, TileLayer, MapContainer } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

type Props = {
	lng: number;
	lat: number;
}

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map: FC<Props> = ({ lng, lat }: Props): ReactElement => (
	<MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={[lat, lng]} />
	</MapContainer>
);

export default Map;



