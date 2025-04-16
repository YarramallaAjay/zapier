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
import { Request, Response } from "express";
import { Apiresponse } from "@/utils/Response";

export class SolTransactionHandler {
  static async executeTransaction(req: Request, res: Response) {
    try {
      const { from, to, amount } = req.body;

      // Initialize Solana connection
      const connection = new Connection(process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com");

      // Create transaction
      const transaction = new Transaction().add(
        // Add your transaction instructions here
        // This is a placeholder - implement actual transaction logic
        SystemProgram.transfer({
          fromPubkey: new PublicKey(from),
          toPubkey: new PublicKey(to),
          lamports: amount,
        })
      );
      console.log(LAMPORTS_PER_SOL)
      console.log(clusterApiUrl)

      // Sign and send transaction
      const signature = await connection.sendTransaction(transaction, [
        // Add your keypair here
        // This is a placeholder - implement actual signing logic
        Keypair.generate(),
      ]);

      Apiresponse.success(res, { signature }, "SOL transaction completed");
    } catch (error) {
      Apiresponse.error(res, "Failed to execute SOL transaction", 500, error);
    }
  }
}
  