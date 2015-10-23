function average(chunks, field) {
  if (!chunks || !chunks.length)
    return null;
  if (!field)
    field = 'last';
  var c = chunks.length;
  return chunks.map(function (chunk) {
    return chunk[field] / c;
  }).reduce(function (sum, item) {
    return sum + item;
  })
};

function variance(chunks, field) {
  if (!chunks || !chunks.length)
    return null;
  if (!field)
    field = 'last';
  var avg = average(chunks, field);
  var c = chunks.length - 1;

  return chunks.map(function (chunk) {
    return Math.pow(chunk[field] - avg, 2) / c;
  }).reduce(function (sum, item) {
    return sum + item;
  });
};

function stddev (chunks, field) {
  if (!chunks || !chunks.length)
    return null;
  if (!field)
    field = 'last';
  return Math.pow(variance(chunks, field), 1/2);
};

module.exports = {
  stddev: stddev,
  variance: variance,
  avg: average
};
