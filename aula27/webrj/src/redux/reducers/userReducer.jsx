import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createUser, {
  deleteUSer,
  editUser,
  getUserById,
  getUsers,
} from "../../services/userService";

export const userSlice = createSlice({
  name: "user",
  initialState: { users: [], status: "idle", error: null },
  reducers: {
    add: (state, users) => {
      console.log("Users inside action", users);
      state.users = state.users.concat(users.payload);
    },
    remove: (state, user) => {
        state.users = state.users.filter((u) => u._id !== user.payload);
    },
  },
    extraReducers: (builder) => {
      //load users
    builder.addCase(loadUsersThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loadUsersThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    });
    builder.addCase(loadUsersThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action;
    });
        //create users
    builder.addCase(createUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
    });
    builder.addCase(createUserThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action;
    });
        //delete users
    builder.addCase(deleteUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = state.users.filter((u) => u._id !== action.payload);
    });
    builder.addCase(deleteUserThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action;
    });
        //edit users
    builder.addCase(editUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editUserThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    });
    builder.addCase(editUserThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action;
    });
  },
});

// {
// Multiple possible status enum values
// status: 'idle' | 'loading' | 'succeeded' | 'failed',
// error: string | null
// type : pending | fulfilled | rejected
// }

export const loadUsersThunk = createAsyncThunk("users/load", async () => {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const loadUsersByIdThunk = createAsyncThunk("users/leadById", async (id) => {
    try {
        const user = await getUserById(id);
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
})

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user) => {
    try {
      await createUser(user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const deleteUserThunk = createAsyncThunk("users/delete", async (id) => {
  try {
      await deleteUSer(id);
      return id;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const editUserThunk = createAsyncThunk("users/edit", async (user) => {
  try {
    const id = user.id;
    const edit = { name: user.name, email: user.email, type: user.type };
    await editUser(id, edit);
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
