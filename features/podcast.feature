Feature: ADNL podcast validations

    Feature Description: As a user I want to browse a podcast, open it correctly and listen to the podcast 

    Scenario: Browse, open and listen a podcast
        Given user opened the podcast page
        When user should be able to open a random podcast
        Then the correct podcast should be opened
        And user should be able to play a podcast