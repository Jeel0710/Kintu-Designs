import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';  
import { Link } from "react-router-dom";
import "./button5.scss";

export default function Button5() {
  return (
    <div className="buttoncomp">
    <Stack direction="row" alignItems="center" spacing={6}>
        <IconButton aria-label="Add Inquiry" size="large">
            <LocalOfferIcon sx={{ fontSize: 40 }} />
        </IconButton>
      <Link to="/supplier" style={{textDecoration: "none"}}>
      <IconButton aria-label="Add Inquiry" size="large">
        <VisibilityIcon sx={{ fontSize: 40 }} />
      </IconButton>
      </Link>
        <IconButton aria-label="Add Inquiry" size="large">
            <SavedSearchIcon sx={{ fontSize: 40 }} />
        </IconButton>
    </Stack>
    </div>
  );
}