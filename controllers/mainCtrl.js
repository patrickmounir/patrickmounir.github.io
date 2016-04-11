

App.controller('mainCtrl', function($scope,Patrick,$location) {
    //$scope.pageClass = 'page-home';

    
   $scope.goNxt=function(){
    $location.url('/google');
   }
   
});


