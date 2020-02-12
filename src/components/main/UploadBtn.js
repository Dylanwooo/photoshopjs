import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {UploadWrap} from './style';

const mapState = state => ({});
const mapDispatch = ({imageInfo: {loadImage}}) => ({
  loadImage: image => loadImage(image),
});

const UploadButton = ({loadImage}) => {
  const inputEl = useRef(null);

  const handleReadRawData = () => {
    const URL = window.URL || window.webkitURL;
    const blobImg = URL.createObjectURL(inputEl.current.files[0]);
    loadImage(blobImg);
  };

  return (
    <UploadWrap>
      OPEN IMAGE
      <input
        ref={inputEl}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleReadRawData}
      />
    </UploadWrap>
  );
};

export default connect(mapState, mapDispatch)(UploadButton);
