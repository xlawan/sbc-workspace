import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("DbukU9sPaNMyFKqRkuibhGG13qwXtoF5s55Y9cL246cR")
const decoded = base58.decode('22fhvBjy6YNyFyCWdiiuAhDrnSuwBnTEermmPFfHhTa7H2DVuy6kXaW7XQ6ZVGisoQbF2fmD5YFh71NwQKo3UdgG')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();