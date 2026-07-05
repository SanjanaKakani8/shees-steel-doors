import { Branch } from './types';

// NOTE: The fabricated luxury door catalog (fake finishes, features, and
// specs) that previously lived in this file has been removed. It was dead
// code — nothing imported DOOR_MODELS, CORE_FEATURES, or DIFFERENCES from
// this file — and it conflicted with the requirement to only present real,
// business-provided door information. The real 111-door catalog lives in
// ./data/doors.ts and is what the app actually uses.
//
// BRANCHES and CONTACT_PERSONS below are real and are still used by
// ContactPortal.tsx, so they're kept here unchanged.

export const BRANCHES: Branch[] = [
  {
    name: 'SHEES Steel Doors - Head Office',
    type: 'Head Office',
    address: 'Opp. Srinivasa Merchants Welfare Association (Mirchi Godown), Gooty Road, Anantapur, Andhra Pradesh - 515001.',
    landmark: 'Near Mirchi Godown',
    phones: ['9550209607', '8555949028'],
    mapQuery: 'SHEES Steel Doors Gooty Road Anantapur'
  },
  {
    name: 'SHEES Steel Doors - New Branch',
    type: 'New Branch',
    address: 'Near Mysore Narigamma Temple, Kalyandurgam Road, Nandamuri Nagar, Ananthapuramu - 515001. (A.P.)',
    landmark: 'Near Mysore Narigamma Temple',
    phones: ['6301028568', '8555949028'],
    mapQuery: 'SHEES Steel Doors Kalyandurgam Road Anantapur'
  }
];

export const CONTACT_PERSONS = [
  { name: 'S. Mohammad Rafi', role: 'Managing Partner', phone: '9550209607' },
  { name: 'S. Abdul Hafiz', role: 'Sales & Inquiries', phone: '6301028568' }
];
