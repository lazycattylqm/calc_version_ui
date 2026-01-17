# Environment Variables

This project uses Vite's environment variables system.

## Files

- `.env.development` - Development environment variables (used with `npm run dev`)
- `.env.production` - Production environment variables (used with `npm run build`)

## Usage

Environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

Example:

```typescript
import config from './config';

console.log(config.env); // 'development' or 'production'
console.log(config.apiBaseUrl); // API base URL
```

## Available Variables

- `VITE_APP_ENV` - Current environment (development/production)
- `VITE_API_BASE_URL` - API base URL
- `VITE_APP_TITLE` - Application title

## Adding New Variables

1. Add the variable to `.env.development` and `.env.production`
2. Add the variable to `src/config/index.ts`
3. Prefix all variables with `VITE_`
4. Restart the dev server to load new variables
