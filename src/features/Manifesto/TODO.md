notes/high-level spec

- we will use firebase firestore + cloud functions for back-end
  - we might use firebase hosting or use netlify
- we will implement the discord role distribution
  - we will use discord api directly
- flow is roughly: open webpage > connect dApp > check if it’s tally > sign in with ethereum > sign the petition (might be 2 separate steps) > success > show poap link (if we have them) + enter discord id and grant role
  - apis: authenticate, sign petition, check discord id, assign role
- first Massimo won’t implement any design to avoid double work, and when we have design he can do that (if we don’t have the design ready he will wrap up something based on the webpage)
- poaps will be an optional part in development - we will display the links if we have them
- web3-onboard should be the first thing to look at if we need a lib (not requirement to use that though)
- Massimo will try to cut only not important corners as the dapp is likely to stay with us longer

Needs:

- We will need to create a firebase project cc @Antonio
- We will need discord credentials cc @Nax

Timeline

- Massimo aims to finish this until 18th. If he needs help, he will let us know

With the petition dapp. Let’s add a tweet as part of the flow. We just need a pop-up window so the user can share it. No need to verify the tweet. fwiw I’m also fine if users can dismiss or click out of the window and complete the flow anyway if they want to.
