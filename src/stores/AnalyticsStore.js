import { observable, action, computed } from 'mobx';
import { CRMStore } from './CRMStore';

export class AnalyticsStore {
    @computed get newClients() {
        let date = new Date()
        let month = date.getMonth()
        let newClients = {
            month: date.toLocaleString('default', { month: 'long' }),
            numClients: CRMStore.clients.filter(c => new Date(c.firstContact).getMonth() === month).length
        }
        return newClients
    }

    @computed get emailsSent() {
        let emailsSent = CRMStore.clients.filter(c => c.emailType !== null).length
        return emailsSent
    }

    @computed get outstandingClients() {
        let outstandingClients = CRMStore.clients.filter(c => c.sold === 0).length
        return outstandingClients
    }

    @computed get countries() {
        let countries = [...new Set(CRMStore.clients.map(c => c.country))]
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
        let owners = [...new Set(CRMStore.clients.map(c => c.owner))]
        return owners
    }

    @computed get soldClients() {
        let clients = CRMStore.clients.filter(c => c.sold === 1)
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

}