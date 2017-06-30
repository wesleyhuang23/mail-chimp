angular.module('app', [])



.controller('mainCtrl', function($scope, mainSvc){

    $scope.getBuckets = function(){
        console.log('clicked');
        mainSvc.getBuckets().then(function(res){
            console.log(res);
        })
    }
    $scope.getToken = function(){
        mainSvc.getToken().then(function(res){
            console.log(res)
        })
    }
    // $scope.getToken();
})


.service('mainSvc', function($http){
    this.getBuckets = function(){
        return $http({
            method: 'POST',
            mode: 'cors',
            url: 'https://api.formbucket.com/f/buk_ECEDqsW0sBSK0a2Mw8ridvlI',
            headers: {
                'accept' : 'application/javascript',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'John',
                email: 'wesley@good.dog',
                message: 'You guys are awesome!'
            })
        }).then(function(res){
            return res;
        })
    }

});