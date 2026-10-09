# MitLivMed

**What no one talks about: what happens after the diagnosis?**

MitLivMed is a recovery companion for people living with bipolar disorder and other serious mental health conditions. We focus on everyday life *after* diagnosis — not clinical intervention, but the stuff that actually helps: lived experience, peer support, and hope that feels real.

This repo is the pre-launch website at [mitlivmed.dk](https://mitlivmed.dk).

## About the project

MitLivMed started with a simple question: *where do you go when the doctor's appointment is over, but life still feels hard?*

We're building a community and platform rooted in lived experience — where people share what helped them, not what a textbook says should help. Think of it as walking in each other's footsteps.

We're based in Copenhagen and currently launching in Danish, with international ambitions.

## Tech stack

- Plain static **HTML, CSS and vanilla JavaScript**: no framework, no build step
- Everything that is published lives in `site/` (each page has its CSS inline; shared: `share.css`, `share.js`, `widow.js`)
- Forms and payments talk to the MitLivMed API (`mitlivmed-api`)
- Deployed on **Vercel** (`vercel.json`: no build, output folder `site`)

## Local development

```sh
git clone https://github.com/MitLivMed/mlw-prelaunch-website.git
cd mlw-prelaunch-website/site
python3 -m http.server 8000
```

Open http://localhost:8000. Rewrites and redirects from `vercel.json` only work with `npx vercel dev` from the repo root.

## Contributing

We're a small team in early stages. If you're curious about what we're building or want to get involved, reach out at [kontakt@mitlivmed.dk](mailto:kontakt@mitlivmed.dk).

## License

All rights reserved. This code is shared publicly for transparency, not for reuse.
