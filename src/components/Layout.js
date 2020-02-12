import styled from 'styled-components';

export const Layout = styled.div`
  background: #171719;
  width: 100%;
  height: 100vh;
  font-family: Open Sans, sans-serif;
  color: hsla(0, 0%, 100%, 0.6);
`;
export const HeaderLayout = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  padding: 0 50px;
  box-sizing: border-box;
`;

const BaseLayout = styled.div`
  height: 800px;
  background: #23262a;
  border-radius: 8px;
`;
export const SiderBarLayout = styled(BaseLayout)`
  width: 220px;
  margin-right: 20px;
`;
export const MainLayout = styled(BaseLayout)`
  width: 72%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Flex
export const JustifyFlex = styled.div`
  display: flex;
  justify-content: center;
`;
export const AlignFlex = styled(JustifyFlex)`
  flex-direction: column;
`;
