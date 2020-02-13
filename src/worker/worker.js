const URL = window.URL || window.webkitURL;
const threadString = `onmessage = ({data}) => {
  console.log(data)
}`;

const blob = new Blob([threadString], {type: 'application/javascript'});

export const worker = URL.createObjectURL(blob);
