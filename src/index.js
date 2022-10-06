import App from './App';
import Logo from './logo.svg';

// eslint-disable-next-line no-undef
const root = document.getElementById('root');
root.innerHTML = `
<img src="${Logo}" alt="build icon" />
<h1> learning web tooling today </h1>
${App({ name: 'Tanay' })}
`;
