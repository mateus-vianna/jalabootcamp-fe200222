import React from "react";
import { loadUsersThunk } from "../../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ListUsers = () => {
  const dispatch = useDispatch();
  const { error, status, users, message } = useSelector((state) => state.users);
  const [updatedUser, setUpdatedUser] = useState(null);

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, []);

  useEffect(() => {
    if (updatedUser) {
      dispatch(updateUsersThunk(updatedUser._id, updatedUser));
    }
  }, [updatedUser]);

  const handleRemove = async (userId) => {
    await dispatch(removeUsersThunk(userId));
  };

  const handleUpdate = (user) => {
    setUpdatedUser(user);
  };

  return (
    <>
        <div>
            { status === 'loading' && <p>{message}</p> }
            { status === 'failed' && <p>{error}</p> }
            { status === 'succeeded' && (
                <div>
                    { users.length === 0 && <p>No users found</p> }
                </div>
            )}
        </div>
        <div className='ml-5 mt-5'>
            <h1>Registered Users</h1>
            <div className='flex flex-column mt-5 overflow-y container-500'>
                {users?.map((user) => {
                    return (
                        <div key={user._id}>
                            <p>{user._id}</p>
                            <p>{user.name}</p>
                            <button onClick={() => handleRemove(user._id)}>Delete</button>
                            <button onClick={() => handleUpdate(user)}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
    )
};

export default ListUsers;
