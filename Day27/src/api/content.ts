export const getContent = () => (
  fetch('https://httpbin.org/get')
    .then(response => response.json())
);
