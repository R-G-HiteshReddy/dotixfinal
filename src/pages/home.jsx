import React from 'react'
import { Avatar, Box, Heading, chakra } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Category from '../components/category';
export default function Home() {
  return (
    <div>
      <chakra.div
        w="full"

        h="270px"
        borderWidth="1px"
        borderRadius="30px"
        bg="#FFC102"
      >
        <Box w={'300px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={'30px'}
          ml={'18px'}
          mr={'19px'}
        >
          <Box padding={'5px'} ><ArrowBackIcon w={'22px'} h={'20px'} color={'rgba(255, 255, 255, 0.90)'} /></Box>
          <Heading
            color={'#fff'}
            textAlign='center'
            fontFamily='Poppins'
            fontSize='18px'
            fontStyle='normal'
            fontWeight='600'
            lineHeight='normal'
          >Hello User</Heading>
          <Avatar border={'3px solid white'} w={'38px'} h={'38px'} src='https://bit.ly/broken-link' />
        </Box>
        <Box w={'293px'} h={'143px'} m={'0 22px'} mt={'30px'}
        >
          <Heading
            color='#FFF'
            textAlign='left'
            fontFamily='Poppins'
            fontSize='15px'
            fontStyle='normal'
            fontWeight='600'
            lineHeight='normal'
          >Popular</Heading>

          <Box mt={'20px'}>
            <Category />
          </Box>


        </Box>
      </chakra.div>
      <Box m={'auto'} mt={'20px'} display={'flex'}
          w={'293px'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}>
          <Heading 
          color= '#373737'
          textAlign= 'center'
          fontFamily= 'Poppins'
          fontSize= '15px'
          fontStyle= 'normal'
          fontWeight= '600'
          lineheight= 'normal'
          >Explore</Heading>
          <Heading 
          color= '#373737'
          textAlign= 'center'
          fontFamily= 'Poppins'
          fontSize= '12px'
          fontStyle= 'normal'
          fontWeight= '500'
          lineheight= 'normal'
          >View all</Heading>

        </Box>
        <Box display={'flex'} mt={'10px'} justifyContent={'center'} >
          <Category/>
        </Box>
        <Box display={'flex'} mt={'10px'} justifyContent={'center'} >
          <Category/>
        </Box>
        
        <Box display={'flex'} mt={'10px'} justifyContent={'center'} >
          <Category/>
        </Box>
        
        
    </div>
  )
}

