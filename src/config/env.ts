// Environment configuration
export const env = {
  // API Configuration
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',

  // App Configuration
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'NEXAVERSE',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  // Authentication
  AUTH_TOKEN_KEY: 'authToken',
  AUTH_REFRESH_TOKEN_KEY: 'refreshToken',

  // Wallet Configuration
  WALLET_CONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',

  // Feature Flags
  ENABLE_MOCK_DATA: process.env.NEXT_PUBLIC_ENABLE_MOCK_DATA === 'true',
  ENABLE_DEBUG_MODE: process.env.NEXT_PUBLIC_ENABLE_DEBUG_MODE === 'true',

  // Third Party Services
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
} as const;

export type EnvConfig = typeof env;