import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

const StyledHeading = styled.div`
  font-size: 24px;
`;

const StyledButton = styled.button``;

export const ConfirmPage = () => {
  //const { sendAmount, payee, reference } = useSENDContext();
  let sendAmmount = 0;
  let payee = { name: 'BOB' };
  let reference = 'foaidsgjdlksvx';

  const handleSubmit = () => {
    // submit data to context and route to new page
  };

  return (
    <>
      <StyledHeading>You're sending £{sendAmmount}</StyledHeading>
      <StyledHeading>You're sending to {payee.name} </StyledHeading>
      <StyledHeading>With reference: {reference} </StyledHeading>
      <StyledButton>Submit</StyledButton>
    </>
  );
};
