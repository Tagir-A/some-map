import React from "react"
import { Map, TileLayer, Marker } from 'react-leaflet'

export default function MyMap(props) {
	const tiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	const attr = 'Map tiles and Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	const mapCenter = [0, 0]
	const zoomLevel = 5
	if (props) {
	return (
		<div class="mymap">
			<Map
				center={mapCenter}
        zoom={zoomLevel}
      >
				<TileLayer
					attribution={attr}
          url={tiles}
         />
				{
					
					props.data.map(item => {
						return (
									<Marker key={item.id} position={item.coord.reverse()}>
									</Marker>
								)
					})
					
				}
      </Map>
		</div>
	)
} else return (
	<div class="mymap"></div>
)
}