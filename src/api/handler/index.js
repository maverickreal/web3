const solanaWeb3 = require('@solana/web3.js');

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('testnet'));

class Handler {
    static async transfer(req, res) {
        try {
            const { walletAddress, amount } = req.body;
            const fromWallet = solanaWeb3.Keypair.fromSecretKey(Uint8Array.from(JSON.parse(process.env.SPK)));
            const toWallet = new solanaWeb3.PublicKey(walletAddress);
            const transaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                    fromPubkey: fromWallet.publicKey,
                    toPubkey: toWallet,
                    lamports: amount * solanaWeb3.LAMPORTS_PER_SOL,
                })
            );
            transaction.feePayer = fromWallet.publicKey;
            const signature = await solanaWeb3.sendAndConfirmTransaction(
                connection,
                transaction,
                [fromWallet]
            );
            res.status(200).send({ signature });
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal Server error.');
        }
    }
};

module.exports = Handler;