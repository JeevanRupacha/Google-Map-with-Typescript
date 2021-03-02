import faker, { address } from 'faker'

export class Company
{
    companyName: string

    location: {
        lat: number;
        lng: number;
    }

    constructor()
    {
        this.companyName = faker.company.companyName()

        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string
    {
        return `<h1> ${this.companyName} </h1>`
    }
 

}