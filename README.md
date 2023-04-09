# web3
### Send Solana tokens to a user's wallet using just their address (public key).
### Currently based on top of the testnet network and therefore heavily rate limited in terms of funding from their end.
### How to run
1. Give executable permission to the fund_upto_hundred_tokens.sh script using:
```sh
chmod +x fund_upto_hundred_tokens.sh
```
2. Install the project-dependencies by running the following cmd from the project's root directory:
```sh
npm install
```
3. Do not forget to setup the following environment variables:
    - __PORT__ : HTTP web server port
    - __SPK__  : Your solana account's private key
4. execute the project using:
```sh
npm run start
```
### API Doc [HERE](https://documenter.getpostman.com/view/15905495/2s93XsY66j)