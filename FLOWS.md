# Mechanisms and end-to-end flows

## Connect and authenticate
1. Connect the operator's EVM wallet and select chain 4663.
2. Request /api/v1/auth/nonce with address and chain ID.
3. Sign the exact domain-bound, five-minute message.
4. Verify the signature against the stored message hash and unused challenge.
5. Receive a 24-hour HttpOnly secure session or memory-only bearer token.
6. Discover actual factory units and verify their on-chain operator.
7. No factory/unit means an empty list, not a demonstration vault.

## Configure protocols
Sign in → edit → explicitly save → server validates and persists.
Account defaults can be saved before commissioning. Discovered units receive
defaults; each existing unit has its own separately saved settings.
Selected does not mean trading. All protocols start off.

Accumulate schedules buys. Balance checks allocation drift. Guard requires
confirmed transfer-derived purchase cost, never an assumed entry price.
Trend uses fresh oracle observations rather than invented daily candles.
Physical AI schedules NVDA stock-token buys with an optional dip allocation;
it is not a robotics or NVIDIA AI integration.

## Commission and set limits
Verified factory → operator confirms commissioning transaction → successful
receipt → unit ownership discovery. Shield edits and mode changes require
wallet-signed transactions, successful receipt verification and chain read-back.
Missing prerequisites never produce a local fake-success branch.

## Decide, approve, execute
Saved rule → real balances/fresh feed observations → proposed intent →
class/mode/permissions/caps/cooldown/balance/sequencer/quote checks.
A failure records a veto and sends no transaction.

Supervised mode: operator signs approveProposal → Core verifies sender,
destination, calldata, cap, deadline and unused approval → executor may submit.
Autonomous mode still needs verified tier, explicit configuration and every
risk check. Standby blocks new submissions; it cannot cancel a broadcast tx.

Before signing, a new autonomous proposal must be durably committed.
Before broadcast, persist exact signed bytes and hash under a serialized nonce
lock. Recovery reuses the same transaction; it must not sign a new nonce for
the same proposal. Submitted and confirmed are different states.
Receipt logs establish actual token movements and purchase cost.

## Records, updates and Passport
Actual events → private owner-scoped Black Box → integrity checksum.
Authenticated SSE announces updates; the UI also polls and refreshes on focus.
A SHA-256 record is not an independent signature or registry attestation.
Passport identity uses verified ownership. Unmeasured scores stay unavailable.

## Historical test
Sign in → save settings → supply 2–366 increasing UTC date/close CSV rows →
validate numeric observations → deterministic daily-close replay →
return/benchmark/drawdown/trade results. No file/history is retained.
Results exclude fees, gas, slippage, liquidity and taxes; they are not forecasts.

## Export, sign out, delete
Export returns the signed-in account's off-chain data only.
Sign out revokes the current session. Explicitly confirmed deletion removes
the account and its sessions/records, not public blockchain history, vault
funds, pending transactions or on-chain permissions. Set Standby on-chain first
if the objective is to stop activity.
