// Module:
var root = {
  controller: function() {

    // Setup:
    title('Root');

  },

  view: function(controller) {
    return layout(

      // Id:
      'root',

      // Controller:
      controller,

      // Contents:
      m('div', [
        m('p', 'Hello there, friend!'),
        m('a', { onclick: route.trigger('/about') }, 'Go to About'),
        m('p', ' or '),
        m('a', { onclick: route.trigger('/news') }, 'Go to News')
      ])

    );
  }
};
