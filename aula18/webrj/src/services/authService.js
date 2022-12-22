const url = 'http://localhost:8080/api/auth'


const login = async (body) => {
    try {
        const response = await fetch(url + '/login',{
            method: 'post', 
            headers:{ 
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body)});
        return await response.json();
    } catch (error) {
        console.log('Error on add new dog fetch', error)
    }
}

const signup = async (body) => {
    try {
        const response = await fetch(url + '/signup',{
            method: 'post', 
            headers:{ 
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body)});
        return await response.json();
    } catch (error) {
        console.log('Error on add new dog fetch', error)
    }
}


export {login, signup}