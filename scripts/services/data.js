'use strict';

angular.module("todoListApp").service('dataService',function($http){

  this.helloConsole = function(){
    console.log('this is the hello console service!')
  };
    this.getTodos = function(callback){ $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo){
    console.log("the" + todo.name + " has been deleted")
    //other logic
  };

  this.saveTodos = function(todos){
    console.log(todos.length + "have been saved")
    //other logic
  };


});
