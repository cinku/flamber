import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    actions: {
        authenticate() {
            console.log('asd');
            let { identification, password } = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:custom', identification, password);
        }        
    }
});
