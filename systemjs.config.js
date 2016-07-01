( function( global ) {
    // map tells the System loader where to look for things
    var map = {
            'app'           : 'app',
            '@angular'      : 'node_modules/@angular',
            'ng2-translate' : 'node_modules/ng2-translate',
            'rxjs'          : 'node_modules/rxjs'
        };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages    = {
            'app'           : {
                main                : 'main.js',
                defaultExtension    : 'js'
            },
            'ng2-translate' : {
                defaultExtension    : 'js'
            },
            'rxjs'          : {
                defaultExtension    : 'js'
            }
        },
        ngPackages  = [
            'common',
            'compiler',
            'core',
            'forms',
            'http',
            'platform-browser',
            'platform-browser-dynamic',
            'router'
        ];

    // Individual files (~300 requests):
    function packIndex( pkgName ) {
        packages[ '@angular/' + pkgName ] = {
            main                : 'index.js',
            defaultExtension    : 'js'
        };
    }
    // Bundled (~40 requests):
    function packUmd( pkgName ) {
        if ( pkgName == "router" ) {
            packages[ '@angular/' + pkgName ]   = {
                main                : 'index.js',
                defaultExtension    : 'js'
            };
        } else {
            packages[ '@angular/' + pkgName ]   = {
                main                : 'bundles/' + pkgName + '.umd.js',
                defaultExtension    : 'js'
            };
        }
    }

    var setPackageConfig    = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackages.forEach( setPackageConfig );

    var config              = {
            map         : map,
            packages    : packages
        };

    System.config( config );
} )( this );
