(function(){
    
    
'use strict';


angular.module('myApp',[])
.controller('myController',myController);

myController.$inject = ['$scope'];
function myController($scope){
    $scope.yourfavdishes = " ";
    $scope.quantity = 0;

    $scope.checkQuantity = function(){
    
        var split = $scope.yourfavdishes.split(',');
        var totaldishes = caltotaldishes(split);
        $scope.quantity = totaldishes;
        if($scope.quantity <= 3){
            document.getElementById('conclusion').innerHTML = "Enjoy!"
        }else{
            document.getElementById('conclusion').innerHTML = "Too much"
        }
    }


    function caltotaldishes(dishes){
        var total = 0;
        for(var i = 0; i < dishes.length ; i++){
            total += 1
        }

        return total;
    }

}

})();