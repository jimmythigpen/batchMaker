import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "eOAL8ZZXIyVKfQ6aiTPvmvh7Ga8Gll81zhtIS32r",
      "X-Parse-REST-API-Key": "8tokk8vRzrSPAcGI6YB9Us6211k1ZVQ7sY9JGqIJ"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
