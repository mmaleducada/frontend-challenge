import React, { useState } from 'react';
import { Dropdown, Button, MenuItem } from 'react-bootstrap';

const MenuKebab = () => {
    const [showMenu, setShowMenu] = useState(false);
   
    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);
   
    return (
       <Dropdown show={showMenu} onHide={handleClose}>
         <Dropdown.Toggle as={Button} id="dropdown-kebab">
           ...
         </Dropdown.Toggle>
   
         <Dropdown.Menu>
           <MenuItem eventKey="1">Accion 1</MenuItem>
           <MenuItem eventKey="2">Accion 2</MenuItem>
           <MenuItem eventKey="3">Accion 3</MenuItem>
         </Dropdown.Menu>
       </Dropdown>
    );
   };