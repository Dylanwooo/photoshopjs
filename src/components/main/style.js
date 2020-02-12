import styled from 'styled-components';

export const MainWrapper = styled.div`
  img {
    width: 800px;
    height: auto;
  }
`;

export const UploadWrap = styled.a`
  box-sizing: border-box;
  color: #fff;
  background: linear-gradient(180deg, #00a3da, #09c);
  cursor: pointer;
  display: inline-block;
  position: relative;
  opacity: 0.8;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  letter-spacing: 1px;
  height: 32px;
  line-height: 32px;
  width: 130px;
  transition: all 0.15s linear;
  padding: 0 20px 0 21px;
  white-space: nowrap;

  input {
    position: absolute;
    width: 130px;
    height: 32px;
    opacity: 0;
    left: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
  }
`;
