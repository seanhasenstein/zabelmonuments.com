import { Contact } from '../types';
import { stores } from '../data';

export function formatContactTerm(contact: Contact) {
  if (contact === 'ask-our-cm') return 'certified memorialist';
  if (contact === 'greenbay') return 'Green Bay store';
  if (contact === 'manitowoc') return 'Manitowoc store';
  if (contact === 'sheboygan') return 'Sheboygan store';
}

export function formatPhoneNumber(input: string) {
  const digits = removeNonDigits(input);
  const digitsArray = digits.split('');
  return digitsArray
    .map((v, i) => {
      if (i === 0) return `(${v}`;
      if (i === 2) return `${v}) `;
      if (i === 5) return `${v}-`;
      return v;
    })
    .join('');
}

export function removeNonDigits(input: string) {
  return input.replace(/\D/g, '');
}

export function slugify(input: string) {
  const result = input.toLowerCase().split(' ');
  return result.join('-');
}

export function storeIsContact(store: string): store is Contact {
  return Object.values(stores).some(s => s === store);
}
