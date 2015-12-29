Template.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 0 || n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});