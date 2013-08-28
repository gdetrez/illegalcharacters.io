'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('illegalcharacters.io'));


  it('should mark a non ascii letter', inject(function($rootScope, $controller) {
    var mockBackend = { data: 'é', options: {}};
    var scope = $rootScope.$new(),
        ctrl = $controller("MyCtrl2", { $scope: scope, backend: mockBackend });
    expect(scope.txt).toBe('<b>é</b>');
  }));

  it('should not mark an ascii letter', inject(function($rootScope, $controller) {
    var mockBackend = { data: 'a', options: {}};
    var scope = $rootScope.$new(),
        ctrl = $controller("MyCtrl2", { $scope: scope, backend: mockBackend });
    expect(scope.txt).toBe('a');
  }));

  it('should mark a non ascii letter among ascii ones', inject(function($rootScope, $controller) {
    var mockBackend = { data: 'aéa', options: {}};
    var scope = $rootScope.$new(),
        ctrl = $controller("MyCtrl2", { $scope: scope, backend: mockBackend });
    expect(scope.txt).toBe('a<b>é</b>a');
  }));

});
