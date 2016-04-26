(function () {
  'use strict';

  angular
    .module('restoration-stations')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Restoration Stations',
      state: 'restoration-stations',
      type: 'dropdown',
      roles: ['admin', 'team lead', 'team member', 'partner', 'team lead pending', 'team member pending'],
      icon: 'glyphicon glyphicon-map-marker',
      position: 2
    });

    Menus.addSubMenuItem('topbar', 'restoration-stations', {
      title: 'Dashboard',
      state: 'restoration-stations.dashboard',
      roles: ['admin', 'team lead', 'team member', 'partner', 'team lead pending', 'team member pending'],
      position: 1
    });

    //Menus.addSubMenuItem('topbar', 'restoration-stations', {
    //  title: 'Stations',
    //  state: 'restoration-stations.list',
    //  roles: ['team lead', 'team member', 'partner', 'admin'],
    //  position: 2
    //});

    Menus.addSubMenuItem('topbar', 'restoration-stations', {
      title: 'Expeditions',
      state: 'expeditions.list',
      roles: ['admin', 'team lead', 'team member', 'partner'],
      position: 2
    });

    Menus.addSubMenuItem('topbar', 'restoration-stations', {
      title: 'Submissions',
      state: 'expeditions.submitted',
      roles: ['admin', 'team lead', 'partner'],
      position: 3
    });
  }
})();
