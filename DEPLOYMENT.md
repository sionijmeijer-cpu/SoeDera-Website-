# SøDera Website - Deployment Guide

## Azure Static Web Apps Deployment

This project is configured to deploy to Azure Static Web Apps via GitHub Actions.

### Lock File Management

The project uses **npm** for CI/CD deployments to ensure compatibility with Azure Static Web Apps.

#### Before Pushing to GitHub:

If you're developing locally with a different package manager (pnpm, bun, yarn), you should generate a `package-lock.json` file before pushing:

```bash
# Generate package-lock.json
npm install

# Commit the lock file
git add package-lock.json
git commit -m "Add npm lock file for Azure deployment"
git push
```

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file is configured to:
1. Use Node.js 20
2. Install dependencies with npm
3. Build the project with Vite
4. Deploy to Azure Static Web Apps

### Required Secrets

Ensure your GitHub repository has the following secret configured:
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Get this from your Azure Static Web Apps resource

### Local Development

You can use any package manager locally:

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

# Using yarn
yarn install
yarn dev
```

### Build Command

```bash
npm run build
```

Output directory: `dist/`

### Environment Variables

If you need environment variables for production, add them in:
- Azure Portal → Your Static Web App → Configuration → Application settings

### Troubleshooting

**Issue: GitHub Actions fails with "lock file not found"**
- Solution: Run `npm install` locally and commit the `package-lock.json` file

**Issue: Build fails in Azure**
- Check the GitHub Actions logs in the "Actions" tab
- Verify all dependencies are listed in `package.json`
- Ensure build command works locally: `npm run build`

**Issue: Deployment succeeds but site doesn't work**
- Check that `output_location` is set to `dist` in the workflow
- Verify routing configuration in `staticwebapp.config.json` (if using client-side routing)

### Support

For issues or questions, contact the development team.
