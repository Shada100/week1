const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/SystemOfEquationsVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract SystemOfEquationsVerifier');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped);

let content2 = fs.readFileSync("./contracts/LessThan10Verifier.sol", { encoding: 'utf-8' });
let bumped2 = content2.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped2 = bumped2.replace(verifierRegex, 'contract LessThan10Verifier');

fs.writeFileSync("./contracts/LessThan10Verifier.sol", bumped2);

=======
fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped);
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped);
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped);
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
