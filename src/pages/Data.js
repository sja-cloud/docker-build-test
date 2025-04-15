import {React, useState, useEffect} from 'react'
import axios from 'axios'

function Data (){

    const [users, setUsers] = useState ([])
    const [loading, setLoading] = useState(false)

    async function getRandomUser(){
        try{
            const data = await axios.get("https://random-data-api.com/api/v2/users?size=100")
            console.log(data?.data)
             setUsers(data);
             console.log(users.data)
            
        }catch(err){
            console.log("error", err)
        }
    }

    

    useEffect(() => {
      getRandomUser()
      
    }, [3000])

    if(loading) return <p>Loading...</p>;
    if(!users) return <p>Nothing to show</p>;
   
    return(
        <div style={{display:'grid'}}>
            
            {users?.data?.map(({ email, gender, first_name, last_name, avatar, username})=> (
              <div>
                <img src={avatar} width={150} height={150} />
                <h6>Username: {username.toUpperCase(0,1)}</h6>
                <p>{first_name.slice(0,1).toUpperCase(0,1)} {last_name}</p>
                <div>
                   {gender != "Male" && "Female"? "not sure": "no comment"}
                   
                </div>
            </div>
            ))}
        </div>
    )
}

export default Data;