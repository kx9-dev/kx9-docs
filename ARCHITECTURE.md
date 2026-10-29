# Architecture

Browser → same-origin /api → Core → PostgreSQL and private mainnet RPC.
Operator wallet → its own network provider → on-chain Shield.
Optional executor → verified router through Shield, only when enabled.

The browser receives safe contract addresses and capability flags, never
provider credentials, executor keys or signed recovery bytes. Wallet sessions
and unit IDs are authorized on the server, not trusted from browser input.
The landing and Command are the same existing product at separate hostnames.

The Analyst uses deterministic strategy rules. Optional model text receives
fixed non-identifying proposal facts and cannot select amounts, waive checks,
call tools or authorize a transaction. Risk decisions remain code-controlled.
