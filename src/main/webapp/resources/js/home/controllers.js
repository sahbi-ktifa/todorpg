(function(angular) {
    var HomeCtrl = function($scope) {
        $scope.dashboard = {};
        $scope.$on('$locationChangeStart', function($event, next) {
            $scope.currentRoute = next;
        });
    };
    HomeCtrl.$inject = ['$scope'];

    var DashboardCtrl = function($scope, Dashboard, Task) {
        $scope.loading = true;
        $scope.tasks = [];
        Dashboard.retrieveDashboardForUser(username).then(function (response) {
            $scope.dashboard = response.data;
            Task.retrieveTasks($scope.dashboard.id).then(function (response) {
               $scope.tasks = response.data;
               $scope.loading = false;
            });
        });
    };
    DashboardCtrl.$inject = ['$scope', 'Dashboard', 'Task'];

    var ProfileCtrl = function($scope) {

    };
    ProfileCtrl.$inject = ['$scope'];

    var NotificationsCtrl = function($scope) {

    };
    NotificationsCtrl.$inject = ['$scope'];

    var CreateTaskCtrl = function($scope, Task) {
        $scope.task = {};
        $scope.success = false;

        $scope.createTask = function () {
            $scope.success = false;
            Task.createTask($scope.task).then(function () {
                $scope.task = {};
                $scope.success = true;
            });
        };
    };
    CreateTaskCtrl.$inject = ['$scope', 'Task'];

    angular.module("HomeApp.controllers").controller("HomeCtrl", HomeCtrl);
    angular.module("HomeApp.controllers").controller("DashboardCtrl", DashboardCtrl);
    angular.module("HomeApp.controllers").controller("ProfileCtrl", ProfileCtrl);
    angular.module("HomeApp.controllers").controller("NotificationsCtrl", NotificationsCtrl);
    angular.module("HomeApp.controllers").controller("CreateTaskCtrl", CreateTaskCtrl);
}(angular));