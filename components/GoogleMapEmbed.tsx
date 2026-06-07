// ─── Google Maps Embed ──────────────────────────────────────
// Replace the placeholder URL below with your actual gym location embed URL.
// To get the URL:
//   1. Go to Google Maps → search for your gym
//   2. Click "Share" → "Embed a map"
//   3. Copy the src URL from the iframe code
// ──────────────────────────────────────────────────────────────

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.35!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRasapudipalem%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000";

export function GoogleMapEmbed() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Find Us</h2>
        <p className="mt-1 text-sm text-slate-400">
          Visit our gym in Rasapūdipalem, Visakhapatnam
        </p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "250px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="OneFitness Gym Location - Rasapūdipalem, Visakhapatnam"
        />
      </div>
    </div>
  );
}
