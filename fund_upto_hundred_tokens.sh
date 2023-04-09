#!/bin/sh

for i in {1..100}
do
	echo "Airdropping $i th token from testnet";
	solana airdrop 1 6wcKkenXuCapR5wGrWstay2VqacLqwBq48DVBqnAyV5d --url testnet
done
