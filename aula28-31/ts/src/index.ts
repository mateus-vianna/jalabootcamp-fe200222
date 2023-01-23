type Owner = string
enum EStatus {
    adopted = 'Adopted',
    selled = 'Selled',
    reserverd = 'Reserved'
}
type Status = 'reserved' | 'adopted' | 'selled'
interface IAddress {
    street: string
    number: number

}

// interface DogDTO {
//     dogId: number
//     dogName: string
//     dogBirth: Date
//     dogAge: number
//     dogOwner: Owner
//     dogStatus: Status
//     dogPreviewsStatus?: Status
// }

interface DogDTO {
    id: number
    name: string
    birth: Birth
    age: number
    owner: Owner
    status: Status
    previewsStatus?: Status
}

interface DogEvent {
    dogId: number
    dogAge: string
    dogBirth: Birth
    dogName: number
    dogOwner: Owner
    dogStatus: Status
    dogPreviewsStatus?: Status
}



// let marco: DogDTO = {
//     dogId: 12,
//     dogAge: 12,
//     dogBirth: new Date('2000-01-01'),
//     dogName: 'Pupu',
//     dogOwner: 'Rafael',
//     dogStatus: "selled",
//     dogPreviewsStatus: null
// }


// const otherDog = newClone2<IDog, DogDTO>(pupu)

interface Bla<T> {
    id: string
    _update: Date
    _create: Date
    entity: T
}

let birth: string | Date | number
type Birth = string | Date | number

const getBirtDate = (dog: IDog) => {
    if (typeof dog.birth === 'number')
        return new Date(dog.birth)
    else if (typeof dog.birth === 'string')
        return new Date(dog.birth)
    else
        return dog.birth
}

interface IContact {
    contactId: number,
    contactName: string
    contactAddress?: IAddress
    phone: string
}


const contact: IContact = {
    contactId: 1,
    contactName: 'Name',
    phone: '12321312321'
}



type DogContact = IContact & IDog

const shiro: DogContact = {
    id: 1,
    contactId: 1,
    age: 12,
    name: 'Oaisdai',
    contactName: 'Osdois',
    phone: '12312321-231311',
    birth: new Date('2002-01-02'),
    owner: 'Pedro',
    status: "adopted",
    address: null,
    contactAddress: null
}

interface IDog {
    id: number
    name: string
    birth: Date
    age: number
    owner: Owner
    address?: IAddress
    status: Status
}

type DodField = keyof IDog

const field: DodField = "name"

let pupu: IDog = {
    id: 12,
    age: 12,
    birth: new Date('2000-01-01'),
    name: 'Pupu',
    owner: 'Rafael',
    status: "selled"
}

const getValue = <T> (source: T, prop: keyof T) => {
    return source[prop]
}


// console.log(getValue(pupu, field))
// console.log(getValue(contact, 'contactName'))
// console.log(getValue({ a: 12, b: 'dasidajsi', c: true }, 'b'))


const getAllValues = <T> (source: T, func: Function) => {
    for (const [key, value] of Object.entries(source)) {
        console.log(`Key: ${key} and Value:  ${value}`)
    }
}


// let x: any = { name: ' Jackie Chan' }
// x = 32
// x = true
// x = () => console.log('weather')

let x: Record<string, IContact | string | number | boolean | Function> = { name: 'Jackie Chan', id: 12, status: true }
let y: Record<number, string | number | boolean | undefined>
y[1] = "hshfisdufi"
y[2] = 12312
y[34] = true

let z: Awaited<IDog> = new Promise<IDog>(pupu)
