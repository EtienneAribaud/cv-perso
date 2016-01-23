(function(){
    'use strict';

    angular.module('blocks.toast')
        .factory('toast',toast);

    toast.$inject = ['$ionicLoading', 'toastr'];

    function toast($ionicLoading, toastr){

        var service = {
            error       : error,
            info        : info,
            warning     : warning,
            success     : success,
            hide        : toastr.clear,
            loading     : {
                show    : $ionicLoading.show,
                hide    : $ionicLoading.hide
            }
        };

        return service;

        function error(message, title){
            toastr.error(message, title);
        }

        function info(message,title){
            toastr.info(message, title);
        }

        function warning(message,title){
            toastr.warning(message, title);
        }

        function success(message,title){
            toastr.success(message, title);
        }
    }
})();
