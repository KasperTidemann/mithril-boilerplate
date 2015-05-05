// Route:
var route = {

  // Functions:
  to: function(route) {
    m.route(route);
  },

  trigger: function(route) {
    var self = this;

    return function() {
      self.to(route);
    };
  }

};
