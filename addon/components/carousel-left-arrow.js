import Ember from 'ember';
import layout from '../templates/components/carousel-left-arrow';


export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),

  click() {
    this.get('carousel').slideLeft();
  }
});