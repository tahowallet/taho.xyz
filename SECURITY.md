# Security Policy

Note that Taho is a community project and has no standalone token or dedicated
full-time team. Security issues are, however, triaged by the team and a best
effort is made to respond quickly, especially in the case of a higher severity
issue.

## Reporting a Vulnerability

To report a vulnerability, please email the contact listed at
https://taho.xyz/security.txt and include:

- The affected component or site.
- A text description of the vulnerability.
- Preferably, code to reproduce the issue (unless it is a protocol issue).
- If available, an initial assessment of impact, ideally using the
  https://www.first.org/cvss/[Common Vulnerability Scoring System]. There is
  a https://www.first.org/cvss/calculator/3.1[calculator] to help. Note that
	for CVSS purposes, Thesis and its project teams generally treat fund
	compromise as a loss of Confidentiality.
- If desired, a suggestion on how to fix the issue.
- If reporting a sensitive vulnerability in an encrypted message, please
  include a key for encrypting replies, or a secure medium to contact you.
	Note that for simplicity, Thesis and its project teams prefer email, but can
	work with Signal, Keybase, and Telegram on a case-by-case basis. Please
	always file an initial report via email, even if follow-up is handled via a
	different channel.

Please also note the suggestions on email structure below, and prefer to
encrypt particularly sensitive vulnerabilities with one of the keys listed at
https://taho.xyz/security.txt .

### Timelines

The relevant team will make a best effort to respond to a new report **within
48 hours**. This response may be a simple acknowledgement that the report was
received, or may be an initial assessment from the team. Unless the report is
assessed as irrelevant or incorrect, this response will include expected next
steps and communication time frames from the relevant team. Since the team is
not full-time dedicated to Taho, note that this turnaround time should be
considered best-effort.

### Assessments

The team will try to make an initial assessment of a bug's relevance, severity,
and exploitability, and communicate this back to the reporter.

Taho does not have a set bug bounty policy, but we may choose to work to source
a bounty for disclosures of severe issues.

### Email structure

For simplicity, we recommend a standard flow for the vulnerability report:

```
SUMMARY

A summary of the issue.

SAMPLE EXPLOIT STEPS

A series of steps that can be used to exploit this vulnerability.

IMPACT (optional)

If available, an initial assessment of impact. Usage of the
https://www.first.org/cvss/[Common Vulnerability Scoring System] is
encouraged. There is a https://www.first.org/cvss/calculator/3.1[calculator]
to help. Note that for CVSS purposes, we generally treat fund compromise as a
loss of Confidentiality.

DETAILS

A detailed description of the vulnerability, including any information that
can be used to better understand and/or reproduce the vulnerability.
Preferably include code to reproduce.

SUGGESTED REMEDIATION (optional)

If desired, a suggestion on how to fix the issue.

FOLLOWUP INFO (optional)

If this is an encrypted message, include your PGP key for an encrypted
reponse. Alternatively, you can include a Telegram handle or Signal number.
```

### Email subject

To help in filtering reports, please use an email subject in this format, omitting
severity if you are not certain of impact:

```
[SEVERITY] [component] issue: [brief summary]
```

<details>
<summary>Sample Vulnerability Report Email (adapted from https://github.com/keep-network/tbtc/issues/664[keep-network/tbtc#664])</summary>

```
Subject: [8.6 HIGH] Solidity contracts issue: Incorrect handling of
         Bitcoin addresses can lead to deposit redemption failure

Body:

SUMMARY

Funding transactions that use p2pkh are accepted during funding but can be used
to trigger ECDSA fraud during redemption.

SAMPLE EXPLOIT STEPS

Eve creates a deposit, funds it using a P2PKH or P2SH output, and requests redemption. The signing group is unable to provide a redemption proof, and eventually Eve seizes the group's bonds.

IMPACT

We consider this an 8.6 on the CVSS 3.1 scoring scale, as it can compromise
signer funds, and can lead to signer fund loss that is value-positive for the
attacker. Attacker profit is ~50% the value of the funds they are willing to
put into the attack, while per-signer loss is ~12.5% of the funds the
attacker puts into the attack.

CVSS 3.1 vector string: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N/CR:M

DETAILS

When providing a funding proof, three types of outputs are accepted: P2WPKH, P2PKH, and P2SH outputs. The system is designed to handle the first and fails for the second and third.

If a P2PKH output is provided, the signing group is able to generate a scriptSig which can spend the output. However, that will trigger the ECDSA fraud flow as the signature wasn't authorized.

If a P2SH output is provided, then the public key of the keep will be interpreted as a script. This most likely results in a locked output.

SUGGESTED REMEDIATION

Disallow P2PKH and P2SH outputs when providing funding proofs.

FOLLOWUP INFO

Please encrypt replies to PGP key https://keybase.io/shadowfiend/pgp_keys.asc,
or reply via Signal at +1-123-456-6790.
```
</details>
