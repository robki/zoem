// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'nyNCI5DcIWo3FkNtqKVTif5XHGO8rx9a',
  CLIENT_DOMAIN: 'zoem.eu.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'https://zoem.eu.auth0.com/userinfo', // e.g., http://localhost:8083/api/
  REDIRECT: `http://localhost:3000/#/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://localhost:300/#/roles'
};