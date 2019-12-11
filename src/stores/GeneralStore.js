import { observable, action } from  'mobx'

export class GeneralStore {
    @observable firstName = ''
    @observable lastName = ''
    @observable country = ''
    @observable newOwner = ''
    @observable owner = ''
    @observable emailType = ''
    @observable clientInput = ''
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}
