import styled from '@emotion/styled';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 40px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ButtonsListItem = styled.li``;

export const Button = styled.button`
  font-size: 25px;

  padding: 10px 20px;
  border-radius: 10px;

  cursor: pointer;

  :hover,
  :focus {
    background-color: aqua;
  }
`;
