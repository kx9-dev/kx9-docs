# Operations and recovery

Use HTTPS and one public API origin per app host. Preserve the original Host
and forwarded-host through the trusted reverse proxy. Configure PostgreSQL
backups and explicit reviewed schema migrations. Never migrate at startup.

The strategy worker requires a continuously running process. Watch health,
fresh blocks, oracle age, sequencer status, DB errors and pending receipts.
Keep external-provider credentials out of request logs and monitoring tags.

If submission outcome is uncertain, first inspect the durable outbox hash and
the actual chain. Do not clear the outbox and re-sign. An unresolved signed
submission may intentionally halt new signing until reconciled. A change to
Standby blocks a newly executed call on-chain, but cannot undo finality.

Releases are reversible source deployments, not reverse transactions. Back up
settings before migration; do not delete contract history or infer execution
success from a frontend state change.

Public landing: https://kx9.tech. Public app: https://app.kx9.tech.
Maintainer contact: dev@kx9.tech.
