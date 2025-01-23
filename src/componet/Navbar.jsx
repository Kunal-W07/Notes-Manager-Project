import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row gap-4 place-content-evenly">
      <NavLink to="/"></NavLink>
      <NavLink to="/pastes"></NavLink>
    </div>
  );
};
export default Navbar;
