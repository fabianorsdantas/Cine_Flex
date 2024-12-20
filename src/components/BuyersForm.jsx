import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postPurchase } from "../services/api";
import { SelectionButton } from "../styles/SelectionButton";
import BuyerInput from "./BuyerInput";

export default function BuyersForm({ buyers, setBuyers }) {
  const navigate = useNavigate();

  function updateBuyers(index, buyer) {
    setBuyers(buyers.toSpliced(index, 1, buyer));
  }

  function handleForm(e) {
    e.preventDefault();
    const ids = buyers.map(b => b.idSeat);
    const customers = buyers.map(b => ({ idAssento: b.idSeat, nome: b.name, cpf: b.cpf }));
    postPurchase({ ids, compradores: customers })
      .then(res => navigate(`/success`))
      .catch(err => console.error(err.response.data));
  }

  return (
    <Form onSubmit={handleForm}>
      {buyers.map((b, index) => (
        <BuyerInput key={b.idSeat} index={index} buyer={b} updateBuyers={updateBuyers} />
      ))}

      <Wrapper>
        <SelectionButton type="submit">Reservar Assento(s)</SelectionButton>
      </Wrapper>
    </Form>
  );
}

const Form = styled.form`
  width: 84vw;
  margin: 42px auto 147px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 57px;
`;
