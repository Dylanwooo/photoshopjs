export const imageInfo = {
  state: {blobUrl: '', imgData: []},
  reducers: {
    loadImage(state, payload) {
      return Object.assign({}, state, {blobUrl: payload});
    },
    loadImageData(state, payload) {
      return Object.assign({}, state, {imgData: payload});
    },
  },
};

export const FilterProcess = {
  state: '',
  reducers: {},
};
