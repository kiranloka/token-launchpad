import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-end">
      <div>solana</div>
      <div>
        <WalletMultiButton style={{}}></WalletMultiButton>
      </div>
    </div>
  );
}
