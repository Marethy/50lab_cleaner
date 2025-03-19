// Regular shoes
import sa1 from "../assets/images/sa1.jpg";
import sb1 from "../assets/images/sb1.jpg";
import sa2 from "../assets/images/sa2.jpg";
import sb2 from "../assets/images/sb2.jpg";

// Luxury bags
import bb1 from "../assets/images/bb1.jpg";
import ba1 from "../assets/images/ba1.jpg";

// Luxury shoes
import slb1 from "../assets/images/slb1.jpg";
import sla1 from "../assets/images/sla1.jpg";

// Luxury bag
import blb1 from "../assets/images/blb1.jpg";
import bla1 from "../assets/images/bla1.jpg";

// Deodorizing product
import spkm1 from "../assets/images/spkm1.jpg";
import spkm2 from "../assets/images/spkm2.jpg";

// Priority service
import ut24h1 from "../assets/images/ut24h1.jpg";

export const serviceImages = {
  regularShoes: {
    before: [sb1, sb2],
    after: [sa1, sa2],
  },
  luxuryShoes: {
    before: [slb1],
    after: [sla1],
  },
  regularBag: {
    before: [bb1],
    after: [ba1],
  },
  luxuryBag: {
    before: [blb1],
    after: [bla1],
  },
  deodorizing: {
    before: [spkm1],
    after: [spkm2],
  },
  priority: {
    image: ut24h1,
  },
};

export const getServiceImages = (serviceId) => {
  switch (serviceId) {
    case 1:
      return {
        beforeImage: serviceImages.regularShoes.before[1],
        afterImage: serviceImages.regularShoes.after[1],
      };
    case 2:
      return {
        beforeImage: serviceImages.luxuryShoes.before[0],
        afterImage: serviceImages.luxuryShoes.after[0],
      };
    case 3:
      return {
        beforeImage: serviceImages.regularBag.before[0],
        afterImage: serviceImages.regularBag.after[0],
      };
    case 4:
      return {
        beforeImage: serviceImages.luxuryBag.before[0],
        afterImage: serviceImages.luxuryBag.after[0],
      };
    case 5:
      return {
        beforeImage: serviceImages.deodorizing.before[0],
        afterImage: serviceImages.deodorizing.after[0],
      };
    default:
      return {
        beforeImage: serviceImages.priority.image,
        afterImage: serviceImages.priority.image,
      };
  }
}; 