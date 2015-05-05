// Module:
var about = {
  controller: function() {

    // Setup:
    title('About');

  },

  view: function(controller) {
    return layout(

      // Id:
      'root',

      // Controller:
      controller,

      // Contents:
      m('div', [
        m('p', 'This is the about page. About what? Everything. Right here. In just a moment.'),
        m('a', { onclick: route.trigger('/root') }, 'Go back')
      ])

    );
  }
};
