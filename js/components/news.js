// Module:
var news = {
  controller: function() {

    // Setup:
    title('News');

  },

  view: function(controller) {
    return layout(

      // Id:
      'root',

      // Controller:
      controller,

      // Contents:
      m('div', [
        m('p', 'Here are the news! Well, there are no news. But that\'s still news, it\'s just that there are no news, you know?'),
        m('a', { onclick: route.trigger('/root') }, 'Go back')
      ])

    );
  }
};
