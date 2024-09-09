//DIRECTIVES
weatherApp.directive("weatherReport", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            getDate: "&",
            dateFormat: "@"
        }
    }

});