import styled from 'styled-components';
import { useState } from 'react';

const StyledButton = styled.button``;

const StyledCard = styled.div`
  display: flex;
`;
const StyledText = styled.div`
  padding: 5px;
`;

export const AccountsPage = () => {
  const [checked, setChecked] = useState();
  const testAccounts = [
    { name: 'Bank 1', value: 200 },
    { name: 'Bank 2', value: 200 },
    { name: 'Bank 3', value: 200 },
  ];

  const handleSubmit = () => {
    //api call to do transaction

    //navigate('/confirm-send');
    console.log('submitted', checked);
  };

  return (
    <>
      {testAccounts.map((account, index) => {
        return (
          <StyledCard key={index}>
            <StyledText>Account: {account.name}</StyledText>
            <StyledText>Value: {account.value}</StyledText>
            <input
              type='radio'
              checked={checked === account.name}
              onChange={() => setChecked(account.name)}
            ></input>
          </StyledCard>
        );
      })}
      <StyledButton onClick={() => handleSubmit()}>Submit</StyledButton>
    </>
  );
};
