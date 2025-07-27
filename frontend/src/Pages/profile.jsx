import React, {use, useEffect, useState} from 'react'

import Service from '../utils/http'
import { Avatar, Text } from '@mantine/core';
import { Stack, Button } from '@mantine/core';
import { Center, Box } from '@mantine/core';

const service = new Service();

export default function Profile(){
    const [profileData,setProfileData] = useState(null);


    async function getProfileData(){
        let data=await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }

    useEffect( ()=>{
        getProfileData();
    },[])

    return(
        <Stack
        h={300}
        bg="var(--mantine-color-body)"
        align="center"
        justify="center"
        gap="md"
      >
        
        <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)"> </Box>
    
      
      
        <div>
            <Avatar variant="filled" radius="xl" size="lg" color="red" src="" />
            <Text tt="uppercase"> {profileData?.email}</Text>
            <Text tt="capatilize"> {profileData?.name}</Text>
            <Text ta="center" size="sm" mt="xs" c="dimmed">User ID: {profileData?._id}</Text>
            <Text ta="center" size="sm" c="dimmed"><strong><b>Account Created:</b></strong>{profileData?.createdAt}</Text>
        </div>
        </Center>
        </Stack>

    )
}