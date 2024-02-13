import { Box,Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box diplay='flex' flexDirection="column" alignItems="center">

        <Typography sx={{fontFamily:"fantasy"}} variant="h2">we are passionate about books and the stories they hold. 
        We believe that books have the power to inspire, educate, and transform lives. 
        Our bookstore is more than just a place to buy books; it's a community hub where 
        readers of all ages and backgrounds come together to explore new worlds, share ideas, 
        and connect with one another.</Typography>
        <Typography variant='h3'>the book store was founded on the belief that books have the power to 
        enrich lives and foster a love of learning. What started as a small, independent bookstore has grown
         into a beloved destination for book lovers everywhere.Our journey has been guided by a commitment 
         to quality, community, and the joy of reading.</Typography>

      </Box>
    </div>
  )
}

export default About