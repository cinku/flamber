import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    authenticate: function(id, password) {
        return Ember.$.ajax({
            type: "POST",
            url: "/login",
            contentType : 'application/json',
            data: JSON.stringify(id, password)
        });
    }
});