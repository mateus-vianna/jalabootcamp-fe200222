const url = "http://localhost:8080/api/users";

const createUser = async (body) => {
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (error) {
    console.log("Error on creating new person from admin", error);
  }
};

const getUsers = async () => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error getting all users", error);
  }
};

const getUserById = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        return await response.json();
    } catch (error) {
        console.log("Error on getting the user", error);
    }
}

const deleteUSer = async (id) => {
  
    const response = await fetch(`${url}/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.ok;
};

const editUser = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "put",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (error) {
    console.log("Error on updating the user", error);
  }
};

export default createUser;
export { getUsers, deleteUSer, editUser, getUserById };
