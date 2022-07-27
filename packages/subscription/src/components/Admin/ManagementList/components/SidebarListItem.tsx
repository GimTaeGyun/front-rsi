import React from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import SidebarListItemSub from "./SidebarListItemSub";

const SidebarListItem = (props: {
  item: { title: string; items: Array<any> };
}) => {
  const { item } = props;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <ListItemButton sx={{ pl: 0 }} onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText  sx={{ "& .MuiListItemText-primary": { fontSize: "15px", color: "#000000DE" } }}>{item.title}</ListItemText>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map(
            (subMenu) => subMenu.items && <SidebarListItemSub item={subMenu} />
          )}
        </List>
      </Collapse>
    </Box>
  );
};

export default SidebarListItem;
