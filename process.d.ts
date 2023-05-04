declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    AAD_CLIENT_ID: string;
    AAD_CLIENT_SECRET: string;
    AAD_TENANT_ID: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
