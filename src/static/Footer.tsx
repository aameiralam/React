import { Container, Typography } from '@mui/material'


const Footer  = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Container maxWidth="xl" sx={{ textAlign: 'center', py: 3, mt: 5, backgroundColor: '#f4f4f4' }}>
    <Typography variant="body1">&copy; 2024 Monster Show. All rights reserved.</Typography>
    </Container></div>
  )
}

export default Footer