import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

//import arrow from "../assets/arrow.svg";

export default function Banner({ setBuyers }) {
  const location = useLocation();
  const navigate = useNavigate();

  function goBack() {
    setBuyers([]);
    navigate(-1);
  }
  
  return (
    <Header>
     <Link to="/">
        <h1>CineFlex</h1>
      </Link>
    </Header>
  );
  
}

const Header = styled.header`
  width: 100vw;
  height: 67px;
  background: #ee897f;
  display: flex;
  justify-content: center; /* Distribui os itens entre as extremidades */
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 20px; /* Espaçamento lateral */

  /* Alinha o conteúdo do Header */
  h1 {
    font-family: Raleway;
    font-size: 34px;
    font-weight: 600;
    line-height: 39.92px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FADBC5;
    margin: 0; /* Remove qualquer margem automática */;
    &:hover {
    color: #0056b3;
  }
  }

`;

