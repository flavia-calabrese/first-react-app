import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";
import './Footer.css'
import { ListItem } from "@mui/material";


const columns = [
  {
    title: "Features",
    links: [
      {
        text: "lavoro1",
        link: "https://floresta.com",
      },
      {
        text: "lavoro2",
        link: "https://floresta.com",
      },
    ],
  },
  {
    title: "Contact Me",
    links: [
      {
        title: "Call Me",
        text: "(438) 408-5802",
        link: "tel:4384085802",
      },
      {
        title: "Email Me",
        text: "igpollisallo@pollo.com",
        link: "mailto:igpollisallo@pollo.com",
      },
      {
        title: "Visit Me",
        text: "7461 Adams St. Navarre, FL 32566",
        link: "https://www.google.com/maps/place/Adams+St,+Navarre,+FL+32566,+USA/@30.4071158,-86.9320624,17z/data=!3m1!4b1!4m5!3m4!1s0x8890df319fdd0bc3:0xa09976a8dcb969e1!8m2!3d30.4071158!4d-86.9298737",
      },
    ],
  },
  {
    title: "Portfolio",
    links: [
      {
        text: "Github",

        link: "https://github.com/Joshua131313",
      },
      {
        text: "Dribbble",

        link: "https://dribbble.com/josh1231",
      },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        text: "Privacy Policy",
        link: "/website/privacy",
      },
      {
        text: "Terms and Conditions",
        link: "/website/terms",
      },
      {
        text: "Learn More",
        link: "/website/about",
      },
    ],
  },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <footer>
      <List
        sx={{ width: "100vw"}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {columns.map((item, index) => (
          <PrimaryListItem key={index} title={item.title} links={item.links} />
        ))}
      </List>
    </footer>
  );
}

function PrimaryListItem(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <ListItem  className="expand-primary-item" onClick={handleClick}>
        <ListItemText component="span" primary={props.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.links.map((item, index) => (
            <SecondaryListItem key={index} text={item.text} link={item.link} />
          ))}
        </List>
      </Collapse>
    </div>
  );
}

function SecondaryListItem(props) {
  return (
    <ListItem sx={{ pl: 4 }}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}
