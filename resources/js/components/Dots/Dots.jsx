import './Dots.scss';
import { Box } from '@mui/material';

export default function Dots({ array, activeIndex, setFunction }) {
  return (
    <Box className="dots">
      {array.map((item, index) => {
          return <Box className="dot_content"
            key={index}
            onClick={() => setFunction(index)}
          ></Box>
        }
      )}
      <span className="indicator" style={{ left: `calc(${activeIndex} * 30px)` }}></span>
    </Box>
  )
}