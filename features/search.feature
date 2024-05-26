Feature: ADNL search validations

    Feature Description: As a user I want to search an article

    Scenario: Search an article
        Given user opens the home page
        When user search for "Labor day"
        Then user should be able to see the search results