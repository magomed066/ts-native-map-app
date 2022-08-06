import LMap from 'leaflet'

class Map {
	selector: string
	map: LMap.Map

	constructor(selector: string, options: LMap.MapOptions) {
		this.selector = selector
		this.map = LMap.map(this.selector, options)
	}

	init() {
		LMap.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap',
		}).addTo(this.map)
	}

	addMarker(coords: LMap.LatLngExpression) {
		LMap.marker(coords).addTo(this.map)
	}

	addCircle(coords: LMap.LatLngExpression, option: LMap.CircleMarkerOptions) {
		LMap.circle(coords, option).addTo(this.map)
	}

	addPolygon(
		coords: [
			LMap.LatLngExpression,
			LMap.LatLngExpression,
			LMap.LatLngExpression,
		],
	) {
		LMap.polygon(coords).addTo(this.map)
	}
}

export default Map
