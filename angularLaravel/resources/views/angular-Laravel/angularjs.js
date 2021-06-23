var myModule = angular.module('myModule',[]);
var url = 'http://127.0.0.1:8000/api/';

myModule.controller('dataController',function($scope,$http,$location,$interval){
    refreshData();
    function refreshData()
    {
        $http.get(url + 'data').then(function(response){
            $scope.getData = response.data;
        }
        ,function (err) {  })
    }
    
    $scope.addData = function(name,email){
        $http.post(url + 'addData',{
            'name' : name,
            'email' : email
        }).then(function(response){
            $scope.addDataResult = response.data;
            alert($scope.addDataResult.result);
            refreshData();
        }
        ,function (err) { console.log(err) })

    }

    $scope.showData = function (id,name,email) {
        $scope.editId = id;
        $scope.editName = name;
        $scope.editEmail = email;
    }

    $scope.updateData = function () {
        $http.put(url + 'update',{
            
            'id' : $scope.editId,
            'name' : $scope.editName,
            'email' : $scope.editEmail

        }).then(function(response){
            refreshData();
            alert(response.data.result);
        }
        ,function (err) { console.log(err) })
    }

    $scope.deleteData = function (id) {
        $http.delete(url + 'delete/' + id).then(function(response){
            refreshData();
            alert(response.data.result);
        }
        ,function (err) { console.log(err) })
    }
});