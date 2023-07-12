import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [apis, setApis] = useState([]);

    useEffect(() => {
        // Assuming you store the token in localStorage
        const token = localStorage.getItem('token');
        axios.get('/api/endpoint', { headers: { 'Authorization': `Bearer ${token}` }})
            .then(response => {
                setApis(response.data.apis);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Your APIs</h1>
            {apis.map(api => (
                <div key={api._id}>
                    <h2>{api.name}</h2>
                    <p>{api.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
