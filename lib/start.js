var buildify    = require( 'buildify' ),
    express     = require( 'express' ),
    fs          = require( 'fs' ),
    less        = require( 'less' ),
    path        = require( 'path' ),
    watch       = require( 'node-watch' ),
    wiredep     = require( 'wiredep' );

exports.launch      = function ( app ) {
    app.use( express.static( path.join( __dirname, '../public' ) ) );
    app.use( '/public', express.static( path.join( __dirname, '../public' ) ) );

    var jsDeps  = [],
        cssDeps = [];

    setPolyfills();
    setStyles();
    wiredep({
        src             : [ './public/index.html' ],
        onPathInjected  : function ( fileObject ) {
            if ( fileObject.block == 'js' ) {
                jsDeps.push( path.join( 'public', fileObject.path ) );
            } else if ( fileObject.block == 'css' ) {
                cssDeps.push( path.join( 'public', fileObject.path ) );
            }
        }
    });
};

function setPolyfills() {
    var deps    = [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ];

    buildify()
        .concat( deps )
        .uglify()
        .save( 'public/vendor/polyfills.js' );

    fs.readFile( 'public/index.html', 'utf8', function ( err, data ) {
        var result  = data.replace( /(([ \t]*)<!--\s*polyfills:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endpolyfills\s*-->)/gi, '        <!-- polyfills:js -->\n        <script src="vendor/polyfills.js"></script>\n        <!-- endpolyfills -->' );

        fs.writeFile( 'public/index.html', result, 'utf8' );
    });
};

function setStyles () {
    // Compile frontend less styles
    var stylesPath      = path.join( path.join( __dirname, '../public', 'less', 'style.less' ) ),
        compile         = function () {
            var styles  = fs.readFileSync( stylesPath, 'utf8' );
            less.render( styles, {
                compress    : true,
                filename    : 'style.less',
                paths       : [ path.join( __dirname, '../public' ) ]
            }, function ( e, output ) {
                if ( !e ) {
                    fs.writeFileSync( path.join( __dirname, '../public', 'css', 'style.css' ), output.css );
                }
            });
        };

    watch( stylesPath, compile );
    compile();
};
