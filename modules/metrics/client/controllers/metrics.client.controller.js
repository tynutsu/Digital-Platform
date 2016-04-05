(function () {
  'use strict';

  angular
    .module('metrics')
    .controller('MetricsController', MetricsController);

  MetricsController.$inject = ['$scope'];

  function MetricsController($scope) {
    var vm = this;

    vm.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    vm.series = ['Team Members', 'Team Leads', 'Admin'];
    vm.data = [
      [165, 159, 180, 181, 256, 257, 325],
      [18, 18, 20, 29, 36, 43, 45],
      [2, 2, 2, 2, 3, 3, 3, 3]
    ];

    vm.Bseries = ['Units', 'Lessons'];
    vm.Bdata = [
      [2, 2, 2, 2, 3, 3, 4, 5],
      [118, 218, 220, 229, 236, 243, 258]
    ];
    
    vm.pielabels = ['Team Members', 'Team Leads', 'Admin'];
    vm.piedata = [300, 500, 100];
    
    vm.pieBlabels = ['6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
    vm.pieBdata = [43, 24, 142, 66, 35, 52, 35];
    
    vm.pieClabels = ['1 Period', '2 Periods', '3 Periods', '4 Periods', '5 Periods', '6 Periods', '7 Periods', '8 Periods', '9 Periods'];
    vm.pieCdata = [52, 35, 163, 42, 46, 52, 35, 45, 56];
    
    vm.pieDlabels = ['Classroom', 'Field'];
    vm.pieDdata = [148, 100];
    
    vm.pieElabels = ['Math', 'Science', 'Language Arts', 'Music', 'Environmental'];
    vm.pieEdata = [148, 100, 134, 42, 64];
    
    vm.pieFlabels = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];
    vm.pieFdata = [24, 12, 52, 152, 89];
    
    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };
  }
})();
