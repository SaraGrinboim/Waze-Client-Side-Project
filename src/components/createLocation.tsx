// import { Button, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { createLocationsBySystemId } from '../api/location';
// import { Location } from '../models/location.model';
// import SearchPage from './map/searchPage'
// import locationStore from '../api/location'
// import userStore from '../api/user'
// import systemStore from '../api/system'

// import { observer } from 'mobx-react';
// import { getDebugName } from 'mobx';
// type LatLngLiteral = google.maps.LatLngLiteral;

// const CreateLocation = () => {
//     const [newLocation, setnewLocation] = useState<Location>();
//     const [system_id, setSystem_id] = useState<string>();
//     const [manager_id, setManager_id] = useState<string>();
//     const [description, setDescription] = useState<string>();
//     const [location, setLocation] = useState<LatLngLiteral>();
//     const [name, setName] = useState<string>();
//     const [notes, setNotes] = useState<string>();
//     const [communication, setCommunication] = useState<string>();
//     const addLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
//         // setnewLocation(
//         //     {
//         //         ...newLocation,
//         //         [e.target.name]:e.target.value
//         //     }
//         // )
//     }

//     useEffect(() => {
//         //כל הסטורים שלנו ריקים
//         //מחזיר NULL
//         console.log(userStore.user);
//         //מחזיר NULL
//         console.log(systemStore.system);
//         //מחזיר UNDEFINED
//         console.log(locationStore.location);
//     }, [])
//     const handleSubmit = async () => {
//         const newLocation: Location = {
//             manager_id: userStore.user._id,
//             system_id: systemStore.system._id,
//             location: locationStore.location,
//             description: description,
//             name: name,
//             notes: notes,
//             communication: communication,
//         }
//         // locationStore.

//         locationStore.createLocationsBySystemId(newLocation);

//         //  const resp = createLocationsBySystemId(newLocation)
//     }

//     return (

//         <div>
//             <h1>Add Location</h1>
//             <div className="conteiner">
//                 <div className="section">
//                     <TextField id="outlined-basic" label="name" variant="outlined" required value={name}
//                         onChange={(e) => setName(e.target.value)} />
//                     <br />
//                     <TextField id="outlined-basic" label="notes" variant="outlined" required value={notes}
//                         onChange={(e) => setNotes(e.target.value)} />
//                     <br />
//                     <TextField id="outlined-basic" label="description" variant="outlined" required value={description}
//                         onChange={(e) => setDescription(e.target.value)} />
//                     <br />
//                     <TextField id="outlined-basic" label="communication" variant="outlined" required value={communication}
//                         onChange={(e) => setCommunication(e.target.value)} />
//                     <br />
//                     <Button variant="contained" onClick={handleSubmit}>save</Button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default observer(CreateLocation);


import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createLocationsBySystemId } from '../api/location';
import { Location } from '../models/location.model';
import SearchPage from './map/searchPage'
import locationStore from '../api/location'
import userStore from '../api/user'
import systemStore from '../api/system'

import { observer } from 'mobx-react';
import { getDebugName } from 'mobx';
import { useNavigate, useParams } from 'react-router-dom';
import Auto from './map/autocomplete';
type LatLngLiteral = google.maps.LatLngLiteral;

const CreateLocation = () => {
    const navigate = useNavigate();
    const { systemUrl } = useParams();
    const [newLocation, setnewLocation] = useState<Location>();
    const [system_id, setSystem_id] = useState<string>();
    const [manager_id, setManager_id] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [location, setLocation] = useState<LatLngLiteral>();
    const [name, setName] = useState<string>();
    const [notes, setNotes] = useState<string>();
    const [communication, setCommunication] = useState<string>();
    const addLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setnewLocation(
        //     {
        //         ...newLocation,
        //         [e.target.name]:e.target.value
        //     }
        // )
    }

    useEffect(() => {
        //כל הסטורים שלנו ריקים
        //מחזיר NULL
        console.log(userStore.user);
        //מחזיר NULL
        console.log(systemStore.system);
        //מחזיר UNDEFINED
        console.log(locationStore.location);
    }, [])
    const handleSubmit = async () => {
        try {
            const newLocation: Location = {
                manager_id: userStore.user._id,
                system_id: systemStore.system._id,
                location: locationStore.location,
                description: description,
                name: name,
                notes: notes,
                communication: communication,
            }
            await locationStore.createLocation(newLocation);
            alert('the marker was added to the store ');
            navigate(`/MySystem/${systemUrl}`);

        } catch {
            console.log("failed in create marker");
        }
    }

    return (
        <form className='auth-inner' onSubmit={handleSubmit}>
            <h3>create new marker</h3>
            <div className="mb-3">
                <label>name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>description</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>notes</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter notes"
                    onChange={(e) => setNotes(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setCommunication(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>phone</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => setCommunication(e.target.value)}
                />
            </div>
            {/* <div className="mb-3">
                <label>location</label> 
                <Auto
                    setOffice={(position: any) => {
                        setOffice(position);
                        mapRef.current?.panTo(position);
                    }} />   
            </div> */}
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
};
export default observer(CreateLocation);