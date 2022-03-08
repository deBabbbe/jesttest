function sum(a, b) {
  return a + b;
}

function tree(sign, size) {
  let result = Array(size)
    .fill()
    .map((_) => "");
  for (let line = 0; line < size; line++) {
    const spaces = size - 1 - line;
    result[line] = result[line].padStart(spaces, " ");
    const signCount = 1 + line + line;
    for (let x = 0; x < signCount; x++) result[line] += sign;
    result[line] = result[line].padEnd(result[line].length + spaces, " ");
  }
  return result.join("\n");
}

module.exports = { sum, tree };
