// Model:
model.define('User', function(content) {

  // Variables:
  this.email = m.prop(content.email);
  this.firstname = m.prop(content.firstname);
  this.id = m.prop(content.id);
  this.lastname = m.prop(content.lastname);

});
