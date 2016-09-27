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

var signup = function(user) {
  //Assumes already on signup page
  element(by.model('vm.credentials.firstName')).sendKeys(user.firstName);
  element(by.model('vm.credentials.lastName')).sendKeys(user.lastName);
  element(by.model('vm.credentials.email')).sendKeys(user.email);
  element(by.model('vm.credentials.userrole')).all(by.tagName('option')).get(user.userrole).click();
  if (user.userroleText === 'team lead pending')
    element(by.model('vm.credentials.teamLeadType')).all(by.tagName('option')).get(user.typeLeadType).click();
  element(by.model('vm.credentials.schoolOrg')).all(by.tagName('option')).get(user.schoolOrg).click();
  if (user.userroleText === 'team member pending')
    element(by.model('vm.credentials.teamLead')).all(by.tagName('option')).get(user.teamLead).click();
  element(by.model('vm.credentials.username')).sendKeys(user.username);
  element(by.model('vm.credentials.password')).sendKeys(user.password);
  element(by.model('vm.credentials.retypePassword')).sendKeys(user.password);
  element(by.buttonText('Sign up')).click();
  browser.sleep(1000);
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
    displayName: 'Teacher Local',
    email: 'teacher@localhost.com'
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
  newLeader: {
    firstName: 'New Leader',
    lastName: 'Local',
    email: 'newleader@localhost.com',
    userrole: 1,
    userroleText: 'team lead pending',
    typeLeadType: 1,
    typeLeadTypeText: 'Teacher',
    schoolOrg: 1,
    schoolOrgText: 'Org1',
    username: 'newleader',
    password: 'P@$$w0rd!!',
    displayName: 'New Leader Local'
  },
  newStudent: {
    firstName: 'New Student',
    lastName: 'Local',
    email: 'newstudent@@localhost.com',
    userrole: 2,
    userroleText: 'team member pending',
    schoolOrg: 1,
    schoolOrgText: 'Org1',
    teamLead: 1,
    teamLeadText: 'Teacher Local',
    username: 'newstudent',
    password: 'P@$$w0rd!!',
    displayName: 'New Student Local'
  },
  team: { name: 'Test Team' },
  organization: { name: 'Org1' },
  station: { name: 'Test Station' },
  station2: { name: 'Other Station' },

  signout: signout,
  signinAs: signinAs,
  signup: signup
};
