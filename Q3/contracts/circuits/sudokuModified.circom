<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// [assignment] please copy the entire modified sudoku.circom here
pragma circom 2.0.3;

//[assignment] include your RangeProof template here
include "allcircuits.circom";
// I had some permission problems problem opening files in node_modules
//so I added all the templates I needed into allcircuits.circom


template sudoku() {
    signal input puzzle[9][9]; // 0  where blank
    signal input solution[9][9]; // 0 where original puzzle is not blank
    signal output out;

    // check whether the solution is zero everywhere the puzzle has values (to avoid trick solution)

    component mul = matElemMul(9,9);
    
    //[assignment] hint: you will need to initialize your RangeProof components here
    component range[9][9];
    component srang[9][9];
    
    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
           //[assignment] change assert() to use your created RangeProof instead
           range[i][j] = RangeProof(32);
           range[i][j].in <== puzzle[i][j];
           range[i][j].range[0] <== 0;
           range[i][j].range[1] <== 9;
           range[i][j].out === 1;
           srang[i][j] = RangeProof(32);
           srang[i][j].in <== solution[i][j];
           srang[i][j].range[0] <== 0;
           srang[i][j].range[1] <== 9;
           srang[i][j].out === 1;
            mul.a[i][j] <== puzzle[i][j];
            mul.b[i][j] <== solution[i][j];
        }
    }
    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            mul.out[i][j] === 0;
        }
    }

    // sum up the two inputs to get full solution and square the full solution

    component add = matAdd(9,9);
    
    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            add.a[i][j] <== puzzle[i][j];
            add.b[i][j] <== solution[i][j];
        }
    }

    component square = matElemPow(9,9,2);

    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            square.a[i][j] <== add.out[i][j];
        }
    }

    // check all rows and columns and blocks sum to 45 and sum of sqaures = 285

    component row[9];
    component col[9];
    component block[9];
    component rowSq[9];
    component colSq[9];
    component blockSq[9];


    for (var k=0; k<9; k++) {
        row[k] = matElemSum(1,9);
        col[k] = matElemSum(1,9);
        block[k] = matElemSum(3,3);

        rowSq[k] = matElemSum(1,9);
        colSq[k] = matElemSum(1,9);
        blockSq[k] = matElemSum(3,3);

        for (var i=0; i<9; i++) {
            row[k].a[0][i] <== add.out[k][i];
            col[k].a[0][i] <== add.out[i][k];

            rowSq[k].a[0][i] <== square.out[k][i];
            colSq[k].a[0][i] <== square.out[i][k];
        }
        var x = 3*(k%3);
        var y = 3*(k\3);
        for (var i=0; i<3; i++) {
            for (var j=0; j<3; j++) {
                block[k].a[i][j] <== add.out[x+i][y+j];
                blockSq[k].a[i][j] <== square.out[x+i][y+j];
            }
        }
        row[k].out === 45;
        col[k].out === 45;
        block[k].out === 45;

        rowSq[k].out === 285;
        colSq[k].out === 285;
        blockSq[k].out === 285;
    }

    // hash the original puzzle and emit so that the dapp can listen for puzzle solved events

    component poseidon[9];
    component hash;

    hash = Poseidon(9);
    
    for (var i=0; i<9; i++) {
        poseidon[i] = Poseidon(9);
        for (var j=0; j<9; j++) {
            poseidon[i].inputs[j] <== puzzle[i][j];
        }
        hash.inputs[i] <== poseidon[i].out;
    }

    out <== hash.out;
}

component main = sudoku();
=======
>>>>>>> 4accf8dc3e12e1f84f2ac9b36e6c940d078c2724
=======
// [assignment] please copy the entire modified sudoku.circom here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
// [assignment] please copy the entire modified sudoku.circom here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
// [assignment] please copy the entire modified sudoku.circom here
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
