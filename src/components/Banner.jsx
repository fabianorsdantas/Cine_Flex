import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import arrow from "../assets/arrow.svg";

export default function Banner({ setBuyers }) {
  const location = useLocation();
  const navigate = useNavigate();

  function goBack() {
    setBuyers([]);
    navigate(-1);
  }

  return (
    <Header>
      {location.pathname !== "/" && <img src={arrow} alt="back arrow" onClick={goBack} />}
      <Link to="/">
        <h1>CineFlex</h1>
      </Link>
    </Header>
  );
}

const Header = styled.header`
  width: 100vw;
  height: 67px;

  background: #EE897F;
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;

  img {
    width: 35px;
    position: fixed;
    left: 3vw;
  }

  h1 {
    font-family: Raleway;
    font-size: 34px;
    font-weight: 600;
    line-height: 39.92px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FADBC5;
  }
`;
