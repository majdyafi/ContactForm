
myApp.controller('myController', function ($scope, $http, $window) {
    $scope.originalStudent = {
        firstName: 'James',
        lastName: 'Bond',
        DoB: new Date('01/04/1987'),
        gender: 'male',
        trainingType: 'online',
        math: false,
        physics: true,
        chemistry: true
    };
    $scope.searchTerm = '';
    $scope.student = angular.copy($scope.originalStudent);
    $scope.students = [];
    
    $scope.getAllRecords = function () {
        var x = ($scope.getAll()).
        success(function (data) {

            $scope.students = data;
            debugger;
            console.log(data)
        })
           .error(function (issue) { console.log(issue) });
        
    }
    $scope.getAll = function () {
        return $http({
            method: "GET",
            url: "ContactForm/GetAll",
            data: JSON.stringify($scope.student),
            dataType: "JSON"
        })
    }
    $scope.getAllRecords();
    $scope.submitSutdentForm = function () {
        
        var x = ($scope.PostRequest()).
         success(function (data) {

             $scope.students = data;
             debugger;
             console.log(data)
         })
            .error(function (issue) { console.log(issue) });
    }

    $scope.PostRequest = function () {
        return $http({
            method: "POST",
            url: "ContactForm/Create",
            data: JSON.stringify($scope.student),
            dataType: "JSON"
        })
    }
    $scope.resetForm = function () {
        $window.alert('resetForm');
    }
    $scope.submitForm = function () {
        

        var response = $http({
            method: "POST",
            url: "ContactForm/Create",
            data:"raj",
            dataType: "json"
        });

    }
});