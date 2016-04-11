/**
 * Flights Service
 */
App.factory('Patrick', function ($http) {
     return {
        setName:function(name){
        	this.name =name;
        },
        getName:function(){
        	return this.name;
        }
     };
 });
