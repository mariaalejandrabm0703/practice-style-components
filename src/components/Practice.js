import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #333;
  font-size: 30px;
  height: 50px;
  width: ${(props) => (props.fullWidth ? "100%" : "500px")};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

//Estilizando otros componentes
const Search = ({ search, className, containerStyle }) => {
  return (
    <div style={containerStyle}>
      <p className={className}>You're looking for: {search}</p>
    </div>
  );
};

//Propiedades adicionales
export const StyledSearch = styled(Search).attrs({
    containerStyle: {
      border: '1px solid #eee',
      borderRadius: 10,
      padding: 10
    },
  })`
    color: #333;
    font-size: 40px;
  `;

  const Button1 = styled.button.attrs({
    type: 'button'
  })``;

  //Extendiendo estilos

export const Practice = () => {
  return (
    <>
      <Container>
        <Input fullWidth={false} placeholder="Your text goes here" />
      </Container>
      <StyledSearch search={'search'}/>
      <Button1>Add</Button1>
    </>
  );
};
