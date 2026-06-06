// ─── Gallery image data ────────────────────────────────────
// Currently using placeholder images from placehold.co
//
// WHEN YOU HAVE REAL PHOTOS, replace each src with a local path:
//   src: "/images/gallery/gym-1.jpg"
//
// Save real photos to: public/images/gallery/
//
// Files you need to replace:
//   1. gym-1.jpg          → Main gym floor / free weights area
//   2. gym-2.jpg          → Cardio zone with treadmills
//   3. equipment-1.jpg    → Cable machine station
//   4. equipment-2.jpg    → Squat racks and barbells
//   5. members-1.jpg      → Group fitness class
//   6. members-2.jpg      → Personal training session
//   7. transformation-1.jpg → Member progress (12-week)
//   8. transformation-2.jpg → Before and after photo
// ──────────────────────────────────────────────────────────────

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: "facility" | "equipment" | "members" | "transformations";
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Gym+Floor",
    alt: "Main gym floor with free weights area",
    category: "facility",
  },
  {
    id: 2,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Cardio+Zone",
    alt: "Cardio zone with treadmills and bikes",
    category: "facility",
  },
  {
    id: 3,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Cable+Machine",
    alt: "Cable machine station",
    category: "equipment",
  },
  {
    id: 4,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Squat+Racks",
    alt: "Squat racks and barbell setup",
    category: "equipment",
  },
  {
    id: 5,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Group+Class",
    alt: "Group fitness class in session",
    category: "members",
  },
  {
    id: 6,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=PT+Session",
    alt: "Personal training session",
    category: "members",
  },
  {
    id: 7,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Transformation",
    alt: "Member 12-week body transformation",
    category: "transformations",
  },
  {
    id: 8,
    src: "https://placehold.co/800x600/1e293b/94a3b8?text=Before+%26+After",
    alt: "Before and after progress photo",
    category: "transformations",
  },
];
