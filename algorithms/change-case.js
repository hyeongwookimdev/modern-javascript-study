function camelToSnake(camelCase) {
  return camelCase.replace(/.[A-Z]/g, (match) => {
    console.log(match);
    return match[0] + "_" + match[1].toLowerCase();
  });
}

const camelCase = "imAtStarbucks";
console.log(camelToSnake(camelCase));

function snakeToCamel(snakeCase) {
  return snakeCase.replace(/_[a-z]/g, (match) => {
    console.log(match);
    return match[1].toUpperCase();
  });
}

const snakeCase = "im_at_starbucks";
console.log(snakeToCamel(snakeCase));
