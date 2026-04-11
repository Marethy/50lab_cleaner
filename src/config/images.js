// --- Shoe cleaning: basic ---
import shoeBasicBefore1 from "../assets/images/services/shoe-basic-before-1.jpg?format=webp";
import shoeBasicBefore2 from "../assets/images/services/shoe-basic-before-2.jpg?format=webp";
import shoeBasicAfter1  from "../assets/images/services/shoe-basic-after-1.jpg?format=webp";
import shoeBasicAfter2  from "../assets/images/services/shoe-basic-after-2.jpg?format=webp";

// --- Shoe cleaning: luxury ---
import shoeLuxuryBefore1 from "../assets/images/services/shoe-luxury-before-1.jpg?format=webp";
import shoeLuxuryBefore2 from "../assets/images/services/shoe-luxury-before-2.jpg?format=webp";
import shoeLuxuryAfter1  from "../assets/images/services/shoe-luxury-after-1.jpg?format=webp";
import shoeLuxuryAfter2  from "../assets/images/services/shoe-luxury-after-2.jpg?format=webp";

// --- Bag cleaning: basic ---
import bagBasicBefore from "../assets/images/services/bag-basic-before.jpg?format=webp";
import bagBasicAfter  from "../assets/images/services/bag-basic-after.jpg?format=webp";

// --- Bag cleaning: luxury ---
import bagLuxuryBefore from "../assets/images/services/bag-luxury-before.jpg?format=webp";
import bagLuxuryAfter  from "../assets/images/services/bag-luxury-after.jpg?format=webp";

// --- Priority 24h ---
import priority24h from "../assets/images/services/priority-24h.jpg?format=webp";

export const serviceImages = {
  regularShoes: {
    before: [shoeBasicBefore1, shoeBasicBefore2],
    after:  [shoeBasicAfter1,  shoeBasicAfter2],
  },
  luxuryShoes: {
    before: [shoeLuxuryBefore1, shoeLuxuryBefore2],
    after:  [shoeLuxuryAfter1,  shoeLuxuryAfter2],
  },
  regularBag: {
    before: [bagBasicBefore],
    after:  [bagBasicAfter],
  },
  luxuryBag: {
    before: [bagLuxuryBefore],
    after:  [bagLuxuryAfter],
  },
  priority: {
    image: priority24h,
  },
};

export const getServiceImages = (serviceId) => {
  switch (serviceId) {
    case 1:
      return { beforeImage: serviceImages.regularShoes.before[0], afterImage: serviceImages.regularShoes.after[0] };
    case 2:
      return { beforeImage: serviceImages.luxuryShoes.before[0],  afterImage: serviceImages.luxuryShoes.after[0] };
    case 3:
      return { beforeImage: serviceImages.regularBag.before[0],   afterImage: serviceImages.regularBag.after[0] };
    case 4:
      return { beforeImage: serviceImages.luxuryBag.before[0],    afterImage: serviceImages.luxuryBag.after[0] };
    default:
      return { beforeImage: serviceImages.priority.image, afterImage: serviceImages.priority.image };
  }
};
