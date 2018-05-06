export function copy<T extends {}>(something: T): typeof something {
  return Object.assign({}, something);
}
