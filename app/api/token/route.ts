import { Keypair } from "@solana/web3.js";
import { NextApiRequest, NextApiResponse } from "next";
import { connection, NextResponse } from "next/server";
import {
  Connection,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  PublicKey,
} from "@solana/web3.js";
import {
  TOKEN_2022_PROGRAM_ID,
  createInitializeMetadataPointerInstruction,
  createInitializeMintInstruction,
  getMintLen,
  ExtensionType,
  TYPE_SIZE,
  LENGTH_SIZE,
} from "@solana/spl-token";
import { createInitializeInstruction, pack } from "@solana/spl-token-metadata";
import { Public_Sans } from "next/font/google";


async function uploadToArweave(file: File, metadata: any) {
  return "https://arweave.net/your-metadata-uri";

}


export async function POST(req: NextApiRequest, res: NextApiResponse) {

  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const symbol = formData.get('symbol') as symbol;
    const supply = formData.get('supply') as string;
    const decimals = parseInt(formData.get('decimals') as string);
    const publicKey = new PublicKey(formData.get('publicKey') as string);
    const file = formData.get('file') as file;

    const metadata = {
      name,
      symbol,
      description,
      image: image_url,
      attributes: []
    }

    const uri = uploadToArweave(file, metadata);

    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const mintKeyPair = Keypair.generate();

    const metadataStruct = {
      mint: mintKeyPair.publicKey,
      name,
      symbol,
      uri,
      additionalMetadata: []
    };

    const minLen = getMintLen((ExtensionType.MetadataPointer));
    const metadataLen = TYPE_SIZE + LENGTH_SIZE + pack(metadataStruct).length;


    const lamport = await connection.getMinBalanceForRentException(
      minLen + metadataLen
    )

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: mintKeyPair.publicKey,
        space: mintLen,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID
      }),
      createInitializeMetadataPointerInstruction(
        mintKeyPair.publicKey,
        publicKey,
        mintKeyPair.publicKey,
        TOKEN_2022_PROGRAM_ID
      ),
      createInitializeMintInstruction(
        mintKeyPair.publicKey,
        decimals,
        publicKey,
        null,
        TOKEN_2022_PROGRAM_ID
      ),
      createInitializeInstruction({
        programId: TOKEN_2022_PROGRAM_ID,
        mint: mintKeyPair.publicKey,
        metadata: mintKeyPair.publicKey,
        name,
        symbol,
        uri,
        mintAuthority: publiKey,
        updateAuthority: publicKey, `
      }
      )

    )

    return NextResponse.jsoon({transactiona.serialize()})

  }
}
