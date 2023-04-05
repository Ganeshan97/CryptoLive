import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/cryptocurrency.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  const handleHome = () => {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  };
  const handleMarket = () => {
    document.querySelector("#market").scrollIntoView({ behavior: "smooth" });
  };
  const handleChooseUs = () => {
    document.querySelector("#choose-us").scrollIntoView({ behavior: "smooth" });
  };
  const handleJoin = () => {
    document.querySelector("#join").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <div className="logo">
              <div className="logo-container">
                <img src={logo} alt="logo" />
              </div>
              <p onClick={goTop}>CryptoLive</p>
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/" onClick={handleHome}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleMarket}>
                Market
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleChooseUs}>
                Choose Us
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleJoin}>
                Join
              </Link>
            </li>
          </ul>
          <span>
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#130749" }}
            ></i>
            <i
              className="fa-brands fa-discord"
              style={{ color: "#130749" }}
            ></i>
            {/* mobile */}
            <i
              onClick={openMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
              style={{ color: "#130749" }}
            ></i>
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i
          onClick={openMobile}
          className="fa-solid fa-xmark close-mobile"
          style={{ color: "#130749" }}
        ></i>
        <ul>
          <li onClick={openMobile}>
            <Link to="/" onClick={handleHome}>
              Home
            </Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/" onClick={handleMarket}>
              Market
            </Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/" onClick={handleChooseUs}>
              Choose Us
            </Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/" onClick={handleJoin}>
              Join
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
