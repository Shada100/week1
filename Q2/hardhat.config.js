require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
module.exports =
{
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      }
    ],
  },
=======
module.exports = {
  solidity: "0.8.4",
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
module.exports = {
  solidity: "0.8.4",
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
=======
module.exports = {
  solidity: "0.8.4",
>>>>>>> 9ff7bae13d90e295d332dc04a910da48ab4138b8
};
