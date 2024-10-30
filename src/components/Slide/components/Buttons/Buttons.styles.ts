import styled from 'styled-components';

export const Button = styled.button`
  color: #6e718f;
  border: none;
  cursor: pointer;
  width: 50%;
  height: 100%;
  &:active {
    transform: scale(1.1);
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #202020;
  border-radius: 32px;
  width: 195px;
  height: 40px;
  padding: 8px 16px 8px 16px;
`;
