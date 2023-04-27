// carouselData.js
// This file is used to store the data for the carousel on the homepage.
// I put it in this file to keep the JSX files clean.

// importing all the relevant images.
// NOTE: I used different stock images because I was unable to download some images from Adobe XD.
import fsJersey from '../public/Rectangle7.png';
import blanket from '../public/other-prizes/blanket.png';
import backpack from '../public/other-prizes/backpack.png';
import bobblehead from '../public/other-prizes/bobblehead.png';
import derek from '../public/other-prizes/derek.png';

export const prizes = [
  {
    place: '1ST PLACE',
    description: 'FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT',
    image: fsJersey,
  },
  {
    place: '2ND PLACE',
    description: 'FRESNO STATE BACKPACK, MOPHIE POWER PACK, PEPSI PRODUCT',
    image: backpack,
  },
  {
    place: '3RD PLACE',
    description: 'FRESNO STATE BLANKET, PEPSI PRODUCT',
    image: blanket,
  },
  {
    place: '4TH PLACE',
    description: 'DEVANTE ADAMS BOBBLEHEAD',
    image: bobblehead,
  },
  {
    place: '5TH PLACE',
    description: 'BIG 3 BOBBLEHEAD (PAUL GEORGE, AARON JUDGE, DEREK CARR',
    image: derek,
  },
];
