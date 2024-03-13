import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users= useLoaderData()
   
    return (
        <div>
            <h1 className="text-3xl">Total Users: {users.length}</h1>
            <div  className="text-center">
            {
                users?.map((user)=> <User user={user} key={user._id}></User>)
            }
            </div>
        </div>
    );
};

export default Users;