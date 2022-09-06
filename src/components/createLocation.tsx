// import react from 'react';
// import React, { useState } from 'react';
// import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons';
// import { createLocationsBySystemId } from '../api/location';
// import { Location } from '../models/location.model';

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