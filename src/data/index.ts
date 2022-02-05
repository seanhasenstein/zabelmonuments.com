import { Contact } from '../types';
import CertifedPhoto from '../assets/images/certified.jpg';
import GreenbayPhoto from '../assets/images/greenbay.jpg';
import ManitowocPhoto from '../assets/images/manitowoc.jpg';
import SheboyganPhoto from '../assets/images/sheboygan.jpg';

export const stores: Record<Contact, Contact> = {
  greenbay: 'greenbay',
  manitowoc: 'manitowoc',
  sheboygan: 'sheboygan',
  ['ask-our-cm']: 'ask-our-cm',
};

export const contactInfo = [
  {
    contact: stores.greenbay,
    name: 'Green Bay Store',
    address: {
      street: '910 Lime Kiln Rd.',
      city: 'Green Bay',
      state: 'WI',
      zipcode: '54302',
    },
    phone: '9204327995',
    storeHours: '9:00am-4:30pm',
    image: GreenbayPhoto,
    mapsUrl: 'https://goo.gl/maps/x95eW7GdwsSVX2Jk7',
  },
  {
    contact: stores.manitowoc,
    name: 'Manitowoc Store',
    address: {
      street: '1232 N 8th Street',
      city: 'Manitowoc',
      state: 'WI',
      zipcode: '54220',
    },
    phone: '9206843829',
    storeHours: '8:00am-4:30pm',
    image: ManitowocPhoto,
    mapsUrl: 'https://goo.gl/maps/KN9Svpfyb18hJAbM7',
  },
  {
    contact: stores.sheboygan,
    name: 'Sheboygan Store',
    address: {
      street: '1423 N 13th Street',
      city: 'Sheboygan',
      state: 'WI',
      zipcode: '53081',
    },
    phone: '9204522271',
    storeHours: '9:00am-4:30pm',
    image: SheboyganPhoto,
    mapsUrl: 'https://goo.gl/maps/8tLHLG1Uuyem4gqGA',
  },
  {
    contact: stores['ask-our-cm'],
    name: 'Certified memorialist',
    image: CertifedPhoto,
    tag: 'Did you know? There are only 109 Certified Memorialists in the United States, three here in Wisconsin and Zabel Monuments is proud to have one of them.',
  },
];
