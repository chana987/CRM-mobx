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
            name: c.name,
            email: c.email,
            firstContact: c.firstContact,
            emailType: c.emailType,
            sold: c.sold,
            owner: c.owner,
            country: c.country
        }))
    }

    @action addClient = (client) => {
        let newClient = { 
            ...client, 
            id: this.clients.length,
            sold: false,
            firstContact: new Date()
        }
        this.clients.push(newClient)
        console.log(`added ${newClient.firstName} ${newClient.lastName} to clients`)
    }

    @action updateClient = (name, field, newValue) => {
        let client = this.clients.find(c => c.name === name)
        client[field] = newValue
        console.log(`updated ${name} to ${field}: ${newValue}`)
    }
}