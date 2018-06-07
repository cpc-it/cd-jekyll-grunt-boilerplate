# Change Log

## [Unreleased](https://github.com/cpc-it/cd-jekyll-grunt-boilerplate/tree/HEAD)

[Full Changelog](https://github.com/cpc-it/cd-jekyll-grunt-boilerplate/compare/Release Notes...HEAD)

**Implemented enhancements:**

- Favicon added to images and head [\#3](https://github.com/cpc-it/cd-jekyll-grunt-boilerplate/pull/3) ([lbarker](https://github.com/lbarker))

**Merged pull requests:**

- Hamburger Menu Dependencies [\#1](https://github.com/cpc-it/cd-jekyll-grunt-boilerplate/pull/1) ([javag97](https://github.com/javag97))

## Release Notes
#### Phase 3.5
1. Content pages migrated to markdown format. Siteleaf CMS integrated to allow MarCom staff to update content.
2. Data Restructuring
Hours data is now pulled from google-export-data.json instead of venues.yml. Hours repeater function deprecated. Hours table simplified. 
3.Mobile Hours
locations.xml now built using google-export-data.json and can include special hours. Launched with new <image> tag as well. 
#### Phase 3.1
1. Movable Meals 2016/2017
Launched the beta version of Movable Meals, a legacy ASP application migrated over to the framework and template. Review the README.md file for the application in /app/_pages/movablemeals/README.md.
2. Google Business Hours, Website Integration
Information pertaining to a venues normal hours of operation, phone, and name are pulled from Google Business using the Google Places API Web Service. Information displayed on individual venue pages, contact page, and global hours of operation page. When the app failes to retrieve information from google, our static data is displayed which is gernerated from our venues.yml file.

Venues that do not have Google Business brands are listed below. We're working on aquiring them.
All Starbucks locations: UU, CM, Mobile
Chick-fil-a ( their hours need to be updated, not owned by us )
19Metro Express - need to create business
Myrons - need to be approved by google 

#### Phase 3.0
1. Plus Dollars Targed Balance Tool
	* https://www.calpolydining.com/diningprograms/freshmen/plusdollars/
	* Using JS, CSS, and basic HTML we build a tool that outputs the targeted Plu$ Dollars balance for residence hall and apartment dining plans based on how many days are left in the quarter. It's really just a bunch math.
2. The styleguide will now be referred to as "The Cookbook"
3. Dynamic Site Map
	* We now generate a xml site map with Jekyll. Inspiration from this article: http://davidensinger.com/2013/11/building-a-better-sitemap-xml-with-jekyll/
4. Revised Error Page
	* Set the server to display our custom 404 page instead of default. The 404 page also includes our search function allowing users to quickly search from the error page. 
#### Phase 2.5
1. Search
	* https://www.calpolydining.com/search/
	* Using JSON, JS, and a simple input form we've added a realtime search experience for users. Users can search the website without ever leaving in. This article describes the methodolgy used: http://mathayward.com/jekyll-search/ 
2. Print Styles: Refined print styles and better formating when pages are printed. 
3. Update tables styling. 

#### Phase 2.4
1. Living Front-End Stylguide
	* https://calpolydining.com/stylguide
	* Over the course of a full redesign and adoption of the Jekyll framework, we've worked to distill most of the Campus Dining interface into a set of atomic pieces, forming the Cal Poly Campus Dining Styleguide. It's a internal guide & code repository for designing and coding at Campus Dining. The beauty and simplicity of this styleguide is that it's baked right into our Jekyll framework. Changes to our scss is tied to our website and the styleguide. Automation and simplicity is king in the world of web - and makes developers smile. The styleguide helps our internal team in the following ways:
	* We can build consistently, focusing our energy on workflows and logic, not hero blocks and form - elements.
	* We can reuse code instead of reinventing the wheel. If a new component is required, we can add it here for future use.
	* We can see all of our styles and patterns in one place, quickly revealing maintenance issues.
	* Our styleguide is both a learning tool and a compass to correct our course as we build new things.
	* Styleguide functionality was inspired by Made Mistaks. https://mademistakes.com/articles/jekyll-style-guide/
2. The Dish, Landing page for email signup. https://calpolydining.com/thedish


#### Phase 2.3
1. Dynamice Menue and Nutrition Buttons.
	* Menu and nutrition buttons built dynamically from venues.yml using nutrition ID.
2. Added ability to link to prefiltered nutrition calculator
3. Slight updates to nutrition calculator UI ( SVG logos included for venues)
4. Campus Dining logo color updates to match global $parsley color

#### Phase 2.21
1. New Template
	* Phase 2 introduced an entirely design for the website designed by Kara Clark.
2. SCSS Framework Integrated
	* The template was built using [Bourbon, Neat, Bitters, and Refills](A simple and lightweight mixin library for Sass.). This is a simple and lightweight mixin library for Sass.
3. Atomic Design Methodolgy
	* The front-end template was built with [Atomoic Design Principles](http://bradfrost.com/blog/post/atomic-web-design/) in mind. However, there is still a ways to go before really adhearing to those principles.. 
4. Automated Deployment Process
	* Improved deployment processes by introduction of staging.sh and deploy.sh
5. Centralize Venue Data
	* Utilization of app/_data/venues.yml to centralize venue information that is dispersed across the site during the build process.
6. Venue Assets Integrated Dynamically
	* app/_layouts/venue.yml assumes that primary header image and logos are the same name as the page.venue yml front matter. File naming dependent on front-matter = easy jekyll automation.
7. Animated counter added to homepage
8. Static sitemap added
9. SVG Logos
	* SVG logos through out site. They're crisp on all screens and browser support for SVG is pretty good these days. 
10. Menue Buttons
	* Menu buttons added for new venues.
11. Instagram and facebook widgets added to footer.
12. Form Styling - Atomic Molecule
	* Form interface completed updated thanks to Alex Lindt. 

#### Phase 1.0
1. Props to [Oleh Zasadnyy](https://github.com/ozasadnyy) for building the boiler plate used for this project: [Optimized Jekyll Grunt](https://github.com/ozasadnyy/optimized-jekyll-grunt)
2. Special thanks to Annie Liu for building the [CP Styleguide](https://code.its.calpoly.edu/projects/CPWT/repos/styleguide/browse). It was a great template codebase to start with. Once you go sass, you never go back!

## Bugs
##### Phase 1.0
1. After intalling a duplication of this project on my Mac, Jekyll stopped compiling for my original project. Deleting the Gemfile.lock solved the issue. This has something to do with [this post](https://github.com/jekyll/jekyll/issues/4518).

##### Phase 2.0
1. The following must be added web.config file for svg to be enabled on IIS: [Read Article](http://stackoverflow.com/questions/12328651/svg-is-not-working-on-iis-webserver-on-localhost)

##### Phase 3.0'
1. Challenge - how to pull special hours of operation from Google Business or utilize a Google Sheet (that can upload/download from Google Business) for our venue.yml file.


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*