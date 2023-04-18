import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: light-grey;
  border: 1;
  border-radius: 1px;
  color: black;
  font-size: 18px;
  margin: 0;
  padding: 1rem 4rem;
`;


const Button = ({children}) => {

    const handleClick = e => {
      return e
    }

    return (
        <StyledButton onClick={handleClick}>
                  {children}
        </StyledButton>
    )
}

export default Button