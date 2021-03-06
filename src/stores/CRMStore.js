import { observable, action, computed } from 'mobx';
import axios from 'axios';
import { GeneralStore } from './GeneralStore';

export class CRMStore {
    @observable clients = []
    @observable popupOpen = false
    @observable openClient = null

    @computed get newClients() {
        let date = new Date()
        let month = date.getMonth()
        let newClients = {
            month: date.toLocaleString('default', { month: 'long' }),
            numClients: this.clients.filter(c => new Date(c.firstContact).getMonth() === month).length
        }
        return newClients
    }

    @computed get emailsSent() {
        let emailsSent = this.clients.filter(c => c.emailType !== null).length
        return emailsSent
    }

    @computed get outstandingClients() {
        let outstandingClients = this.clients.filter(c => c.sold === 0).length
        return outstandingClients
    }

    @computed get countries() {
        let countries = [...new Set(this.clients.map(c => c.country))]
        return countries
    }

    @computed get salesByCountry() {
        let salesByCountry = []
        for (let country of this.countries) {
            let clients = this.soldClients.filter(client => client.country === country).length
            salesByCountry.push({ country: country, numClients: clients })
        }
        return salesByCountry
    }

    @computed get hottestCountry() {
        let highest = Math.max(parseInt(this.salesByCountry.map(s => s.numClients)))
        let hottestCountry = this.salesByCountry.find(c => parseInt(c.numClients) === highest)
        return hottestCountry
    }

    @computed get owners() {
        let owners = [...new Set(this.clients.map(c => c.owner))]
        return owners
    }

    @computed get soldClients() {
        let clients = this.clients.filter(c => c.sold === 1)
        return clients
    }

    @computed get soldClientsByOwner() {
        let clientsByOwner = {}
        for (let owner of this.owners) {
            let clients = this.soldClients.filter(client => client.owner === owner).length
            clientsByOwner[clients] = owner
        }
        return clientsByOwner
    }

    @computed get topEmployees() {
        function compareNumbers(a, b) {
            return b - a;
        }
        let sorted = Object.keys(this.soldClientsByOwner).sort(compareNumbers)

        let topEmployees = [
            { name: this.soldClientsByOwner[sorted[0]], numClients: sorted[0] },
            { name: this.soldClientsByOwner[sorted[1]], numClients: sorted[1] },
            { name: this.soldClientsByOwner[sorted[2]], numClients: sorted[2] }
        ]
        return topEmployees
    }

    @action getClients = async () => {
        let response = await axios.get('http://localhost:4000/clients')
        response.data[0] ? this.clients = [...response.data[0]] : console.log('error')
    }

    @action addClient = async (newClient) => {
        let client = { ...newClient }
        let attempt = await axios.post('http://localhost:4000/client', client)
        console.log(attempt)
        this.getClients()
    }

    @action updateClient = async (updateInfo) => {
        let attempt = await axios.put('http://localhost:4000/client', updateInfo)
        console.log(attempt)
        this.getClients()
    }

    @action openPopup = (client) => {
        if (this.popupOpen === false) {
            this.popupOpen = true
            this.openClient = client
        }
    }

    @action closePopup = () => {
        this.popupOpen = false
        this.openClient = null
    }

}