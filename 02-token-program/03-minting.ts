// import "dotenv/config"
// import base58 from "bs58"
// import * as Web3 from "@solana/web3.js"
// import * as token from "@solana/spl-token"
// import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

// const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
// const publickey = new Web3.PublicKey("DbukU9sPaNMyFKqRkuibhGG13qwXtoF5s55Y9cL246cR") // PUBKEY of person you want to create the token account

// const decoded = base58.decode('22fhvBjy6YNyFyCWdiiuAhDrnSuwBnTEermmPFfHhTa7H2DVuy6kXaW7XQ6ZVGisoQbF2fmD5YFh71NwQKo3UdgG')
// const keyPair = Web3.Keypair.fromSecretKey(decoded)
// // const tokenMint = "Cv1NoDCPRsrY4TWpekNpbRqw9va6UJz4aPvjS4nPTNKw"
// const tokenMint = new Web3.PublicKey("Cv1NoDCPRsrY4TWpekNpbRqw9va6UJz4aPvjS4nPTNKw")
// const tokenAccount = new Web3.PublicKey("7iArhqzYZGrBP8dzQ8BXnvs3cvQzYPNWJQFHcAK5hwsq")
// // const tokenAccount = "7iArhqzYZGrBP8dzQ8BXnvs3cvQzYPNWJQFHcAK5hwsq"

// async function main(){
//     const mintToken = await token.mintTo(
//         connection,
//         keyPair,
//         tokenMint,
//         tokenAccount,
//         publickey,
//         100000000000 // because decimals for the mint are set to 9 
//       )
//     console.log(mintToken.toBase58());
// }

// main();


// ps to be editted. wrong addresses
import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('7GTrJBScwCd19etjHi57mi89rVdHsXEwW7w9nML3V9xb'), //mint 
        new Web3.PublicKey('GQnctU6oGdL3zx5jNuUotmNcXpjWBwMZb5nozSnbiirH'), //owner
        new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //authority
        100, //amount
    )
    console.log('mint Token ', mintToken)
    //mint token: 2f4A9nhYqkPjbmrtExbaGVSberTiN21MTNnyHQvBeGsW6dJDNjdzvbmNYEqSfddhNdWCEcyX5oQhFBERVoahRSrC

}
main()