# web3
### How to run
1. Give executable permission to the fund_upto_hundred_tokens.sh scrip using:
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