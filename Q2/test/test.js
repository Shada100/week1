const { expect } = require("chai");
const { ethers } = require("hardhat");
const fs = require("fs");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { groth16, plonk } = require("snarkjs");
=======
const { groth16 } = require("snarkjs");
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
const { groth16 } = require("snarkjs");
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
const { groth16 } = require("snarkjs");
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8

function unstringifyBigInts(o) {
    if ((typeof(o) == "string") && (/^[0-9]+$/.test(o) ))  {
        return BigInt(o);
    } else if ((typeof(o) == "string") && (/^0x[0-9a-fA-F]+$/.test(o) ))  {
        return BigInt(o);
    } else if (Array.isArray(o)) {
        return o.map(unstringifyBigInts);
    } else if (typeof o == "object") {
        if (o===null) return null;
        const res = {};
        const keys = Object.keys(o);
        keys.forEach( (k) => {
            res[k] = unstringifyBigInts(o[k]);
        });
        return res;
    } else {
        return o;
    }
}

describe("HelloWorld", function () {
    let Verifier;
    let verifier;

    beforeEach(async function () {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        //This here generates a Contract factory for helloworld smart contract
        Verifier = await ethers.getContractFactory("contracts/HelloWorldVerifier.sol:HelloWorldVerifier");
        //this deploys the smart contract
        verifier = await Verifier.deploy();
        //this ensures the smart contract has been deployed
=======
        Verifier = await ethers.getContractFactory("HelloWorldVerifier");
        verifier = await Verifier.deploy();
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
        Verifier = await ethers.getContractFactory("HelloWorldVerifier");
        verifier = await Verifier.deploy();
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
        Verifier = await ethers.getContractFactory("HelloWorldVerifier");
        verifier = await Verifier.deploy();
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
        await verifier.deployed();
    });

    it("Should return true for correct proof", async function () {
        //[assignment] Add comments to explain what each line is doing
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
         //This is telling the verifier contract which verification key and wasm file corresponds to the (proof, publicSignal) pair being passed in
        const { proof, publicSignals } = await groth16.fullProve({"a":"1","b":"2"}, "contracts/circuits/HelloWorld/HelloWorld_js/HelloWorld.wasm","contracts/circuits/HelloWorld/circuit_final.zkey");
        //this is lettting it know the amount of inputs
        console.log('1x2 =',publicSignals[0]);
        //calls the function unstringifyBigInts on publicSignals
        const editedPublicSignals = unstringifyBigInts(publicSignals);
        //calls the function unstringifyBigInts on proof
        const editedProof = unstringifyBigInts(proof);
        //
        const calldata = await groth16.exportSolidityCallData(editedProof, editedPublicSignals);
        //to replace matches with string then split the string into substring using , then map it
        const argv = calldata.replace(/["[\]\s]/g, "").split(',').map(x => BigInt(x).toString());
        //Define values of a, b, c and the input value 
=======
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
        const { proof, publicSignals } = await groth16.fullProve({"a":"1","b":"2"}, "contracts/circuits/HelloWorld/HelloWorld_js/HelloWorld.wasm","contracts/circuits/HelloWorld/circuit_final.zkey");

        console.log('1x2 =',publicSignals[0]);

        const editedPublicSignals = unstringifyBigInts(publicSignals);
        const editedProof = unstringifyBigInts(proof);
        const calldata = await groth16.exportSolidityCallData(editedProof, editedPublicSignals);
    
        const argv = calldata.replace(/["[\]\s]/g, "").split(',').map(x => BigInt(x).toString());
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
        const a = [argv[0], argv[1]];
        const b = [[argv[2], argv[3]], [argv[4], argv[5]]];
        const c = [argv[6], argv[7]];
        const Input = argv.slice(8);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        //test if the returned value is the the same
=======

>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======

>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======

>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
        expect(await verifier.verifyProof(a, b, c, Input)).to.be.true;
    });
    it("Should return false for invalid proof", async function () {
        let a = [0, 0];
        let b = [[0, 0], [0, 0]];
        let c = [0, 0];
        let d = [0]
        expect(await verifier.verifyProof(a, b, c, d)).to.be.false;
    });
});


describe("Multiplier3 with Groth16", function () {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    let Verifier;
    let verifier;

    beforeEach(async function () {
        //[assignment] insert your script here
        //This here generates a Contract factory for helloworld smart contract
        Verifier = await ethers.getContractFactory("contracts/Multiplier3Verifier.sol:Multiplier3Verifier");
        //this deploys the smart contract
        verifier = await Verifier.deploy();
        //this ensures the smart contract has been deployed
        await verifier.deployed();
=======

    beforeEach(async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======

    beforeEach(async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======

    beforeEach(async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
    });

    it("Should return true for correct proof", async function () {
        //[assignment] insert your script here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          //This is telling the verifier contract which verification key and wasm file corresponds to the (proof, publicSignal) pair being passed in
          const { proof, publicSignals } = await groth16.fullProve({"a":"6","b":"3","c":"4"}, "contracts/circuits/Multiplier3/Multiplier3_js/Multiplier3.wasm","contracts/circuits/Multiplier3/circuit_final.zkey");
          //this is lettting it know the amount of inputs
          console.log('6x3x4 =',publicSignals[0]);
          //calls the function unstringifyBigInts on publicSignals
          const editedPublicSignals = unstringifyBigInts(publicSignals);
          //calls the function unstringifyBigInts on proof
          const editedProof = unstringifyBigInts(proof);
          //
          const calldata = await groth16.exportSolidityCallData(editedProof, editedPublicSignals);
          //to replace matches with string then split the string into substring using , then map it while cconverting it to big int
          const argv = calldata.replace(/["[\]\s]/g, "").split(',').map(x => BigInt(x).toString());
          //Define values of a, b, c and the input value 
          const a = [argv[0], argv[1]];
          const b = [[argv[2], argv[3]], [argv[4], argv[5]]];
          const c = [argv[6], argv[7]];
          const Input = argv.slice(8);
          //test if the returned value is the the same
          expect(await verifier.verifyProof(a, b, c, Input)).to.be.true;
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
        let a = [0, 0];
        let b = [[0, 0], [0, 0]];
        let c = [0, 0];
        let d = [0]
        expect(await verifier.verifyProof(a, b, c, d)).to.be.false;
=======
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
    });
});


describe("Multiplier3 with PLONK", function () {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    let Verifier;
    let verifier;

    beforeEach(async function () {
        //[assignment] insert your script here
        //This here generates a Contract factory for the plonk smart contract
        Verifier = await ethers.getContractFactory("contracts/_plonkMultiplier3Verifier.sol:PlonkVerifier");
        //this deploys the smart contract
        verifier = await Verifier.deploy();
        //this ensures the smart contract has been deployed
        await verifier.deployed();
=======

    beforeEach(async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======

    beforeEach(async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======

    beforeEach(async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
    });

    it("Should return true for correct proof", async function () {
        //[assignment] insert your script here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
         //This is telling the verifier contract which verification key and wasm file corresponds to the (proof, publicSignal) pair being passed in
         const { proof, publicSignals } = await plonk.fullProve({"a":"6","b":"3","c":"4"}, "contracts/circuits/_plonkMultiplier3/Multiplier3_js/Multiplier3.wasm","contracts/circuits/_plonkMultiplier3/circuit_final.zkey");
         //this is letting us see know the amount of inputs
         console.log('6x3x4 =',publicSignals[0]);
         //calls the function unstringifyBigInts on publicSignals
         const editedPublicSignals = unstringifyBigInts(publicSignals);
         //calls the function unstringifyBigInts on proof
         const editedProof = unstringifyBigInts(proof);
         //To call the solidity data
         const calldata = await plonk.exportSolidityCallData(editedProof, editedPublicSignals);
         //to replace matches with string then split the string into an array when , is met 
         const argv = calldata.replace(/["[\]\s]/g, "").split(',');
         //Converting argv[1] to Big int 
         const a = [BigInt(argv[1])];
         //test if the returned value is the the same
         expect(await verifier.verifyProof(argv[0], a)).to.be.true;
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
        let a = 0x7980
        let b = [4]
        expect(await verifier.verifyProof(a, b)).to.be.false;
=======
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
    });
    it("Should return false for invalid proof", async function () {
        //[assignment] insert your script here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
    });
});