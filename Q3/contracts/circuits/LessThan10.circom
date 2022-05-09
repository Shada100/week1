pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template LessThan10() {
    signal input in;
    signal output out;

    component lt = LessThan(32); 

    lt.in[0] <== in;
    lt.in[1] <== 10;

    out <== lt.out;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
component main = LessThan10();
=======
}
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
}
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
}
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
