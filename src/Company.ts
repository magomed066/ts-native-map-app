import faker from 'faker/dist/faker.js'

class Company {
	name: string
	catchPhrase: string

	location: {
		lat: number
		lon: number
	}

	constructor() {
		this.name = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lon: parseFloat(faker.address.longitude()),
		}
	}
}

export default Company
