import Ember from 'ember';
import Bloodhound from 'bloodhound';

export default Ember.Controller.extend({

  autocomplete: {
    source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
    delay: 100
  },

  typeahead: (function() {
    var engine = new Bloodhound({
      local: [{value: 'red'}, {value: 'blue'}, {value: 'green'} , 
              {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, 
              {value: 'purple'}, {value: 'black'}, {value: 'white'}],
      datumTokenizer: function(d) {
        return Bloodhound.tokenizers.whitespace(d.value);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace
    });
    engine.initialize();

    return [null, { source: engine.ttAdapter() }];
  })(),

  autocompletePromise: function() {
    var autocomplete = {
      source: ['banana','apple','watermelon','pear','grape','peach','mango'],
      delay: 100
    };
  
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve( autocomplete );
      }, 3000); // simulate a 3 seconds delay 
    });
  }.property()

});
