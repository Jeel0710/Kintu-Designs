import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import "./button4.scss";
import { Link } from "react-router-dom";

export default function Button4() {
  return (
    <div className="buttoncomp">
    <Stack direction="row" alignItems="center" spacing={6}>
      <IconButton aria-label="Add Inquiry" size="large">
        <MonetizationOnIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <ShoppingCartIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Link to="/supplier/add" style={{textDecoration: "none"}}>
      <IconButton aria-label="Add Inquiry" size="large">
        <AddIcon sx={{ fontSize: 40 }} />
      </IconButton>
      </Link>
    </Stack>
    </div>
  );
}