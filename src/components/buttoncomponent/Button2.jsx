import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InfoIcon from '@mui/icons-material/Info';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./button2.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button2() {
  return (
    <div className="buttoncomp">
    <Stack direction="row" alignItems="center" spacing={5}>
      <IconButton aria-label="Add Inquiry" size="large">
        <PersonAddAltOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <InfoIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <DateRangeOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <CalendarMonthIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <VisibilityIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </Stack>
    </div>
  );
}