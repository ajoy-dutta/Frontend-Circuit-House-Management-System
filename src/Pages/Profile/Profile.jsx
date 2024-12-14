import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../BaseURL"

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('accessToken')
    console.log(token)

    useEffect (() =>{
        if(token)
        {
            axios.get(baseurl+"/user",{
                headers: {
                    Authorization: `Bearer ${token}`,
                    },
            }).then((response)=>{
                setUser(response.data);
            })
            .catch((error)=>{
                setError("Failed to fetch user data");
                console.error(error);
            })
            .finally(() => {
                setLoading(false);  // Set loading to false once the request is completed
            });

        }

        else{
            setError("No token found. Please log in.");
            setLoading(false);
        }

    },[token]);

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }


    return (
    <div className="profile-container">
        <h1>Welcome, {user.username}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
};

export default Profile;