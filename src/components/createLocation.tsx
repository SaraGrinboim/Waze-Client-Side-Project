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
type LatLngLiteral = google.maps.LatLngLiteral;

const CreateLocation = () => {
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
    useEffect(()=>{
        console.log(userStore.user);
    },[])
    const handleSubmit = async () => {
        const newLocation: Location = {
            manager_id: userStore.user._id,
            system_id: systemStore.system._id,
            location: locationStore.location,
            description: description,
            name: name,
            notes: notes,
            communication: communication
        }
        // locationStore.

        locationStore.createLocationsBySystemId(newLocation);

        //  const resp = createLocationsBySystemId(newLocation)
    }

    return (

        <div>
            <h1>Add Location</h1>
            <div className="conteiner">
                <div className="section">
                    <TextField id="outlined-basic" label="name" variant="outlined" required value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <br />
                    <TextField id="outlined-basic" label="notes" variant="outlined" required value={notes}
                        onChange={(e) => setNotes(e.target.value)} />
                    <br />
                    <TextField id="outlined-basic" label="description" variant="outlined" required value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <TextField id="outlined-basic" label="communication" variant="outlined" required value={communication}
                        onChange={(e) => setCommunication(e.target.value)} />
                    <br />
                    <Button variant="contained" onClick={handleSubmit}>save</Button>
                </div>
            </div>
        </div>
    );
}
export default observer(CreateLocation);
