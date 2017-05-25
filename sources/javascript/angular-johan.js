var MainController = function ($scope){
  var person = {
    firstName: "Johan",
    lastName: "Vargas",
    imageSrc: "http://johanjaguar.github.io/curriculo/build/images-op/johan.png"
  };
  $scope.message = "Hello!";
  $scope.person = person;
};
