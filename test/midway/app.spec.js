'use strict';

describe('Midway: Testing modules', function() {
    var appModule;
    beforeEach(function() {
        appModule = angular.module('app');
    });

    describe('App module', function() {

        it('should be registered', function() {
            expect(appModule).not.toEqual(null);
        });

        describe('Dependencies', function() {
            var deps;
            var hasModule = function(m) {
                return deps.indexOf(m) >= 0;
            };
            beforeEach(function() {
                deps = appModule.value('app').requires;
            });

            it('should have all dependencies loaded correctly', function() {
                expect(hasModule('ngAnimate')).toEqual(true);
                expect(hasModule('blocks.toast')).toEqual(true);
                expect(hasModule('app.core')).toEqual(true);
                expect(hasModule('ui.router')).toEqual(true);
            });
        });
    });
});