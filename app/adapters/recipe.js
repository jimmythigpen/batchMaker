import ajax from 'ic-ajax';
import Ember from 'ember';


export default Ember.Object.extend({
  findAll: function(name) {
     /* jshint unused: false */
     console.log('adapter.findAll');
     return ajax("https://api.parse.com/1/classes/Recipes").then(function(response){
       return response.results.map(function(recipe) {
         recipe.id = recipe.objectId;
         delete recipe.objectId;
         console.log(recipe);
         return recipe;
       });
     });
   }
});
