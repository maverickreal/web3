#!/bin/sh

echo "Enter the number (>=0) of tokens to fund to the server's wallet: "
read num

for ((i=1; i<=$num; i++))
do
	echo "Airdropping $i th token from testnet"
	solana airdrop 1 6wcKkenXuCapR5wGrWstay2VqacLqwBq48DVBqnAyV5d --url testnet
done