/**
 * EmailJS configuration.
 *
 * Values are public client-side credentials (intentional — EmailJS public keys
 * are designed to be visible in browser source). Env vars take priority so the
 * Vercel project dashboard can override them without a redeploy; the hard-coded
 * fallbacks guarantee the forms work even when env vars are absent.
 *
 * To set in Vercel: Project → Settings → Environment Variables
 *   VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 */
export const EMAILJS = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_xzvm2db",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_i25gn75",
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "uX5HE9XX3c98LTqzw",
};
