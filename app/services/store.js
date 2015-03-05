import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
  console.log('find store service is running');
   var adapter = this.container.lookup('adapter:' + name);
   return adapter.find(name, id);
  },

  findAll: function(name){
    console.log('findAll store service is running');
   var adapter = this.container.lookup('adapter:' + name);
   return adapter.findAll(name);
   },
});
