import User from './User'
import Company from './Company'
import Map from './Map'

const user = new User()
const company = new Company()
const map = new Map('map', {
	center: [51.505, -0.09],
	zoom: 13,
})

map.init()
map.addMarker([51.508, -0.43])

map.addCircle([51.508, -0.11], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500,
})

console.log(company)
