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

const authorize = function (target: any, property: string, descriptor: PropertyDescriptor) {
    const wrapper = descriptor.value

    descriptor.value = function () {
        if (!user.isAuthenticated()) {
            throw Error('User not authenticated')
        }





        return wrapper.apply(this, arguments)
    }
}

class ContactRepository {
    private contacts: IContact[] = [];

    @authorize
    getContactById (id: number): IContact {
        if (!user.isInRole('sysAdmin'))
            throw Error('User is not authorized to execute a get contacts')
        const contact = this.contacts.find(contact => contact.id === id)
        return contact
    }


    @authorize
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