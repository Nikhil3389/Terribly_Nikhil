import { useState } from "react";


function Profile()
{
    // const [login,setLogin] =useState(2)
    const login = 2
    return(
        <div>
            {
                 login==1 ?
            <h1>Welcome to user 1</h1>
            : login ==2?
            <h1>Welcome to user 2</h1>
            :<h1>wecome to guest</h1>

            }
           
        </div>
    )
}
export default Profile