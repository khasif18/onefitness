// Google Maps embed for the gym location.

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=1-7-2+Boggula+Dibba+Rd,+Alakananda+Colony,+Vizianagaram+Cantonment,+Vizianagaram,+Andhra+Pradesh+535003&t=&z=17&ie=UTF8&iwloc=&output=embed";

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
