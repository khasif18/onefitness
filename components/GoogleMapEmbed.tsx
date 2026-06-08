// ─── Google Maps Embed ──────────────────────────────────────
// This must be an EMBED URL (from "Share > Embed a map"), NOT a normal maps link.
// To get the correct URL:
//   1. Go to Google Maps → search for your gym location
//   2. Click "Share" → "Embed a map"
//   3. Copy ONLY the src="..." value from the iframe code
//
// A valid embed URL starts with:
//   https://www.google.com/maps/embed?pb=...
//
// A normal maps link (WILL NOT WORK in iframe):
//   https://www.google.com/maps/place/...
//   https://maps.google.com/...
// ──────────────────────────────────────────────────────────────

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.5!2d83.395!3d18.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be2c1a0000001%3A0x1!2sVizianagaram%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export function GoogleMapEmbed() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Find Us</h2>
        <p className="mt-1 text-sm text-slate-400">
          Visit our gym in Boggula Dibba Area, Vizianagaram
        </p>
      </div>

      <div className="relative w-full min-h-[350px] overflow-hidden rounded-2xl border border-white/10">
        <iframe
          src={MAP_EMBED_URL}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="One Fitness Location Map"
        />
      </div>
    </div>
  );
}
