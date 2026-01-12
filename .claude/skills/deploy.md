# Deploy to Production

Deploys main branch to production via dual-remote push to Vercel.

## Background

Vercel free tier only deploys from personal GitHub accounts. Since the main repo is in the MitLivMed org, we mirror to a personal repo (`Fuhr/mlw-prelaunch-website`) which Vercel deploys from.

## Prerequisites

The personal remote must be configured:
```bash
git remote add personal git@github.com:Fuhr/mlw-prelaunch-website.git
```

Verify with: `git remote -v`

## Deployment Steps

1. Ensure you're on the main branch
2. Ensure all changes are committed
3. Push to both remotes:

```bash
# Push to org repo (source of truth)
git push origin main

# Mirror to personal repo (triggers Vercel deployment)
git push personal main --force
```

## Notes

- The org repo (`MitLivMed/mlw-prelaunch-website`) is the source of truth
- The personal repo (`Fuhr/mlw-prelaunch-website`) is only a deployment mirror
- Never commit directly to the personal repo
- `--force` ensures exact mirror even if repos diverge
- When upgrading to Vercel Pro, this workflow can be removed
