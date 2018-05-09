Cal Poly Corporation Jekyll Boilerplate
=============

## Get Started
1.  Install [Node.js](www.nodejs.org) and [Ruby](https://www.ruby-lang.org/)
2.  Run `gem install bundler`
3.  Install 'grunt-cli' and 'bower' globally with `npm install -g grunt-cli bower`
4.  `$cd` to the directory and run `bundle install`
5.  Run `npm install` to install the necessary "npm" dependencies
6.  Then run `bower install` to install the front-end dependencies
7.  **That's all. Your Cal Poly Corporation Jekyll Boilerplate website is ready**
> Built using the [Optimized Jekyll Site With Grunt project](https://github.com/ozasadnyy/optimized-jekyll-grunt) by [Oleh Zasadnyy](https://github.com/ozasadnyy)
> You can find more information about the project in [this article](http://o.zasadnyy.com/blog/optimized-jekyll-site-with-grunt).

## Environment Variables
1. Each _config.yml.(env) has a environment variable set. Only switch exist in app/layouts/footer_calculator.html at this point in time.
2. $image-path sets a sass variable for the root image directory. We needed this to stage the website within the admin. Our yml variables are not accessible via scss.

## Staging Server Development
#### To prepare your script for staging deployment (https://webapps.calpolycorporation.org/jobid/staging/)
1. `cd staging`
2. `git init` - we have to initialize a blank git repo in the staging folder. This allows us to set git-ftp credentials that allow us to push to our staging server, https://webapps.calpolycorporation.org/jobid/
3. set git-ftp credentials in staging/.git/config (You will be given deployment FTP credentials if authorized for staging deployment)
4. Review /staging.sh bash script. Update 'cd path-to-your-repo/repo` is correct
5. Manually test script f

#### Deploying to Staging
1. `./staging.sh`

## Deploying to Production

#### To prepare your script for production deployment (https://www.calpolydining.com/)
1. set git-ftp credentials in /.git/config (You will be given deployment FTP credentials if authorized for production deployment)
4. Review /deploy.sh bash script. Up date 'cd path-to-your-repo/repo` is correct
5. Manually test script first and check to see if your updates were push to production.
#### Deploying to Production
1. `./deploy.sh branch-or-hotfix-name`