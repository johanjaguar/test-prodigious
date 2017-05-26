// create the module and name it scotchApp
testProdigious.controller('mainController', function( $scope , $http ) {
  $http.get("/data/card.json")
	 .success(function(data){
  		console.log(data);
  		$scope.profile = data.profile;
  		$scope.stats= data.stats;
  		$scope.comments = data.comments;
  		$scope.content = data.content;
  		$scope.navs= data.navs;
  		$scope.profileUser = data.profileUser;
  		$scope.navsUser= data.navsUser;
  	})
  	.error(function(err){

  	});
  $scope.save = function( formData ){
    console.log( formData );
  }
});
