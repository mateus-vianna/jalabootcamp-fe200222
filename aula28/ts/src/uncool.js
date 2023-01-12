const a = () => {
    return 10
}

/**
 * 
 * @param {string} contactId 
 * @returns 
 */
async function getContact(contactId) {
    const res = await $.ajax({ url: 'http//www.google.com', dataType: "json" })
    return {
        id: +res.id,
        name: res.name,
        birthDate: new Date(res.birthDate)
    }
}


getContact('1').then(contact => {
    contact.id = 1
    contact.birthDate = new Date('2022-01-01')
})
