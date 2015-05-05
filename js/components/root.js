// Module:
var root = {
  controller: function() {

    // Setup:
    title('root');

  },

  view: function(controller) {
    return layout(

      // Id:
      'root',

      // Controller:
      controller,

      // Contents:
      m('div', [
        m('p', 'Hello there, friend!')
      ])

    );
  }
};
