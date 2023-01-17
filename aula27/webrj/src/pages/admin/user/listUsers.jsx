import React from "react";
import { deleteUserThunk, loadUsersThunk, remove } from "../../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserCard from "../../../components/UserCard";

const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, []);

  useEffect(() => {
    console.log("Users in Users page", users);
  }, [users]);
  
    const deleteUser = (id) => {
        dispatch(deleteUserThunk(id));
        dispatch(remove(id));
    }

  return (
    <div className="ml-5 mt-5">
      <h1>Registered Users</h1>
      <div className="flex flex-column mt-5 overflow-y container-500">
        {users?.map((user, index) => {
          return (
            <UserCard
              index={index}
              user={user}
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to delete te user ${user.name}?`
                  )
                )
                  deleteUser(user._id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListUsers;
