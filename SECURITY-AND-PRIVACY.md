# Security and privacy

Keep credentials in private environment configuration. Public examples are
blank. Never commit .env files, logs, database exports or signed recovery bytes.
Do not send provider errors, wallet messages, session tokens or keys to logs.

Challenges are single-use exact-message hashes. Session tokens are random;
only hashes are persisted. Mutations are same-origin JSON, and account/unit
access is checked against the authenticated wallet. The read-only RPC gateway
rejects signing/broadcast, arbitrary upstream URLs and unbounded requests.

Persisted data includes wallet addresses, settings, verified unit state,
events and temporary server-only execution recovery records. Historical
numeric observations are processed without retention. Address data can be
personal data even when also public on-chain.

Export and deletion are owner-scoped. Deleting off-chain data cannot erase
blockchain records or revoke already granted contract permissions. Do not
confuse integrity checksums with on-chain identity or reputation attestations.
Send private security reports to dev@kx9.tech.
