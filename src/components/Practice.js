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
  const Button = styled.button`
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  font-weigth: bold;
  height: 50px;
  width: 200px;
`;
//function was removed in styled components version 4
// export const PrimaryButton = Button.extend`
//   background-color: #4682b4;
// `;
// export const SecondaryButton = Button.extend`
//   background-color: #C0625E;
// `;
export const PrimaryButton = styled(Button)`
  background-color: #4682b4;
`;
export const SecondaryButton = styled(Button)`
  background-color: #C0625E;
`;

export const Practice = () => {
  return (
    <>
      <Container>
        <Input fullWidth={false} placeholder="Your text goes here" />
      </Container>
      <StyledSearch search={'search'}/>
      <Button1>Add</Button1>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
    </>
  );
};
