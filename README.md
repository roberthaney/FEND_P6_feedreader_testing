# Udacity Front-End Nanodegree Feed Reader Testing Project: Rob Haney

## Basic information
Testing is important in the software development process, and this site was designed to implement the Jasmine BDD testing framework to perform tests for functionality on existing JavaScript code provided by Udacity.  

## Usage
To view the outcome of the implemented tests, simply load index.html in the browser.

### Tests implemented
1. Checks whether feeds are defined.  
2. Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.  
3. Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.  
4. Test ensures that the menu element is hidden by default.  
5. Test that the menu changes visibility when the menu icon is clicked. This test has two expectations: (1) the menu displays when clicked and (2) the menu hides when it is clicked again.  
6. Checks that the asynchronous loadFeed function is called and completes its work, and thus there is at least a single .entry element within the feed container.  
7. Test ensures that when a new feed is loaded by the loadFeed function the content actually changes.  

## Educational resources
Udacity courses:  
 -	JavaScript Testing  
 -	Writing READMEs  

Stack overflow and W3Schools website