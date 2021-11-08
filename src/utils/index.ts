export function formatPhoneNumber(number: string) {
  const split = number.split('');
  const result = split.map((item, index) => {
    if (index === 0) return `(${item}`;
    if (index === 2) return `${item}) `;
    if (index === 5) return `${item}-`;
    else return item;
  });
  return result.join('');
}

export function removeNonDigits(input: string) {
  return input.replace(/\D/g, '');
}

export function slugify(input: string) {
  const result = input.toLowerCase().split(' ');
  return result.join('-');
}
