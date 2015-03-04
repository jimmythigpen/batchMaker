import Ember from 'ember';

export default Ember.Object.extend({
  findAll: function(name){
   // lookup the adapter for the name I'm passing you
   var adapter = this.container.lookup('adapter:' + name);
   return adapter.findAll(name);
 }
});
