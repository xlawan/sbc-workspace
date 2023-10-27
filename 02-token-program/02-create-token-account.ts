import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("DbukU9sPaNMyFKqRkuibhGG13qwXtoF5s55Y9cL246cR") // PUBKEY of person you want to create the token account

const decoded = base58.decode('22fhvBjy6YNyFyCWdiiuAhDrnSuwBnTEermmPFfHhTa7H2DVuy6kXaW7XQ6ZVGisoQbF2fmD5YFh71NwQKo3UdgG')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "Cv1NoDCPRsrY4TWpekNpbRqw9va6UJz4aPvjS4nPTNKw"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();