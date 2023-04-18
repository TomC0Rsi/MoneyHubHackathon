import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const AccountsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 800px;
  margin-top: 32px;
`;

const AccountWrapper = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 32px;
  flex: 1;
`;

const AccountLabel = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;
`;

const AccountInfo = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
`;

const AccountNumber = styled.span`
  font-weight: 700;
`;

const SortCode = styled.span`
  font-weight: 700;
`;

const AccountReceivePage = ({ name, accountNumber, sortCode }) => (
  <Wrapper>
    <AccountsWrapper>
      <AccountWrapper>
        <AccountLabel>{name}'s Account</AccountLabel>
        <AccountInfo>
          Account Number: <AccountNumber>{accountNumber}</AccountNumber>
        </AccountInfo>
        <AccountInfo>
          Sort Code: <SortCode>{sortCode}</SortCode>
        </AccountInfo>
      </AccountWrapper>
    </AccountsWrapper>
  </Wrapper>
);

export default AccountReceivePage;
