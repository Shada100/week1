pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
include "HelloWorld.circom";
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;  

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   component MultiplierA = Multiplier2();
   component MultiplierB = Multiplier2();

   // Constraints.  
   MultiplierA.a <== a;
   MultiplierA.b <== b;
   MultiplierB.a <== MultiplierA.c ;  //input a * input b
   MultiplierB.b <== c;
   d <== MultiplierB.c;  //(input a * input b) * input c
  
=======
   // Constraints.  
   d <== a * b * c;  
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
   // Constraints.  
   d <== a * b * c;  
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
   // Constraints.  
   d <== a * b * c;  
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
}

component main = Multiplier3();