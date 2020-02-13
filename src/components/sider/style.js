import styled from 'styled-components';

export const DivideWrap = styled.div`
  color: #eee;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 200;
  background: rgba(0, 0, 0, 0.1);
  line-height: 42px;
  height: 42px;
`;

export const ItemWrap = styled.li`
  color: ${props =>
    props.selected ? '#hsla(0, 0%, 100%, 0.6)' : 'hsla(0, 0%, 100%, 0.4)'};

  font-size: 15px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  border-left: 4px solid
    ${props => (props.selected ? '#00a3da' : 'transparent')};
  background: ${props => (props.selected ? 'hsla(0,0%,100%,.03)' : 'none')};

  transition: all 0.4s ease;
  list-style: none;
  height: 36px;
  line-height: 36px;
  &:hover {
    color: hsla(0, 0%, 100%, 0.6);
    border-left: 4px solid hsla(0, 0%, 100%, 0.2);
    background: hsla(0, 0%, 100%, 0.03);
  }
`;
