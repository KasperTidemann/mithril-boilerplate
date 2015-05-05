// Model:
var model = {

  // Functions:
  define: function(type, constructor) {

    // Variables:
    constructor.data = m.prop([]);
    constructor.prototype.animate = m.prop('none');
    constructor.prototype.state = m.prop('clean');

    // Functions:
    constructor.get = function(query) {
      var bulk = this.data().filter(function(record) {
        if (record.state() !== 'delete') {
          return record;
        }
      });
      var data = null;
      var type = typeof query;

      // Query:
      if (type === 'object') {
        var keys = Object.keys(query);
        var length = keys.length;

        return bulk.filter(function(record) {
          var match = true;

          for (var i = 0; i < length; i++) {
            if (/delete|remove/.test(record.state()) || record[keys[i]]() !== query[keys[i]]) {
              match = false;

              break;
            }
          }

          return match;
        });

      // Id:
      } else if (type === 'string') {
        var length = bulk.length;

        for (var i = 0; i < length; i++) {
          var record = bulk[i];

          if (record.id() === query) {
            data = record;

            break;
          }
        }

      // Bulk:
      } else {
        data = bulk;
      }

      return data;
    };

    constructor.new = function(content) {
      var record = new this(content);

      this.data().push(record);

      return record;
    };

    constructor.prototype.clean = function() {
      this.state('clean');
    };

    constructor.prototype.dirty = function() {
      this.state('dirty');
    };

    // Globalize:
    window[type] = constructor;

  }

};
