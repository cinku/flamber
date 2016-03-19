import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  pub_date: DS.attr()
});
