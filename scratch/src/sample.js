const airhacks = (a, b) => { 
    return "very safe rendering " + a + b;
}


const msg = "duke"
const template = airhacks`
    <h2>hello ${msg}</h2>
`;

console.log(template); 