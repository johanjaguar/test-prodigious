
(function(){
  var app = angular.module( "githubViewer" );
  var MainController = function ( $scope , $interval , $location ){
    var disminuyeCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.buscar($scope.username);
      }
    };

    var intervaloCountdown = null;
    var iniciaCountdown = function(){
      intervaloCountdown = $interval( disminuyeCountdown, 1000, $scope.countdown );
    }

    $scope.buscar = function(username){
      if( intervaloCountdown ){
        $interval.cancel(intervaloCountdown);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    $scope.countdown = 5;
    iniciaCountdown();
  };


  app.controller( "MainController", MainController );
}());
