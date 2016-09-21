'use strict';

var signout = function () {
  // Make sure user is signed out first
  browser.get('http://localhost:8081/authentication/signout');
  // Delete all cookies
  browser.driver.manage().deleteAllCookies();
};

var signinAs = function(user) {
  //Make sure user is signed out first
  signout();
  //Sign in
  browser.get('http://localhost:8081/authentication/signin');
  browser.sleep(1000);
  // Enter UserName
  element(by.model('vm.credentials.username')).sendKeys(user.username);
  // Enter Password
  element(by.model('vm.credentials.password')).sendKeys(user.password);
  // Click Submit button
  element(by.id('signin')).click();
};

module.exports = {
  admin: {
    username: 'admin',
    password: 'P@$$w0rd!!',
    displayName: 'Admin Local'
  },
  leader: {
    username: 'teacher',
    password: 'P@$$w0rd!!',
    displayName: 'Teacher Local'
  },
  member1: {
    username: 'student1',
    password: 'P@$$w0rd!!',
    displayName: 'Student1 Local'
  },
  member2: {
    username: 'student2',
    password: 'P@$$w0rd!!',
    displayName: 'Student2 Local'
  },
  team: { name: 'Test Team' },
  organization: { name: 'Org1' },
  station: { name: 'Test Station' },
  station2: { name: 'Other Station' },

  signout: signout,
  signinAs: signinAs
};