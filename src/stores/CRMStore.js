import { observable, action, computed } from 'mobx'
import data from '../data.json'

export class CRMStore {
    @observable clients = []

    @computed get owners() {
        let owners = [...new Set(this.clients.map(c => c.owner))]
        return owners
    }

    @action getClients = () => {
        data.forEach(c => this.clients.push({
            _id: c._id,
            firstName: c.name.split(' ')[0],
            lastName: c.name.split(' ')[1],
            email: c.email,
            firstContact: c.firstContact,
            emailType: c.emailType,
            sold: c.sold,
            owner: c.owner,
            country: c.country
        }))
    }

    @action addClient = (client) => {
        this.clients.push(client)
        console.log(`added ${client.firdtName} to clients`)
    }

    @action updateClient = (name, field, newValue) => {
        let client = this.clients.find(c => c.name === name)
        client[field] = newValue
        console.log(`updated ${name} to ${field}: ${newValue}`)
    }
}