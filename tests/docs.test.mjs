import test from "node:test";import assert from "node:assert/strict";import fs from "node:fs";
test("required operating docs exist",()=>{for(const n of ["ARCHITECTURE.md","FLOWS.md","MAINNET.md","SECURITY-AND-PRIVACY.md","OPERATIONS.md","RELEASES.md"])assert(fs.readFileSync(n,"utf8").length>100);});
test("API describes actual routes and source boundaries",()=>{const s=fs.readFileSync("openapi.yaml","utf8");assert(s.includes("/v1/auth/nonce"));assert(s.includes("/v1/settings/protocols"));assert(s.includes("/rpc"));});
