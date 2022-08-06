import faker from 'faker/dist/faker.js'

class User {
	name: string

	location: {
		lat: number
		lon: number
	}

	constructor() {
		this.name = faker.name.firstName()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lon: parseFloat(faker.address.longitude()),
		}
	}
}

export default User
