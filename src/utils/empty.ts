import { Dictionary } from '@stoplight/types';

export const empty = (obj: Dictionary<unknown>) => {
  for (const key in obj) {
    if (!Object.hasOwnProperty.call(obj, key)) continue;
    delete obj[key];
  }

  return obj;
};
