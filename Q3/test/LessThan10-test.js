const { expect } = require("chai");
const { ethers } = require("hardhat");
const fs = require("fs");
const { groth16} = require("snarkjs");

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

describe("LessThan10", function () {
    let Verifier;
    let verifier;

    beforeEach(async function () {
        //This here generates a Contract factory for helloworld smart contract
        Verifier = await ethers.getContractFactory("contracts/LessThan10Verifier.sol:LessThan10Verifier");
        //this deploys the smart contract
        verifier = await Verifier.deploy();
        //this ensures the smart contract has been deployed
        await verifier.deployed();
    });

    it("Should return true for correct proof", async function () {
        //[assignment] Add comments to explain what each line is doing
         //This is telling the verifier contract which verification key and wasm file corresponds to the (proof, publicSignal) pair being passed in
        const { proof, publicSignals } = await groth16.fullProve({"in":"9"}, "contracts/circuits/LessThan10/LessThan10_js/LessThan10.wasm","contracts/circuits/LessThan10/circuit_final.zkey");
        //this is lettting it know the amount of inputs
        console.log('is it less than 10 =',publicSignals[0]);
        //calls the function unstringifyBigInts on publicSignals
        const editedPublicSignals = unstringifyBigInts(publicSignals);
        //calls the function unstringifyBigInts on proof
        const editedProof = unstringifyBigInts(proof);
        //
        const calldata = await groth16.exportSolidityCallData(editedProof, editedPublicSignals);
        //to replace matches with string then split the string into substring using , then map it
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
        let a = [0, 0];
        let b = [[0, 0], [0, 0]];
        let c = [0, 0];
        let d = [0]
        expect(await verifier.verifyProof(a, b, c, d)).to.be.false;
    });
});