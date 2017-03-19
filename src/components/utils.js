import createFragment from 'react-addons-create-fragment';

export function createFragments(fragments) {
  const newFragments = {};
  let validCount = 0;

  Object.keys(fragments).forEach((key) => {
    const fragment = fragments[key];

    if (fragment) {
      newFragments[key] = fragment;
      validCount += 1;
    }
  });

  if (validCount === 0) return undefined;
  if (validCount === 1) return Object.values(newFragments)[0];
  return createFragment(newFragments);
}

export function strToHash(str) {
  let hash = 0;
  let char;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i += 1) {
    char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }
  return hash;
}
