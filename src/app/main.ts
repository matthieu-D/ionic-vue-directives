import Vue from 'vue';
import CustomShow from './custom-show';
import CustomIfModule from './custom-if';

const CustomIf = CustomIfModule['custom-if'];

var app = new Vue({
  el: '#app',
  directives: { CustomShow, CustomIf }
})