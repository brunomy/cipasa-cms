import './Button1.scss';
import { Button } from '@mui/material';

export default function Button1({ children, onClick, className = '', ...props }) {
  return (
    <Button className={'button1 ' + (className ? className : '')} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}