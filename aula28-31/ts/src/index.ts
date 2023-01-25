interface IContact {
    id: number,
    name: string
    phone: string
    role: string
    auth: boolean
}

const contact: IContact = {
    id: 1,
    name: 'Name',
    phone: '12321312321',
    role: 'DogOwner',
    auth: true
}

const user = {
    id: 1234,
    roles: ["sysAdmin"],
    isAuthenticated (): boolean {
        return true
    },
    isInRole (role: string): boolean {
        return this.roles.contains(role)
    }
}


const authorize = (role: string) => function (target: any, property: string, descriptor: PropertyDescriptor) {
    const wrapper = descriptor.value

    descriptor.value = function () {
        if (!user.isAuthenticated()) {
            throw Error('User not authenticated')
        }

        if (!user.isInRole(role))
            throw Error('User is not authorized to execute a get contacts')

        try {
            return wrapper.apply(this, arguments)
        }
        catch (e) {
            throw Error(e)
        }

    }
}


function freeze (constructor: Function) {
    Object.freeze(constructor)
    Object.freeze(constructor.prototype)
}

function singleton<T extends { new(...args: any[]): {} }> (constructor: T) {
    return class Singleton extends constructor {
        static _instance = null
        constructor (...args) {
            super(...args)
            if (Singleton._instance) {
                throw Error('Duplicate instance')
            }
            Singleton._instance = this
        }
    }
}


@freeze
@singleton
class ContactRepository {
    constructor () { }

    private contacts: IContact[] = [];

    @authorize('sysAdmin')
    getContactById (id: number): IContact {
        const contact = this.contacts.find(contact => contact.id === id)
        return contact
    }

    @authorize('dogOwner')
    createNewContact (contact: IContact): void {
        const exists = this.getContactById(contact.id)

        if (exists) {
            Object.assign(exists, contact)
        }
        else {
            this.contacts.push(contact)
        }
    }
}
