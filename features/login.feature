Feature: ADNL login validations

    Feature Description: As a user I want to login in the application successfully

    Scenario: Login with credentials
        Given user should open  login page to adnl site
        When logged with username and password
        Then user should see the user profile