/*
// called whenever a login is attempted
Accounts.validateLoginAttempt(function(attempt){
  // checks for email verification
  if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
    // the login is aborted
    return false;
  };
  return true;
});
*/