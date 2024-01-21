import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const MenuKebab = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title={<i className="bi bi-three-dots-vertical"></i>}>
      <Dropdown.Item href="#/action-1"><i className="bi bi-pencil-square"></i> Edit</Dropdown.Item>
      <Dropdown.Item href="#/action-2"><i className="bi bi-trash3"></i> Delete</Dropdown.Item>
    </DropdownButton>
  );
};

export default MenuKebab;
