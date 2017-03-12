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
