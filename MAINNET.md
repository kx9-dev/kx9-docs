# Mainnet configuration

Chain ID is 4663. The owner deploys the KX9 token separately.
Website publication does not deploy contracts or authorize spending.

| Variable | Requirement |
| --- | --- |
| RPC_URL | Private HTTPS mainnet provider, server-only |
| DATABASE_URL | Private PostgreSQL connection |
| FACTORY | Verified deployed Shield factory |
| KX9_TOKEN | Owner-supplied token deployment |
| CLASS_THRESHOLDS | Positive increasing mk1/mk2/mk3 JSON thresholds |
| TOKENS | Known-symbol to verified token-address JSON map |
| FEEDS | Known-symbol to verified Chainlink feed-address JSON map |
| SEQUENCER_FEED | Compatible L2 uptime feed; up plus recovery grace required |
| ROUTER / QUOTER | Compatible SwapRouter02 and QuoterV2, fee 3000 |
| EXECUTOR_KEY | Private signer that matches the vault executor |
| ENABLE_LIVE_EXECUTION | Explicit true only after verified authorization |
| ANTHROPIC_API_KEY / ANTHROPIC_MODEL | Optional text-only narration |

Oracle rounds must be positive, complete and no older than one hour.
Sequencer recovery has a one-hour grace period. No feed, quote or permission
means no trade. No asset peg or price is invented.

Never enable a signer merely because RPC connectivity passed. Verify bytecode,
ownership, token decimals, feed units, router access, liquidity, class holdings,
limits, funding and recovery behavior before any mainnet submission.
