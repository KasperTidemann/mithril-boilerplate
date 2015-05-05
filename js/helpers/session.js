// Session:
var session = {

  // Variables:
  loggedIn: m.prop(false),
  user: m.prop(),

  // Functions:
  check: function() {
    if (!this.loggedIn()) {
      this.logout(function() {
        m.route('/start');
      });

      return false;
    }

    return true;
  },

  login: function(data) {
    var deferred = m.deferred();

    var user = new User(data);

    this.loggedIn(true);
    this.user(user);

    localforage.setItem('session', data).then(function() {
      deferred.resolve();
    });

    return deferred.promise;
  },

  logout: function(callback) {
    var self = this;

    this.loggedIn(false);
    this.user(null);

    localforage.clear(function(error) {
      callback();
    });
  },

  ready: function(callback) {
    var self = this;

    localforage.getItem('session').then(function(session) {
      if (session) {
        self.login(session).then(function() {
          callback();
        });
      } else {
        callback();
      }
    });
  }

};
