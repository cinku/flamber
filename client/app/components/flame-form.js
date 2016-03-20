import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        postFlame() {
            let self = this;
            let flame = self.get('store').createRecord('flame', {
                text: self.get('flame')
            });
            flame.save();
        }
    }
});
