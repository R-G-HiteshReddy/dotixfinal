import React from 'react'
import { Box,Heading,Image } from '@chakra-ui/react'
import space from '../data/space.jpg'
import sports from '../data/sports.jpg'
import history from '../data/history.jpg'
import { useNavigate } from 'react-router-dom'
let data=[
    {
        alt:'Space',
        image:space,
        id:9
    },
    {
        alt:'History',
        image:history,
        id:23
    },{
        alt:'Sports',
        image:sports,
        id:21
    }
]

export default function Category() {
  let navigate=useNavigate()
  let handelclick=(e,el,ind)=>{
    navigate(`/quiz/${el.id}`)
  }
  return (
    <div>
      <Box
           display={'flex'}
           alignItems={'flex-start'}
           gap={'10px'}
           

           >
          {
            data.map((el,ind)=>{
                return <Box
                onClick={(e)=>{
                  handelclick(e,el,ind)
                }}
                cursor={'pointer'}
                border={'1px solid #FFAD00'}
                key={el.alt} w={'91px'} h={'100px'} borderRadius={'10px'} bg={'#fff'} >
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
