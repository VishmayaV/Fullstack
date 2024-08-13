import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Dashboard, ShoppingCart, People } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <Dashboard />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products">
          <ShoppingCart />
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/admin/orders">
          <ShoppingCart />
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <People />
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
