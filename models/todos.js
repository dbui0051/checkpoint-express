'use strict';

let tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    return Object.keys(tasks);
  },
  add: function (name, task) {
    task.complete === true ? task.complete = true : task.complete = false;
    if (this.listPeople().indexOf(name) > -1) tasks[name].push(task);
    else tasks[name] = [task]
  },
  list: function(name){
    for (let person in tasks){
      if (person === name) return tasks[person];
    }
  },
  complete: function(name, index){
    for (let person in tasks){
      if (person === name) tasks[person][index].complete = true;
    }
  },
  remove: function(name, index){
    for (let person in tasks){
      if (person === name) tasks[person].splice(index, 1);
    }
  }

  // etc.
};

