import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.unloadAll('user');
    return this.store.findAll('user');
  }
});
