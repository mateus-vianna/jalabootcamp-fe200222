const url = 'http://localhost:8080/api/users'

const createUser = async (body) => {
    try {
        const response = await fetch(url,{
            method: 'post', 
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    } catch (error) {
        console.log('Error on creating new person from admin', error)
    }
}

const getUsers = async () => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('Error getting all users', error)
    }
}

const updateUser = async (id, body) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'put',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    } catch (error) {
        console.log('Error updating user', error)
    }
}

const deleteUser = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return await response.json();
    } catch (error) {
        console.log('Error deleting user', error)
    }
}

export { createUser, getUsers, updateUser, deleteUser }
