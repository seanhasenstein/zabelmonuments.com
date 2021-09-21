export function formatPhoneNumber(number) {
  const split = number.split('');
  const result = split.map((item, index) => {
    if (index === 0) return `(${item}`;
    if (index === 2) return `${item}) `;
    if (index === 5) return `${item}-`;
    else return item;
  });
  return result.join('');
}

export function removeNonDigits(input) {
  return input.replace(/\D/g, '');
}

export function slugify(value) {
  const result = value.toLowerCase().split(' ');
  return result.join('-');
}

export function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
