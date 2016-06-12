var controller = angular.module('appPixeon.controller.home', []);

controller.controller('appPixeon.controller.home', ['$scope', 'GApi',
    function homeCtl($scope, GApi) {

      /*  GApi.executeAuth('myContactApi', 'contact.all').then(function(resp) {
                $scope.contacts = resp.items;
            });

        $scope.remove = function(contact){
            GApi.executeAuth('myContactApi', 'contact.remove', {'id' : contact.id}).then( function(resp) {
                for(var i= 0; i < $scope.contacts.length; i++){
                    if($scope.contacts[i]['id'] == contact.id) {
                        if (i > -1) {
                            $scope.contacts.splice(i--, 1);
                        }
                    }
                }
            });
        };*/


        $scope.enviaDados = function( dados ) {

            var strValue = dados.str;
            var numValue = dados.num;

            var res = strValue.split(" ");
            var res2 = res.join("---");



            //var comb=[] 
            var res3 = combinacao(res, numValue );


            dados.res = res ;
            dados.res2 = res2 ;
            dados.res3 = res3 ;


        }

        function combinacao(arValue, numValue){
            
            var lenArray = arValue.length;
            var result = [];

            for(var i = 0; i<lenArray; i++){

                for(var j = 0; j<numValue; j++){

                    result += arValue[i];

                }
                
            }

            return result;


        }
    }
]);