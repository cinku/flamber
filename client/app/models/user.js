import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  email: DS.attr()
});
