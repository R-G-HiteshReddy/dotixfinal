import React, { useEffect, useState } from 'react'
import { chakra, Box, Image, Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { ArrowBackIcon } from '@chakra-ui/icons';
import vector from '../data/vector.png'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

let getData = async (id) => {
    try {
        console.log(id)
        let res = await axios.get(`https://opentdb.com/api.php?amount=20&category=${id}&type=multiple`)
        return res.data.results
    } catch (error) {
        return [];
    }
}

export default function Quiz() {
    let { id } = useParams()
    let [data, setData] = useState([])

    useEffect(() => {
        try {
            getData(id)
                .then((res) => {
                    console.log(res)
                    setData(res)
                })
        } catch (error) {
            return error
        }
    }, [])
    return (
        <chakra.div>
            <chakra.div
                width={'full'}
                h={'228px'}
                borderRadius={'30px'}
                bg={'#FEC100'}
            >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box m={'0 20px'} mt={'37px'} padding={'5px'} ><ArrowBackIcon w={'22px'} h={'20px'} color={'rgba(255, 255, 255, 0.90)'} /></Box>
                    <Image w={'25px'} m={'0 20px'} mt={'37px'} h={'22px'} src={vector} />
                </Box>
                <Box
                    position={'relative'}
                    borderRadius={'20px'}
                    boxShadow={'0px 4px 4px 0px #FBECFF'}
                    bg={'#fff'} m={'81px 28px 0 28px'} w={'281px'} h={'170px'} >
                    <chakra.div

                        display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box gap={'9px'} display={'flex'}>
                            <Heading
                                color='#1F8435'
                                fontFamily='DM Sans'
                                fontSize='14px'
                                fontStyle='normal'
                                fontWeight='700'
                                lineHeight='normal'
                                mt={'11px'}
                                ml={'10px'}
                            >01</Heading>
                            <Box
                                w={'30px'}
                                h={'8px'}
                                borderRadius='15px'
                                bg='#1F8435'
                                mt={'17px'}

                            ></Box>
                        </Box>
                        <Box gap={'9px'} display={'flex'}>
                            <Box
                                w={'30px'}
                                h={'8px'}
                                borderRadius='15px'
                                bg='#D05A04'
                                mt={'17px'}
                            ></Box>
                            <Heading
                                color='#D05A04'
                                fontFamily='DM Sans'
                                fontSize='14px'
                                fontStyle='normal'
                                fontWeight='700'
                                lineHeight='normal'
                                mt={'11px'}
                                mr={'10px'}
                            >20</Heading>
                        </Box>
                    </chakra.div>

                    <Box borderRadius={'50%'} bg={'#fff'} w={'67px'} h={'67px'} left={'50%'}
                        transform='translate(-50%, -85%)'
                        position={'absolute'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >

                        <CircularProgress value={8} min={0} max={19} size={'49px'} color='#FEB005'>
                            <CircularProgressLabel
                                color='#FEB005'
                                fontFamily='Poppins'
                                fontSize='20px'
                                fontStyle='normal'
                                fontWeight='700'
                                lineHeight='normal'
                            >8</CircularProgressLabel>
                        </CircularProgress>


                    </Box>

                    <Heading
                        color='#FFC000'
                        fontFamily='Poppins'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='500'
                        lineHeight='normal'
                        textAlign={'center'}
                        mt={'14px'}
                    >Question <span>13/20</span></Heading>

                    <Heading
                        color='#2B262D'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontStyle='normal'
                        fontWeight='500'
                        lineHeight='normal'
                        textAlign={'center'}
                        mt={'32px'}
                    >How many students in your class
                    _from Korea?</Heading>

                </Box>

            </chakra.div>


        </chakra.div>
    )
}


// <Box borderRadius={'50%'} bg={'#fff'} w={'67px'} h={'67px'} left={'50%'}
//                         transform='translate(-50%, -50%)'
//                         position={'absolute'}></Box>