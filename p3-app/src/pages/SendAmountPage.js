import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

const InputField = styled.input`
  width: 300px;
  font-size: 24px;
  margin-bottom: 20px;
`;
const StyledHeading = styled.div`
  font-size: 24px;
`;

const StyledButton = styled.button``;

export const SendAmountPage = () => {
  const [sendAmmount, setSendAmount] = useState('');
  const [reference, setReference] = useState('');

  const handleSubmit = () => {
    // submit data to context and route to new page
    console.log('submitted', sendAmmount, reference);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <StyledHeading>How much would you like to send?</StyledHeading>
          <InputField
            value={sendAmmount}
            onChange={(e) => {
              setSendAmount(e.target.value);
            }}
          ></InputField>
        </div>
        <div>
          <StyledHeading>Reference</StyledHeading>
          <InputField
            value={reference}
            onChange={(e) => {
              setReference(e.target.value);
            }}
          ></InputField>
        </div>
        <StyledButton type='submit'>Submit</StyledButton>
      </form>
    </>
  );
};
