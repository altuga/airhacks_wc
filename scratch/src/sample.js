const output = document.querySelector('div');
const root = output.attachShadow({ mode: 'closed' });
root.innerHTML = `
    <h2>a nice shadow</h2>
`;