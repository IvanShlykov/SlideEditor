import styled from 'styled-components';
import { BulletInputProps } from './Bullet.types';
import { marginType, textType } from '../../utils/constants';

export const Bullet = styled.input<BulletInputProps>`
  background: inherit;
  border: none;
  outline: none;
  line-height: 28px;
  width: 100%;
  ${({ bulletType }) => textType[bulletType]}
  ${({ bulletType }) => marginType[bulletType]}
`;

export const Dot = styled.div`
  position: absolute;
  background-color: #f8f8fb;
  height: 6px;
  width: 6px;
  border-radius: 3px;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

export const BulletWrapper = styled.div`
  position: relative;
  background: inherit;
  display: flex;
`;
