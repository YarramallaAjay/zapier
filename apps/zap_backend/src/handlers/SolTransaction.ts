// SolTransactionHandler.ts
import {
    Connection,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
    PublicKey,
  } from "@solana/web3.js";
  
  export async function sendSolTransactionHandler(data: any): Promise<any> {
    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  

      const fromKeypair = Keypair.generate();
  
      const toPublicKey = new PublicKey(data.to);
      const lamports = data.amount * LAMPORTS_PER_SOL; 
  
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromKeypair.publicKey,
          toPubkey: toPublicKey,
          lamports,
        })
      );
  
      // Sign and send the transaction
      const signature = await connection.sendTransaction(transaction, [fromKeypair]);
      await connection.confirmTransaction(signature, "confirmed");
  
      console.log("[SolTransactionHandler] Transaction successful, signature:", signature);
      return { message: "SOL transaction completed", signature };
    } catch (error) {
      console.error("[SolTransactionHandler] Error executing SOL transaction:", error);
      throw error;
    }
  }
  