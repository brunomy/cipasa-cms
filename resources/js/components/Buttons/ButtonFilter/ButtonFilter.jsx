import './ButtonFilter.scss';
import { Button } from '@mui/material';

export default function ButtonFilter({ children, isActive, onClick }) {
  return (
    <Button
      className={`button_filter ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}