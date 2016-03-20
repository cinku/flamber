import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postFlame() {
            let text = this.get('flame');
            console.log(text);
        }
    }
});
