import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function App() {
    const contract = "0x83e068936a402659D64Ec9E5D9973fCE022655E1";
    const tokenId = 646;
    const nftPrice = 0.44;

    return (
        <div
            style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "12px"}}
        >
            <CrossmintPayButton
                clientId="5d5e4551-d492-46ea-82d2-5caa83e99330"
                mintConfig={{
                  type: "x2y2-secondary-eth",
                  contractAddress: contract,
                  tokenId: tokenId,
                  totalPrice: nftPrice.toString()
                }}
                className="x2y2-xmint-btn"
            />

            <CrossmintPayButton
                clientId="5d5e4551-d492-46ea-82d2-5caa83e99330"
                mintConfig={{
                  type: "x2y2-secondary-eth",
                  contractAddress: contract,
                  tokenId: tokenId,
                  totalPrice: nftPrice.toString()
                }}
                className="x2y2-xmint-secondary-btn"
            />
        </div>
    );
}

export default App;
