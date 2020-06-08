import $ from 'jquery';
import shoppingList from './shopping-list';
import css from './index.css';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
