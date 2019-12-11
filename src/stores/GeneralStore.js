import { observable, action } from  'mobx'

export class GeneralStore {
    @observable firstName = ''
    @observable lastName = ''
    @observable country = ''
    @observable newOwner = ''
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}
