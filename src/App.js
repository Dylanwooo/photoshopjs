import React from 'react';
import {
  Layout,
  MainLayout,
  SiderBarLayout,
  HeaderLayout,
  JustifyFlex,
} from './components/Layout';
import MainComponent from './components/main/MainComponent';
import UploadButton from './components/main/UploadBtn';
import SiderComponent from './components/sider/SiderComponent';
import {Provider} from 'react-redux';
import store from './models/store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <HeaderLayout></HeaderLayout>
        <JustifyFlex>
          <SiderBarLayout>
            <SiderComponent />
          </SiderBarLayout>
          <MainLayout>
            <MainComponent />
          </MainLayout>
        </JustifyFlex>
        <UploadButton />
      </Layout>
    </Provider>
  );
}

export default App;
