// ┌─────────────┐
// │ Gruntfile   │
// └─────────────┘
// Grunt wraps several tasks to ease development

// Javascript banner
var banner = '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'*  <%= pkg.homepage %>\n' +
				'*  Copyright (c) <%= grunt.template.today("yyyy") %> Environmental Systems Research Institute, Inc.\n' +
				'*  Apache 2.0 License */\n';

module.exports = function (grunt) {  
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);  
	// Project configuration.  
	grunt.initConfig({  
		pkg: grunt.file.readJSON('package.json'), 

		// Build CSS from SASS
		'sass': {
			options: {
				includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets']
			},
			expanded: {
				files: {
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
  =======
  <<<<<<< als-v0.8-js-4.9
					'dist/css/calcite-maps-bootstrap-v0.9.css': 'lib/sass/build-calcite-maps-bootstrap.scss',
					'dist/css/calcite-maps-v0.9.css': 'lib/sass/build-calcite-maps.scss',
					'dist/css/layouts/inline-zoom-v0.9.css': 'lib/sass/layouts/inline-zoom.scss',
					'dist/css/layouts/large-title-v0.9.css': 'lib/sass/layouts/large-title.scss',
					'dist/css/layouts/small-title-v0.9.css': 'lib/sass/layouts/small-title.scss',
					'dist/css/support/arcgis-3.x-v0.9.css': 'lib/sass/support/arcgis-3.x.scss',
					'dist/css/support/arcgis-4.x-v0.9.css': 'lib/sass/support/arcgis-4.x.scss',
					'dist/css/support/esri-leaflet-v0.9.css': 'lib/sass/support/esri-leaflet.scss'
  =======
  >>>>>>> als-v0.8-js-4.8
					'dist/css/calcite-maps-bootstrap-v0.10.css': 'lib/sass/build-calcite-maps-bootstrap.scss',
					'dist/css/calcite-maps-v0.10.css': 'lib/sass/build-calcite-maps.scss',
					'dist/css/layouts/inline-zoom-v0.10.css': 'lib/sass/layouts/inline-zoom.scss',
					'dist/css/layouts/large-title-v0.10.css': 'lib/sass/layouts/large-title.scss',
					'dist/css/layouts/small-title-v0.10.css': 'lib/sass/layouts/small-title.scss',
					'dist/css/support/arcgis-3.x-v0.10.css': 'lib/sass/support/arcgis-3.x.scss',
					'dist/css/support/arcgis-4.x-v0.10.css': 'lib/sass/support/arcgis-4.x.scss',
					'dist/css/support/esri-leaflet-v0.10.css': 'lib/sass/support/esri-leaflet.scss'
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
  =======
  >>>>>>> als-v0.8-js-4.8
  >>>>>>> als-v0.8-js-4.8
				}
			}
		}, 

		// Minify CSS
		cssmin: {  
			target: {
				options: {
					banner: banner
				},
				files: {
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
  =======
  <<<<<<< als-v0.8-js-4.9
					'dist/css/calcite-maps.min-v0.9.css': ['dist/css/calcite-maps-v0.9.css'],
					'dist/css/calcite-maps-bootstrap.min-v0.9.css': ['dist/css/calcite-maps-bootstrap-v0.9.css'],
					'dist/css/calcite-maps-arcgis-3.x.min-v0.9.css': ['dist/css/calcite-maps-v0.9.css', 'dist/css/layouts/inline-zoom-v0.9.css', 'dist/css/layouts/large-title-v0.9.css', 'dist/css/layouts/small-title-v0.9.css', 'dist/css/support/arcgis-3.x-v0.9.css'],
					'dist/css/calcite-maps-arcgis-4.x.min-v0.9.css': ['dist/css/calcite-maps-v0.9.css', 'dist/css/layouts/inline-zoom-v0.9.css', 'dist/css/layouts/large-title-v0.9.css', 'dist/css/layouts/small-title-v0.9.css','dist/css/support/arcgis-4.x-v0.9.css'],
					'dist/css/calcite-maps-esri-leaflet.min-v0.9.css': ['dist/css/calcite-maps-v0.9.css', 'dist/css/layouts/inline-zoom-v0.9.css', 'dist/css/layouts/large-title-v0.9.css', 'dist/css/layouts/small-title-v0.9.css', 'dist/css/support/esri-leaflet-v0.9.css']
  =======
  >>>>>>> als-v0.8-js-4.8
					'dist/css/calcite-maps.min-v0.10.css': ['dist/css/calcite-maps-v0.10.css'],
					'dist/css/calcite-maps-bootstrap.min-v0.10.css': ['dist/css/calcite-maps-bootstrap-v0.10.css'],
					'dist/css/calcite-maps-arcgis-3.x.min-v0.10.css': ['dist/css/calcite-maps-v0.10.css', 'dist/css/layouts/inline-zoom-v0.10.css', 'dist/css/layouts/large-title-v0.10.css', 'dist/css/layouts/small-title-v0.10.css', 'dist/css/support/arcgis-3.x-v0.10.css'],
					'dist/css/calcite-maps-arcgis-4.x.min-v0.10.css': ['dist/css/calcite-maps-v0.10.css', 'dist/css/layouts/inline-zoom-v0.10.css', 'dist/css/layouts/large-title-v0.10.css', 'dist/css/layouts/small-title-v0.10.css','dist/css/support/arcgis-4.x-v0.10.css'],
					'dist/css/calcite-maps-esri-leaflet.min-v0.10.css': ['dist/css/calcite-maps-v0.10.css', 'dist/css/layouts/inline-zoom-v0.10.css', 'dist/css/layouts/large-title-v0.10.css', 'dist/css/layouts/small-title-v0.10.css', 'dist/css/support/esri-leaflet-v0.10.css']
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
  =======
  >>>>>>> als-v0.8-js-4.8
  >>>>>>> als-v0.8-js-4.8
				}
			}
		},

		// Uglify JS (optional)
		// 'uglify': {
		// 	options: {
		// 			mangle: false,
		// 			banner: banner
		// 	},
		// 	dist: {
		// 		files: {
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
		// 			'dist/js/dojo/calcitemaps-v0.10.js': ['lib/js/dojo/calcitemaps.js'],
		// 			'dist/js/jquery/calcitemaps-v0.10.js': ['lib/js/jquery/calcitemaps.js']
  =======
  <<<<<<< als-v0.8-js-4.9
		// 			'dist/js/dojo/calcitemaps-v0.9.js': ['lib/js/dojo/calcitemaps.js'],
		// 			'dist/js/jquery/calcitemaps-v0.9.js': ['lib/js/jquery/calcitemaps.js']
  =======
		// 			'dist/js/dojo/calcitemaps-v0.10.js': ['lib/js/dojo/calcitemaps.js'],
		// 			'dist/js/jquery/calcitemaps-v0.10.js': ['lib/js/jquery/calcitemaps.js']
  >>>>>>> als-v0.8-js-4.8
  >>>>>>> als-v0.8-js-4.8
		// 		}
		// 	}
		// },

		// Copy to dist
		'copy': {
			calcitemapsdojo: {
				expand: true,
				flatten: true,
				src: ['./lib/js/dojo/*.js'],
				dest:	'./dist/js/dojo/',
				rename: function(dest, src) {
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
          return dest + '/' + src.replace(/.js/, "-v0.10.js");
  =======
  <<<<<<< als-v0.8-js-4.9
          return dest + '/' + src.replace(/.js/, "-v0.9.js");
  =======
          return dest + '/' + src.replace(/.js/, "-v0.10.js");
  >>>>>>> als-v0.8-js-4.8
  >>>>>>> als-v0.8-js-4.8
    		},
			},
			calcitemapsjquery: {
				expand: true,
				flatten: true,
				src: ['./lib/js/jquery/*.js'],
				dest:	'./dist/js/jquery/',
				rename: function(dest, src) {
  <<<<<<< dependabot/npm_and_yarn/node-sass-4.14.1
          return dest + '/' + src.replace(/calcitemaps/, "calcitemaps-v0.10");
  =======
  <<<<<<< als-v0.8-js-4.9
          return dest + '/' + src.replace(/calcitemaps/, "calcitemaps-v0.9");
  =======
          return dest + '/' + src.replace(/calcitemaps/, "calcitemaps-v0.10");
  >>>>>>> als-v0.8-js-4.8
  >>>>>>> als-v0.8-js-4.8
    		},
			},
			bootstrapfonts: {
				expand: true,
				flatten: true,
				src: ['./node_modules/bootstrap-sass/assets/fonts/bootstrap/*'],
				dest: './dist/fonts/bootstrap/'
			},
			calciteiconfonts: {
				expand: true,
				flatten: true,
				src: ['./lib/fonts/calcite/*'],
				dest: './dist/fonts/calcite/'
			},
			calcitefonts: {
				expand: true,
				flatten: true,
				src: ['./lib/fonts/avenir-next/*'],
				dest: './dist/fonts/avenir-next/'
			},
			vendor: {
				expand: true,
				flatten: false,
				//cwd: './bower_components/dojo-bootstrap',
				cwd: './lib/js/dojo-bootstrap', // Use local build now
				src: '**',
				dest: './dist/vendor/dojo-bootstrap/'
			}
		},

		// Deploy doc site to gh-pages
    // 'gh-pages': {
    //   options: {
    //     base: 'docs/build',
    //     repo: 'https://github.com/Esri/calcite-maps.git'
    //   },
    //   src: ['**']
    // }

	});  
	// Default tasks
	grunt.registerTask('default', ['sass', 'cssmin', 'copy:calcitemapsdojo', 'copy:calcitemapsjquery', 'copy:bootstrapfonts', 'copy:calciteiconfonts', 'copy:calcitefonts', 'copy:vendor']);
};