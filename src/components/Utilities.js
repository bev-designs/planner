export function getNewExpirationTime() {
    return Date.now() + 12 * 300000;
  }
  
  let nextId = 0;
  export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
  }