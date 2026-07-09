# Raihan Token

JavaScript Hardhat project configured for Solidity 0.8.28 with OpenZeppelin Contracts and Hardhat Toolbox.

## Commands

```bash
npm run compile
npm test
npm run node
npm run deploy:sepolia
```

## Sepolia Deployment

Create a `.env` file from `.env.example`, then set:

- `SEPOLIA_RPC_URL`: Ethereum Sepolia RPC endpoint
- `PRIVATE_KEY`: funded deployer wallet private key, without `0x`
- `ETHERSCAN_API_KEY`: optional, for contract verification

Deploy:

```bash
npm run deploy:sepolia
```
