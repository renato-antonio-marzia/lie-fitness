// Placeholder Firebase — NON inizializza nulla finché le chiavi non sono in .env (Vite: VITE_*).
// Milestone successiva (#3) wirerà auth + Firestore.
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey);
