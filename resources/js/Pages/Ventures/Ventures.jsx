import { Box } from '@mui/material'
import Blog from '../Home/components/Blog/Blog'
import VenturesHeader from './components/VenturesHeader/VenturesHeader'
import VenturesList from './components/VenturesList/VenturesList'

export default function Ventures() {
  return (
    <Box className="container">
      <VenturesHeader />
      <VenturesList />
      <Blog />
    </Box>
  )
}