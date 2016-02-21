/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('should have a feed defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a url defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Test suite for menu functions" */
    describe('The menu', function() {
        /* Test ensures that the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($('.menu-hidden').length).not.toBe(0);
        });
         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: the menu displays when
          * clicked and hides when clicked again.
          */
        it('is shown then hides again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('.menu-hidden').length).toBe(0);
            $('.menu-icon-link').trigger('click');
            expect($('.menu-hidden').length).not.toBe(0);
        });
            
    });

    /* Test suite for initial entries */
    describe('Initial Entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
   
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry', function() {
            expect($('.entry').length).not.toBe(0);
        });
    });

    /* Test suite for "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* Test ensures that when a new feed is loaded
         * by the asynchronous loadFeed function that the content actually changes.
         */

        var feed0, feed1, feed2, feed3;
        
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed0 = $('.feed').text();
                done();
            });
        });

        //tests for changes from initial feed to each other feed
        it('changes from feed0 to feed1', function(done) {
            loadFeed(1, function() {
                feed1 = $('.feed').text();
                expect(feed1).not.toBe(feed0);
                done();
            });
        });

        it('changes from feed0 to feed2', function(done) {
            loadFeed(2, function() {
                feed2 = $('.feed').text();
                expect(feed2).not.toBe(feed0);
                done();
            });
        });
        
        it('changes from feed0 to feed3', function(done) {
            loadFeed(3, function() {
                feed3 = $('.feed').text();
                expect(feed3).not.toBe(feed0);
                done();
            });
        });
    });
}());
