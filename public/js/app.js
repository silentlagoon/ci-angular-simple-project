var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
    return $window._; // assumes underscore has already been loaded on the page
}]);

var myApp = angular.module('myApp', ['underscore', 'ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'public/views/apply.html',
                    controller: 'formController'
                })
                .when('/admin', {
                    templateUrl: 'public/views/admin.html',
                    controller: 'adminController'
                })
                .when('/application/:Id', {
                    templateUrl: 'applications.html',
                    controller: 'applicationController'
                });
        }]);

myApp.service('authService', ['_', '$http', function (_, $http) {
    var service = {};

    service.login = function (user) {

    };

}]);

myApp.controller('formController', ['$scope', '_', '$http', function($scope, _, $http) {
        $scope.applyDisabled = true;
        $scope.showForm = true;
        $scope.user = {
            email: "",
            charName: "",
            servName: ""
        };

        $scope.apply = function () {
            if($scope.applyDisabled){ return false; }

            $http.post('index.php/application/create', $scope.user)
                .success(function (response) {
                    console.log(response);
                    $scope.response = {
                        text: response.text,
                        application: response.application,
                        success: true
                    };
                })
                .error(function (response) {
                    $scope.response = {
                        text: response.text,
                        success: false
                    };
                });
            $scope.showForm = false;
        };

        $scope.$watchCollection('user', function(user) {
            $scope.applyDisabled = !_.every(user, function (field) {
                return !_.isEmpty(field);
            });
        });
    }]);

myApp.controller('adminController', ['$scope', '_', '$http', function ($scope, _, $http) {
    alert('admin page');
}]);