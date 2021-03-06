 'use strict';

module.exports = function(grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('jit-grunt')(grunt);

    grunt.initConfig({
        app: {
            source: 'app',
            dist: 'dist',
            baseurl: ''
        },
        watch: {
            sass: {
                files: ['<%= app.source %>/_assets/scss/**/*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer','copy']
            },
            scripts: {
                files: ['<%= app.source %>/_assets/js/*.{js}'],
                tasks: ['uglify:server','copy']
            },
            jekyll: {
                files: ['<%= app.source %>/**/*.{html,yml,md,mkd,markdown}'],
                tasks: ['jekyll:server']
            },
             astrum: {
                files: ['public/pattern-library/**/*.{html,yml,md,mkd,markdown}'],
                tasks: ['copy:astrum']
            },
            //images: {
             //   files: ['<%= app.source %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'],
             //   tasks: ['copy:server']
           //},
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '.jekyll/**/*.{html,yml,md,mkd,markdown}',
                    '.tmp/<%= app.baseurl %>/css/*.css',
                    '.tmp/<%= app.baseurl %>/js/*.js',
                    //'.tmp/<%= app.baseurl %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:9000/<%= app.baseurl %>'
                    },
                    base: [
                        '.jekyll',
                        '.tmp',
                        '<%= app.source %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: {
                        target: 'http://localhost:9000/<%= app.baseurl %>'
                    },
                    base: [
                        '<%= app.dist %>',
                        '.tmp'
                    ]
                }
            }
        },
        clean: {
            server: [
                '.jekyll',
                '.tmp'
            ],
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= app.dist %>/*'
                    ]
                }]
            }
        },
        jekyll: {
            options: {
                config: '_config.yml,_config.build.yml,_config.staging.yml,_config.prod.yml',
                src: '<%= app.source %>'
            },
            dist: {
                options: {
                    config: '_config.prod.yml',
                    dest: '<%= app.dist %>/<%= app.baseurl %>',
                }
            },
            server: {
                options: {
                    config: '_config.yml',
                    dest: '.jekyll/<%= app.baseurl %>'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: '**/*.html',
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },
        xmlmin: {                                       // Task
	        dist: {                                     // Target
	            options: {                              // Target options
	                preserveComments: true
	            },
	            files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: '_mobiledata/locations.xml',
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
	        }
	    },
        uglify: {
            server: {
                options: {
                    mangle: false,
                    beautify: true,
                    report: 'min'
                   
                },
                files: {
                    '.tmp/<%= app.baseurl %>/js/calpoly.min.js': ['<%= app.source %>/_assets/js/**.js'],
                    '.tmp/<%= app.baseurl %>/js/lib.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/jquery-ui/jquery-ui.js','bower_components/slick-carousel/slick/slick.js' ,'bower_components/lightbox2/dist/js/lightbox.js','bower_components/lightbox2/dist/js/lightbox.js','bower_components/jquery-modal/jquery.modal.js']
                }
            },
            dist: {
                options: {
                    mangle: false,
                    preserveComments: false,
                    report: 'min'
                },
                files: {
                    '<%= app.dist %>/<%= app.baseurl %>/js/calpoly.min.js': ['<%= app.source %>/_assets/js/**.js'],
                    '<%= app.dist %>/<%= app.baseurl %>/js/lib.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/jquery-ui/jquery-ui.js','bower_components/slick-carousel/slick/slick.js' ,'bower_components/lightbox2/dist/js/lightbox.js','bower_components/jquery-modal/jquery.modal.js']
                }
            }
        },
        sass: {
            options: {
               includePaths: ['bower_components/bootstrap-sass/assets/stylesheets', 'bower_components/Buttons/scss', 'bower_components/slick-carousel/slick', 'bower_components/jquery-modal']
               // maybe someday ill figure this one out includePaths: ['bower_components/**/**/**/*.{scss,sass,css}']
            },
            server: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/_assets/scss',
                    src: '**/*.{scss,sass,css}',
                    dest: '.tmp/<%= app.baseurl %>/css',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                   // outputStyle: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/_assets/scss',
                    src: '**/*.{scss,sass,css}',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/css',
                    ext: '.css'
                }]
            },
            server: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/_assets/scss',
                    src: '**/*.{scss,sass,css}',
                    dest: '.tmp/<%= app.baseurl %>/css',
                    ext: '.css'
                }]
            },
        },
        uncss: {
            options: {
                htmlroot: '<%= app.dist %>/<%= app.baseurl %>',
                report: 'gzip'
            },
            dist: {
                src: '<%= app.dist %>/<%= app.baseurl %>/**/*.html',
                dest: '<%= app.dist %>/<%= app.baseurl %>/css/blog.css'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= app.baseurl %>/css',
                    src: '**/*.css',
                    dest: '.tmp/<%= app.baseurl %>/css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/css',
                    src: '**/*.css',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/css'
                }]
            }
        },
        critical: {
            dist: {
                options: {
                    base: './',
                    css: [
                        '<%= app.dist %>/<%= app.baseurl %>/css/blog.css'
                    ],
                    minify: true,
                    width: 320,
                    height: 480
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: ['**/*.html'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },
        cssmin: {
            dist: {
                options: {
                    keepSpecialComments: 0,
                    check: 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/css',
                    src: ['*.css'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>/css'
                }]
            }
        },
		imagemin: {
	         options: {
	             progressive: true,


	         },
	         dist: {
	             files: [{
	                 expand: true,
	                 cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
	                 src: '**/*.{jpg,jpeg,png,gif}',
	                 dest: '<%= app.dist %>/<%= app.baseurl %>/img'
	             }]
	         }
	     },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
                    src: '**/*.svg',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/img'
                }]
            }
        },
        responsive_images: {
			main: {
				options: {
				 	engine: 'im',
				 	sizes: [{
				        name: 'small', width: 320
				    }, {
				        name: 'medium', width: 400
				    }]
				},
				files: [{
				 	expand: true,
					src: ['**/*.{gif,png,jpg,jpge}'],
				 	cwd: 'app/responsive-img/batch-process',
				 	dest: 'app/responsive-img/processed/'
				}]
			}
		},

		responsive_images_extender: {
			
			main: {
				options: {
					baseDir: 'dist',
					ignore: ['.ignore-svg'],
					sizes: [{
				       selector: '.venue-image',
				       sizeList: [{
				           cond: 'min-width: 300px',
				           size: '50vw'
				         }, {
				           cond: 'min-width: 700px',
				           size: '70vw'
				         }, {
				           cond: 'default',
				           size: '100vw'
				       }]
				     }]
				},
				files: [{
					expand: true,
					src: ['dist/**/*.html'],
                    cwd: '',
        			dest: 'test/'
				}]
			}
		},
    	copy: {
            server: {
                files: [
                   
                    {
                       expand: true,
                       cwd: 'bower_components/font-awesome',
                       src: '**/*',
                       dest: '.tmp/<%= app.baseurl %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
                        src: '**/*.{jpg,jpeg,png,gif}',
                        dest: '.tmp/<%= app.baseurl %>/img'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/slick-carousel/slick',
                        src: 'fonts/*',
                        dest: '.tmp/<%= app.baseurl %>'
                    },
                    {
                        expand: true,
                        cwd: 'app/_assets/docs',
                        src: '**/*',
                        dest: '.tmp/docs'
                    },
                    {
                        expand: true,
                        cwd: 'app/_assets/video',
                        src: '**/*',
                        dest: '.tmp/video'
                    },
                    {
                        expand: true,
                        cwd: 'public/pattern-library',
                        src: '**/*',
                        dest: '.jekyll'
                    } 
                ]
            },
            dist: {
                files: [
                   
                    {
                       expand: true,
                       cwd: 'bower_components',
                       src: 'font-awesome/**/*',
                       dest: '<%= app.dist %>/<%= app.baseurl %>'
                    },
                    {
                        expand: true,
                        cwd: 'app/_assets/docs',
                        src: '**/*',
                        dest: '<%= app.dist %>/docs'
                    },
                    {
                        expand: true,
                        cwd: 'app/_assets/video',
                        src: '**/*',
                        dest: '<%= app.dist %>/video'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/slick-carousel/slick',
                        src: 'fonts/*',
                        dest: '<%= app.dist %>/'
                    },
                    {
                        expand: true,
                        cwd: 'public/pattern-library',
                        src: '**/*',
                        dest: '<%= app.dist %>/'
                    }
                    
                ]
            },
            bower: {
            	files: [
                    {
                    	expand: true,
                        cwd: 'bower_components/css-hamburgers/_sass/hamburgers',
                        src: '**/*.scss+',
                        dest: 'app/_assets/scss/base/hamburgers'
                    }
                    
                ]
            }
        
        },
        buildcontrol: {
            dist: {
                options: {
                    dir: '<%= app.dist %>/<%= app.baseurl %>',
                    remote: 'git@github.com:user/repo.git',
                    branch: 'gh-pages',
                    commit: true,
                    push: true,
                    connectCommits: false
                }
            }
        }
		
		       
    });

    // Define Tasks
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'jekyll:server',
            'sass:server',
            'copy:server',
            'uglify:server',
            'connect:livereload',
            'watch',
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });
    grunt.registerTask('bower_update', [
    	'copy:bower',
    ]);
    grunt.registerTask('build', [
        'clean:dist',
        'jekyll:dist',
        'svgmin',
        'sass:dist',
        'copy:dist',
        'autoprefixer:dist',
        'cssmin:dist',
        'uglify:dist',
        'htmlmin:dist',
        'xmlmin:dist',
    ]);
  	grunt.registerTask('image-sizer', [
        'responsive_images',
    ]);
    grunt.registerTask('deploy', [
        'build',
        'buildcontrol'
    ]);
    grunt.registerTask('default', [
        'serve'
    ]);
};