import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
// import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import DirectionsBikeOutlinedIcon from '@mui/icons-material/DirectionsBikeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./button1.scss"
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button1() {
  return (
    <div className="buttoncomp">
    <Stack direction="row" alignItems="center" spacing={4}>
      <IconButton aria-label="Add Inquiry" size="large">
        <InfoOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <RecentActorsOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <PersonAddAltOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <PersonPinOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <SwitchAccountOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <OutlinedFlagOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <AddCircleOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      {/* <IconButton aria-label="Add Inquiry" size="large">
        <Brightness4OutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton> */}
      <IconButton aria-label="Add Inquiry" size="large">
        <Brightness2OutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <LocalDiningOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <DirectionsBikeOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <DateRangeOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <LibraryBooksOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <FitnessCenterOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <ChatOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Link to="/supplier" style={{textDecoration: "none"}}>
      <IconButton aria-label="Add Inquiry" size="large">
        <VisibilityIcon sx={{ fontSize: 40 }} />
      </IconButton>
      </Link>
      <IconButton aria-label="Add Inquiry" size="large">
        <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <SettingsOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </Stack>
    </div>
  );
}