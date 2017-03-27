(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemsToBuy = this;
  itemsToBuy.items = ShoppingListCheckOffService.getToBuyItems();

  itemsToBuy.moveItem = function (key, item) {
    ShoppingListCheckOffService.moveItem(key, item);
  };

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of already bought shopping items
  var toBuyItems = [
    { name: "cookies",         quantity: 100 },
    { name: "pizzas",  quantity: 50 },
    { name: "ice creams",      quantity: 150 },
    { name: "milk bottles",    quantity: 25 },
    { name: "potatoes",     quantity: 200 }
  ];
  // List of already bought items
  var boughtItems = [];

  service.moveItem = function(key, item) {
    boughtItems.push(item);
    toBuyItems.splice(key, 1);
  }

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

};

})();
