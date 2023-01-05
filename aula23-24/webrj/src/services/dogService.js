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
    }
}


const getAllDogs = async () => {
    return fetch(url);
}

export {addNewDog, getAllDogs}