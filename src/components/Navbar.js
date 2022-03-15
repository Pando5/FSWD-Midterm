import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const links = document.querySelectorAll(".navbar-link");
    if (path.includes("/categories")) {
      links[1].classList.add("selected");
    } else if (path.includes("/author")) {
      links[2].classList.add("selected");
    } else if (path.includes("/")) {
      links[0].classList.add("selected");
    }
  }, [location]);

  return (
    <div
      style={{
        height: "75px",
        background: "var(--theme-color)",
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div style={{ width: "50%", display: "flex" }}>
        <img
          src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/83707637_2785263558232382_1278360087525588992_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGTjJBKXKgO-1kh_0dot8zhIPSalHXY6-Qg9JqUddjr5Be2HVTkTYuAqZB6phmsFrXhgMIGs_qG7MbPAtvmaoCR&_nc_ohc=MxNBNvt6bZMAX-39hB5&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT-ldenv6VMkGaXzdtu1My3o6Iyfi6sAkwOfPU7GI1XGCg&oe=625760B1"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
          alt=""
        />
        <div
          style={{ marginTop: "10px", fontSize: "24px", fontWeight: "bold" }}
        >
          Taweewat Srimek 62070072
        </div>
      </div>
      <div style={{ width: "50%", display: "flex", justifyContent: "right" }}>
        <div style={{
            width: "50%",
            display: "flex",
            padding: "0 30px",
            fontSize: "24px",
            fontWeight: "bold"
          }}>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            padding: "0 30px",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          <NavLink to="/categories" className="navbar-link">
            Category
          </NavLink>
        </div>
        <div style={{
            width: "50%",
            display: "flex",
            padding: "0 30px",
            fontSize: "24px",
            fontWeight: "bold"
          }}>
          <NavLink to="/author" className="navbar-link">
            Author
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
