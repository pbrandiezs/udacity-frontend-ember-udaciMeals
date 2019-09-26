/* eslint-disable ember/no-jquery */
import Route from '@ember/routing/route';
// import Ember from 'ember';
import $ from 'jquery';

export default Route.extend({
    model() {
        return $.get('/menu/menu.json');
    }
});