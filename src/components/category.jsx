import React from 'react'
import { Box,Heading,Image } from '@chakra-ui/react'
import space from '../data/space.jpg'
import sports from '../data/sports.jpg'
import history from '../data/history.jpg'
let data=[
    {
        alt:'Space',
        image:space
    },
    {
        alt:'History',
        image:history
    },{
        alt:'Sports',
        image:sports
    }
]

export default function Category() {
  return (
    <div>
      <Box
           display={'flex'}
           alignItems={'flex-start'}
           gap={'10px'}
           >
          {
            data.map((el,ind)=>{
                return <Box key={el.alt} w={'91px'} h={'100px'} borderRadius={'10px'} bg={'#fff'} >
              <Heading
              color= '#444'
              textAlign= 'left'
              fontFamily= 'Poppins'
              fontSize= '15px'
              fontStyle= 'normal'
              fontWeight= '500'
              lineHeight= 'normal'
              m={'8px 33px 0 10px'}
              >{el.alt}</Heading>
              <Image src={el.image} m={'11px 21px 10px 22px'} />
            </Box>
               
            })
          }
           

          </Box>
    </div>
  )
}
