(function() {
  'use strict';

  angular
    .module('profiles')
    .directive('deleteTeamLeadModal', function() {
      return {
        restrict: 'AE',
        templateUrl: 'modules/profiles/client/views/delete-team-lead.client.view.html',
        scope: {
          closeFunction: '='
        },
        replace: true,
        link: function(scope, element, attrs) {

        }
      };
    });
})();
