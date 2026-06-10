// Gallery images. Update src paths when real photos are added to public/images/gallery/

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
