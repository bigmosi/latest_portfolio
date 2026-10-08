import { profile } from "./sources";

// Google Analytics 4. Page views on route changes, outbound clicks and the CV
// download are recorded by GA4's enhanced measurement, so this only loads the tag
// and adds the events it doesn't cover. Nothing is sent in development.
const id = profile.gaMeasurementId;
const enabled = Boolean(id) && import.meta.env.PROD;

export const initAnalytics = () => {
  if (!enabled) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);

  document.addEventListener("click", (e) => {
    const href = e.target.closest?.("a")?.getAttribute("href") || "";
    if (href.startsWith("mailto:")) trackEvent("email_click");
    if (href.startsWith("tel:")) trackEvent("phone_click");
  });
};

export const trackEvent = (name, params) => {
  if (enabled && window.gtag) window.gtag("event", name, params);
};
