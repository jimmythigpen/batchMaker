import Ember from 'ember';

export default Ember.Controller.extend({
    scaleMult: "1",
    actions: {
      adjustYield: function(){
        // var scale = this.getProperties('scaleMult');
        // var newYield = (scale.scaleMult) * (this.get('model.yieldNumber'));
        //
        //
        // console.log('new yield is = ' + newYield);
        // console.log(this.get('model.steps'));
        //
        //
        //    var steps = this.get('model.steps');
        //    steps.forEach(function(step){
        //      step.forEach(function(ing){
        //        console.log(ing);
        //      });
        //
        //  });
      }
    }
});
