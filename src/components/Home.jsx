import { Button ,Typography,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Box display='flex' flexDirection="column" alignItems='center'>
        <Button  LinkComponent={Link} to="/books" sx={{marginTop:15, background:'purple'}} variant='contained'>
          <Typography variant='h3'> view all products</Typography>

        </Button>

      </Box>
    </div>
  )
}

export default Home