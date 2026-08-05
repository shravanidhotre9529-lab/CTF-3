# CTF Challenge Pack

This repository contains three beginner-friendly web security challenges designed for a club or classroom environment.

## Challenges

1. Secret Sauce
   - Category: Web Exploitation
   - Focus: JWT secret reuse and privilege escalation

2. Webhook Tester
   - Category: Web Exploitation
   - Focus: Internal header leakage and improper trust of outbound requests

3. Deep Merge
   - Category: Web Exploitation
   - Focus: Prototype pollution via unsafe recursive object merging

## Run locally

Each challenge can be started from its own folder:

```bash
cd challenge-1-secret-sauce
npm install
npm start
```

Then open:
- http://localhost:3000

```bash
cd challenge-2-webhook-tester
npm install
npm start
```

Then open:
- http://localhost:3001

```bash
cd challenge-3-deep-merge
npm install
npm start
```

Then open:
- http://localhost:3002

## Deployment notes

Each challenge includes a Vercel configuration file and is structured as a stateless Express app compatible with serverless hosting.

CTF Challenges Cyber Security club SCOE
