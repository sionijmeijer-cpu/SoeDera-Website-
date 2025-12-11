# GitHub & Azure Static Web Apps Setup Guide

## Problem Solved

Your workflow now automatically generates `package-lock.json` before deploying to Azure. This resolves the "Dependencies lock file is not found" error.

## How It Works

The updated `.github/workflows/deploy.yml` now:

1. **Removes conflicting lock files** - Deletes `pnpm-lock.yaml`, `yarn.lock`, and `bun.lock`
2. **Generates npm lock file** - Runs `npm install --package-lock-only` to create `package-lock.json`
3. **Installs dependencies** - Uses `npm ci` for clean, reproducible installs
4. **Builds the project** - Runs `npm run build`
5. **Deploys to Azure** - Uploads the `dist` folder to Azure Static Web Apps

## What You Need to Do

### 1. Commit and Push Your Changes

```bash
git add .github/workflows/deploy.yml GITHUB_SETUP.md
git commit -m "Fix: Generate package-lock.json for Azure deployments"
git push origin main
```

### 2. Configure Azure Secrets (One-Time Setup)

Go to your GitHub repository and add these secrets:

**Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:
- `AZURE_CLIENT_ID` - Your Azure app registration client ID
- `AZURE_TENANT_ID` - Your Azure tenant ID
- `AZURE_SUBSCRIPTION_ID` - Your Azure subscription ID
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Get from Azure Portal → Your Static Web App → Manage deployment token

### 3. Verify the Workflow

1. Push your code (you just did this)
2. Go to GitHub → **Actions** tab
3. Watch the workflow run
4. It should complete successfully and deploy to Azure

## Local Development

Your team can continue using any package manager:

```bash
# Using npm
npm install
npm run dev

# Using pnpm
pnpm install
pnpm dev

# Using bun
bun install
bun dev
```

The workflow automatically generates the npm lock file during deployment.

## Troubleshooting

**If the workflow still fails:**

1. Check Azure secrets are all set correctly
2. Verify `AZURE_STATIC_WEB_APPS_API_TOKEN` is copied exactly from Azure Portal
3. Check the GitHub Actions logs for specific error messages
4. Ensure your Azure Static Web App is in the same subscription as your secrets

**If you see "node_modules not found" errors:**

This is normal in CI/CD. The workflow uses `npm ci` which installs from `package-lock.json` instead of `package.json`, ensuring exact versions.

## Next Steps

The workflow will now:
- ✅ Generate `package-lock.json` automatically
- ✅ Build your project
- ✅ Deploy to Azure on every push to `main`
- ✅ Create preview deployments for pull requests

Your Azure deployments should now work without lock file errors! 🚀
