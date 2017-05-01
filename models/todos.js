'use strict';

let tasks = {}; // a place to store tasks by person
let listOfPeople = [];


module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    return listOfPeople;
  },
  add: function (name, task) {
    // saves a task for a given person
    // each task node {content: , complete: ?}
    if(listOfPeople.indexOf(name) === -1) listOfPeople.push(name);
    if(!task.complete) task.complete = false;
    if(!tasks[name]) tasks[name] = [task];
    else tasks[name].push(task);
  },
  list: function(name){
    for(let person in tasks){
      if(person === name) return tasks[person];  //Returns an array of task nodes {content: , complete: }
    }
  },
  complete: function(name, index){
    for(let person in tasks){
      if(person === name) tasks[person][index].complete = true;
    }
  },
  remove: function(name, index){
    for(let person in tasks){
      if(person === name) tasks[person].splice(index, 1);
    }
  }

  // etc.
};


