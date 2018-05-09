Cal Poly Campus Dining Website - Depolyment Day - Wednesday evening 8/9/16
=============
#### To deploy to production (https://www.calpolydining.com/)
1. Do final testing on your vagrant box. The configs and root paths are the same.
2. FTP into server, copy entire www.calpolydining.com website onto your desktop. THIS IS YOUR BACKUP incase you need to revert.
3. `cp -p _config.prod.yml  _config.yml`
4. app/_assets/scss/main.scss: `$image-path: "/img";`
5. `cp -p app/_asp/common/include/i_Global.asp.prod  app/_asp/common/include/i_Global.asp`
6. `Grunt Build`
7. Empty www.calpolydining.com on the server
8. Update web.config so that index.html is defualt file, followed by Default.asp
0. `git ftp init`   ( syncroot is set to dest )
10. 'https://www.calpolydining.com/'   Check it.


## Outstanding Items
1. Build report of current website optimization
2. QA Testing
3. Redirects

