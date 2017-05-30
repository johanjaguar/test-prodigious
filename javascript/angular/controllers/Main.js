// create the module and name it scotchApp
testProdigious.controller('mainController', function( $scope , $http ) {
  $http.get("data/card.json")
	 .success(function(data){
      $scope.isEnglish = true;

  		$scope.stats= data.stats;
  		$scope.comments = data.comments;

  		$scope.navs= data.navs;
  		$scope.profileUser = data.profileUser;


      $scope.profile = data.profile.english;
      $scope.content = data.content.english;
      $scope.commentslabel = data.commentslabel.english;
      $scope.navsUser= data.navsUser.english;
      $scope.labels = data.labels.english;
      $scope.activeButton = function() {
        $scope.isEnglish = !$scope.isEnglish;
        if( $scope.isEnglish ){
          $scope.profile = data.profile.english;
          $scope.content = data.content.english;
          $scope.commentslabel = data.commentslabel.english;
          $scope.navsUser= data.navsUser.english;
          $scope.labels= data.labels.english;
        }
        else{
          $scope.profile = data.profile.spanish;
          $scope.content = data.content.spanish;
          $scope.commentslabel = data.commentslabel.spanish;
          $scope.navsUser= data.navsUser.spanish;
          $scope.labels= data.labels.spanish;
        }
      };

  	})
  	.error(function(err){

  	});
  $scope.save = function( formData ){
  }
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
});
