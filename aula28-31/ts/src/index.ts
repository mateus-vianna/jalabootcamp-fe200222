interface IDog {
    id: number
    name: string
    birth: Date
    age: number
}


const getValue = <T> (source: T, prop: keyof T) => {
    return source[prop]
}

const getAllValues = <T> (source: T, func: Function) => {
    for (const [key, value] of Object.entries(source)) {
        console.log(`Key: ${key} and Value:  ${value}`)
    }
}

interface IContact {
    contactId: number,
    contactName: string
    phone: string
}

const contact: IContact = {
    contactId: 1,
    contactName: 'Name',
    phone: '12321312321'
}


@mult @sum @less
const oper = (sum: string, multiply: string) => {
    return
}

@Injectable
class ContactRepository {

}