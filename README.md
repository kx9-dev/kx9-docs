# KX-9 Documentation

Architecture, operating flows, OpenAPI specification, security boundaries and mainnet configuration.

[Website](https://kx9.tech) · [Command app](https://app.kx9.tech) · [Documentation](https://github.com/kx9-dev/kx9-docs) · [Releases](https://github.com/kx9-dev/kx9-docs/releases) · [Contact](mailto:dev@kx9.tech)

**Source release 0.1.0.** MIT-licensed source, not an audit or a claim of
active trading. Robinhood mainnet chain ID: **4663**. KX-9 is not affiliated
with Robinhood Markets or NVIDIA Corporation. Physical AI · NVDA is a
rule-based stock-token allocation strategy, not an NVIDIA AI service.

## Documentation map
- [Architecture and boundaries](ARCHITECTURE.md)
- [End-to-end flows](FLOWS.md)
- [Mainnet configuration](MAINNET.md)
- [API contract](openapi.yaml)
- [Security and privacy](SECURITY-AND-PRIVACY.md)
- [Operation and recovery](OPERATIONS.md)
- [Release verification](RELEASES.md)

## Validate and package
Requires Node.js 22+.

```sh
npm test
npm pack
```

The OpenAPI file is the implementation contract, not a hosted API promise.
The public website documentation is at https://kx9.tech/docs.html.
Examples must not contain credentials, private wallet data or invented
deployment addresses.

## Status
The Core/API and interfaces exist. A connected mainnet RPC does not prove
that factory deployments, market feeds, execution liquidity or spending
authority are configured. Reputation/uptime claims remain unavailable unless
independently measured. No ERC-8004 attestation is manufactured.

## Repositories
| Repository | Responsibility |
| --- | --- |
| [kx9-web](https://github.com/kx9-dev/kx9-web) | KX-9 landing page and wallet-connected Command app for Robinhood mainnet. |
| [kx9-core](https://github.com/kx9-dev/kx9-core) | Wallet-authenticated Core API, deterministic trading rules, risk checks and mainnet execution controls. |
| [kx9-contracts](https://github.com/kx9-dev/kx9-contracts) | Solidity Shield vaults and factory with operator limits, supervised approvals and local-chain tests. |
| [kx9-docs](https://github.com/kx9-dev/kx9-docs) | Architecture, operating flows, OpenAPI specification, security boundaries and mainnet configuration. |

## Contributing and security
Read [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Maintainer contact: **dev@kx9.tech**.

## License
[MIT](LICENSE). Third-party dependencies and externally loaded fonts/libraries
retain their respective licenses; see [NOTICE](NOTICE).
