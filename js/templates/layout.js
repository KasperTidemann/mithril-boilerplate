// Template:
var layout = function(id) {
  var content = Array.apply(null, arguments);

  return m('div', { class: 'layout', id: id }, [
    content.slice(2, content.length)
  ]);
};
