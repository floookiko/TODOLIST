
angular.module('TODOlist' , [])

  .service('TODOService', function(){
    var ctrl = this

    ctrl.TODOLIST = [
      { title : 'TEST1', done : false },
      { title : 'TEST2', done : true}
    ]

    ctrl.add = function(todolist){
      ctrl.TODOLIST.push(todolist)
    }

    ctrl.list = function() {
      return ctrl.TODOLIST
    }

  })

  .controller('ListTODO', function($scope, TODOService){
    $scope.todos = TODOService.list()
  })

  .controller('AddTODOController', function($scope, TODOService){
    $scope.save = function() {
      var list = {
        title : $scope.title,
        done : false
      }

      TODOService.add(list)
      resetForm()
    }

    function resetForm(){
      $scope.todo = ''
    }
  })
