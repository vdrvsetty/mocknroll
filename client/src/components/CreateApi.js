import React, { useState } from 'react';
import axios from 'axios';

const CreateApi = () => {
    const [name, setName] = useState("");
    const [responseStructure, setResponseStructure] = useState([]);
    const [numRecords, setNumRecords] = useState(1);

    const addField = () => {
        setResponseStructure([...responseStructure, { key: '', type: '' }]);
    };

    const handleKeyChange = (idx, event) => {
        const newResponseStructure = [...responseStructure];
        newResponseStructure[idx].key = event.target.value;
        setResponseStructure(newResponseStructure);
    };

    const handleTypeChange = (idx, event) => {
        const newResponseStructure = [...responseStructure];
        newResponseStructure[idx].type = event.target.value;
        setResponseStructure(newResponseStructure);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Assuming you store the token in localStorage
        const token = localStorage.getItem('token');
        axios.post('/api/apis', { name, responseStructure, numRecords }, { headers: { 'Authorization': `Bearer ${token}` }})
            .then(res => {
                // handle success
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="API name" />
                {responseStructure.map((field, idx) => (
                    <div key={idx}>
                        <input type="text" value={field.key} onChange={e => handleKeyChange(idx, e)} placeholder="Field name" />
                        <select value={field.type} onChange={e => handleTypeChange(idx, e)}>
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            {/* Add options as needed */}
                        </select>
                    </div>
                ))}
                <button type="button" onClick={addField}>Add field</button>
                <input type="number" value={numRecords} onChange={e => setNumRecords(e.target.value)} placeholder="Number of records" />
                <button type="submit">Create API</button>
            </form>
        </div>
    );
};

export default CreateApi;
