import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createLocationsBySystemId } from '../api/location';
import { Location } from '../models/location.model';
import SearchPage from './map/searchPage'
import locationStore from '../api/location'
import userStore from '../api/user'
import systemStore from '../api/system'

<<<<<<< HEAD
// const CreateLocation=()=>
// {
//     const [newLocation,setnewLocation]=useState<Location>();
//     const addLocation=(e:React.ChangeEvent<HTMLInputElement>)=>
//     {
//         setnewLocation(
//             {
//                 ...newLocation,
//                 [e.target.name]:e.target.value
//             }
//         )
//     }
//     const handleSubmit=async() => {
//          const resp = createLocationsBySystemId(newLocation)
//     }
//     return  (
//             <div>
//                 <h1>Add Location</h1>
//                 <Stack spacing={3}>
//                     <Input  onChange={addLocation} value={newLocation.manager_id} name="manager_id" placeholder='manager_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Input onChange={addLocation} value={newLocation.system_id} name="system_id" placeholder='system_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Input onChange={(e: { target: { value: string; }; }) => newLocation.location.lat= e.target.value}  name="lat" placeholder='lat' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Input  onChange={(e: { target: { value: string; }; }) => newLocation.location.lng= e.target.value}  name="lng" placeholder='lng' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Input onChange={addLocation}value={newLocation.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Input onChange={addLocation}value={newLocation.name} name="name" placeholder='name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Input onChange={addLocation}value={newLocation.notes} name="notes" placeholder='notes' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <InputGroup>
//                         <InputLeftElement
//                         pointerEvents='none'
//                         children={<PhoneIcon color='gray.300' />}
//                         />
//                         <Input onChange={(e: { target: { value: string; }; }) => newLocation.communication_details.phone= e.target.value} name="phone" type='tel' placeholder='Phone number'></Input>
//                     </InputGroup>
//                     <Input  onChange={(e: { target: { value: string; }; }) => newLocation.communication_details.email= e.target.value}  name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
//                     <Button colorScheme='red' onClick={handleSubmit}>ADD</Button>
//                 </Stack>
//                 </div>
//      )
// }
// export default CreateLocation;

const CreateLocation = () => {

}

export default CreateLocation;
=======
import { observer } from 'mobx-react';
import { getDebugName } from 'mobx';
type LatLngLiteral = google.maps.LatLngLiteral;

const CreateLocation = () => {
    const [newLocation, setnewLocation] = useState<Location>();
    const [system_id, setSystem_id] = useState<String>();
    const [manager_id, setManager_id] = useState<String>();
    const [description, setDescription] = useState<String>();
    const [location, setLocation] = useState<LatLngLiteral>();
    const [name, setName] = useState<String>();
    const [notes, setNotes] = useState<String>();
    const [communication, setCommunication] = useState<String>();
    const addLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        //     setnewLocation(
        //         {
        //             ...newLocation,
        //             [e.target.name]:e.target.value
        //         }
        //     )
    }
    const handleSubmit = async () => {
      
        const newLocation = {
            manager_id: userStore.user._id,
            system_id: systemStore.system._id,
            location: locationStore.location,
            description: description,
            name: name,
            notes: notes,
            communication: communication
        }
locationStore.
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
    )
}
export default observer(CreateLocation);
>>>>>>> ed16cc513e8aef9bb8a464dd559af70fffeddaef
