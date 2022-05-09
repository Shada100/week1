pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
include "../../node_modules/circomlib-matrix/matMul.circom"; // hint: you can use more than one templates in circomlib-matrix to help you
include "../../node_modules/circomlib-matrix/matElemsum.circom";
=======
include ""; // hint: you can use more than one templates in circomlib-matrix to help you

>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
include ""; // hint: you can use more than one templates in circomlib-matrix to help you

>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
include ""; // hint: you can use more than one templates in circomlib-matrix to help you

>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
template SystemOfEquations(n) { // n is the number of variables in the system of equations
    signal input x[n]; // this is the solution to the system of equations
    signal input A[n][n]; // this is the coefficient matrix
    signal input b[n]; // this are the constants in the system of equations
    signal output out; // 1 for correct solution, 0 for incorrect solution

    // [bonus] insert your code here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    component mxlty = matMul(n, n, 1);

    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
        mxlty.a[i][j] <== A[i][j]
        }
        mxlty.b[i][j]<== x[i];
    }

    component mthi = matElemsum(n, 1);
    component mthj = matElemsum(n, 1);
    
    for(var i = 0; i < n; i++) {
        mthi.a[i][0] <== multi.out[i][0];
        mthj.a[i][0] <== b[i];
    } 
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
}

component main {public [A, b]} = SystemOfEquations(3);