const url = 'http://localhost:8080/api/dogs'


const addNewDog = async (body) => {
    try {
        const response = await fetch(url,{
            method: 'post', 
            headers:{ 
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body)});
        return await response.json();
    } catch (error) {
        console.log('Error on add new dog fetch', error)
    }
}


const getAllDogs = async () => {
    try {
        return fetch(url);
    } catch (error) {
        console.log('Error on get all dogs fetch', error)
    }
}

export {addNewDog, getAllDogs}