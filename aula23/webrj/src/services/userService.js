const url = 'http://localhost:8080/api/user'
  
  const createUser = async (body) => {
        try {
        const response = await fetch(url,{
            method: 'post', 
            headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body)});
        return await response.json();
    } catch (error) {
        console.log('Error on creating new person from admin', error)
    }
}

export default createUser;