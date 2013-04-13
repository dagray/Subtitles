  /**
   * OAuth config
   */
  
  Accounts.loginServiceConfiguration.remove({
    service: 'google'
  });

  Accounts.loginServiceConfiguration.remove({
    service: 'facebook'
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'google',
    clientId: '',
    secret: ''
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'facebook',
    appId: '',
    secret: ''
  });


  Accounts.loginServiceConfiguration.remove({
    service: 'twitter'
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'twitter', 
    consumerKey: '',
    secret: ''
  });