'use strict';

angular
    .module('blocks.toast')
    .config(moduleConfig);

    moduleConfig.$inject = ['toastrConfig'];

    function moduleConfig(toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: false,
            closeButton: true,
            preventOpenDuplicates: false,
            preventDuplicates:false,
            maxOpened: 1,
            closeHtml: '<button class="ok-icon-cerrar"></button>',
            iconClasses: {
                error: 'ok-toast-error',
                info: '',
                success: '',
                warning: ''
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            templates: {
                toast: 'src/blocks/toast/toast.html',
                progressbar: 'src/blocks/toast/progressbar.html'
            },
            timeOut: 6000,
            titleClass: 'toast-title',
            toastClass: 'toast toast-ok',
            positionClass: 'toast-top-full-width'
        });
    }
