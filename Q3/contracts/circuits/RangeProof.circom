<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template RangeProof(n) {
    assert(n <= 252);
    signal input in; // this is the number to be proved inside the range
    signal input range[2]; // the two elements should be the range, i.e. [lower bound, upper bound]
    signal output out;

    component low = LessEqThan(n);
    component high = GreaterEqThan(n);

    // [assignment] insert your code here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Checking if it is less than the upper bound
    low.in[0] <== in;
    low.in[1] <== range[1];
    1 <== low.out;
    //checking if it is higher than the upperbound
    high.in[0] <== in;
    high.in[1] <== range[0];
    1 <== high.out;
    //this is like an And truth table will give an output of one 
    //only if both are with(within range)
    out <== (low.out) * (high.out);
}
=======
>>>>>>> 4accf8dc3e12e1f84f2ac9b36e6c940d078c2724
=======
}
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
}
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
}
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
