// CONTROLLERS
weatherApp.controller('homeController', [ '$scope', '$location', 'cityService', 
    function($scope, $location, cityService) {

        $scope.city = cityService.city;
        $scope.$watch('city', function() {
            cityService.city = $scope.city;

        });

        $scope.submit = function() {
            $location.path("/forecast");

        };

}]);

weatherApp.controller('forecastController', [ '$scope', '$resource', '$routeParams', 'cityService',
     function($scope, $resource, $routeParams, cityService) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2';

        $scope.weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast');
         
        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city, cnt: $scope.days,
            appid: 'b1b15e88fa797225412429c1c50c122a1'
        })
        // console.log($scope);

        $scope.convertToCelsius = function(degK) {
            return Math.round(degK - 273.15);
        }

        $scope.getDate = function(dt) {
            return dt.substring(0,10);
        }

}]);