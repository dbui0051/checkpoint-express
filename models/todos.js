'use strict';

var tasks = {}; // a place to store tasks by person
let listPeople = [];


module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    return listPeople;
  },
  add: function (name, task) {
    // saves a task for a given person
    // each task node {content: , complete: ?}
    if(listPeople.indexOf(name) === -1) listPeople.push(name);
    if(!task.complete) task.complete = false;
    if(!tasks[name]) tasks[name] = [task];
    else tasks[name].push(task);
  },
  list: function(name){
    for(let person in tasks){
      if(tasks[person] === name) return tasks[person];  //Returns an array of task nodes {content: , complete: }
    }

    return undefined;
  },
  complete: function(name, index){
    let personsTasks = list(name);
    person[index].complete = true;
  },
  remove: function(name, index){
    let personsTasks = list(name);
    personsTasks.splice(index, 1);
  }

  // etc.
};


