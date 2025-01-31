var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(compactObject).filter(Boolean);
  } else if (typeof obj === "object" && obj !== null) {
    const resultObj = {};
    for (let key in obj) {
      const value = compactObject(obj[key]);
      if (Boolean(value)) {
        resultObj[key] = value;
      }
    }
    return resultObj;
  }
  return obj;
};
const obj = { a: null, b: [false, 1] };
console.log(compactObject(obj));
