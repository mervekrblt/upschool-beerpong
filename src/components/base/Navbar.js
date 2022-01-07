//import { Link } from "react-router-dom";
import { IoBeer } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-light bg-dark shadow p-3  ">
        <div className="container-fluid">
          <h1 className="mx-auto">
            <i className="me-5">
              <IoBeer />
            </i>
            Beer for Beerpong
          </h1>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
