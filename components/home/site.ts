/** Public contact & maps — keep in sync with business details */

export const SITE_PHONE_DISPLAY = "210 993 7763";
export const SITE_PHONE_TEL_HREF = "tel:+302109937763";

/** Short share link (opens full Google Maps) */
export const SITE_MAPS_SHARE_URL = "https://maps.app.goo.gl/qVT71w9j26mtoGYM6";

/**
 * Embed uses coordinates resolved from the share link (place on Google Maps).
 * If the pin moves, update lat,lng from Google Maps → share → embed.
 */
export const SITE_MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=37.9294842%2C23.7471073&output=embed&hl=el&z=17";
