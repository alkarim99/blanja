import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    React.useEffect(() => {
        if(!localStorage.getItem("auth")){
            navigate("/login")
        }
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Profile
