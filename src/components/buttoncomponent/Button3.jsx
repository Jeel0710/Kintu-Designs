import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./button3.scss";
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';

export default function Button3() {
  return (
    <div className="buttoncomp">
    <Stack direction="row" alignItems="center" spacing={6}>
      <IconButton aria-label="Add Inquiry" size="large">
        <PersonAddAltOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <PersonIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <CalendarMonthIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <VisibilityIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton aria-label="Add Inquiry" size="large">
        <ArticleIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </Stack>
    </div>
  );
}