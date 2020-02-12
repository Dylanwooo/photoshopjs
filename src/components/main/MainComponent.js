import React, {useState, useEffect} from 'react';
import {MainWrapper} from './style';
import {connect} from 'react-redux';

const mapState = state => ({
  image: state.imageInfo,
});

const MainComponent = ({image}) => {
  const [imgLoaded, setVisibility] = useState(false);

  useEffect(() => {
    const img = document.getElementById('img-load');
    const canvas = document.getElementById('canvas');

    img.onload = () => {
      const ctx = canvas.getContext('2d');

      const imgW = window.getComputedStyle(img).width.replace('px', '');
      const imgH = window.getComputedStyle(img).height.replace('px', '');

      canvas.width = imgW;
      canvas.height = imgH;

      ctx.drawImage(img, 0, 0, imgW, imgH);
      setVisibility(true);
    };
  }, []);

  return (
    <MainWrapper>
      <canvas id="canvas" />
      {!imgLoaded && <img id="img-load" src={image} />}
    </MainWrapper>
  );
};

export default connect(mapState, {})(MainComponent);
