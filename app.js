
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

    ctrl.SetdoneforTRUE = function(index) {
      ctrl.TODOLIST[index].done = true
    }

    ctrl.SetdoneforFALSE = function(index) {
      ctrl.TODOLIST[index].done = false
    }

  })

  .controller('ListTODO', function($scope, TODOService){
    $scope.todos = TODOService.list()

    function Setchecklist(index){
      if(TODOService.TODOLIST[index].done === true){

        TODOService.SetdoneforFALSE(index)

      }else if(TODOService.TODOLIST[index].done === false){

        TODOService.SetdoneforTRUE(index)

      }
    }
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
      $scope.title = ''
    }
  })
