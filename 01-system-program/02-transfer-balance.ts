import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('22fhvBjy6YNyFyCWdiiuAhDrnSuwBnTEermmPFfHhTa7H2DVuy6kXaW7XQ6ZVGisoQbF2fmD5YFh71NwQKo3UdgG')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('5pqQqSHn8P3V76f7KAD86G1Ma1DDdQpW2r1QYkYRwtrx');
    const publicKeyTo = new Web3.PublicKey('DbukU9sPaNMyFKqRkuibhGG13qwXtoF5s55Y9cL246cR');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();