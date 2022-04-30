const stringify = input => {
  let stringifiedInput = "";
  if (isObject(input)) {
    stringifiedInput = `${stringifiedInput}{`;
    Object.keys(input).forEach((key, index) => {
      stringifiedInput = `${stringifiedInput}'${key}':${stringify(input[key])}`;
      if (Object.keys(input).length - 1 !== index) {
        stringifiedInput = `${stringifiedInput},`;
      }
    });
    stringifiedInput = `${stringifiedInput}}`;
  } else if (Array.isArray(input)) {
    stringifiedInput = `${stringifiedInput}[`;
    input.forEach((value, index) => {
      stringifiedInput = `${stringifiedInput}${stringify(value)}`;
      if (input.length - 1 !== index) {
        stringifiedInput = `${stringifiedInput},`;
      }
    });
    stringifiedInput = `${stringifiedInput}]`;
  } else {
    stringifiedInput = `'${input}'`;
  }

  return stringifiedInput;
};
