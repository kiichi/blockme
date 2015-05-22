var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc');
var fs = require('fs');
var Menu = require('menu');
var Tray = require('tray');

var appIcon = null;

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	if (process.platform != 'darwin')
	app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
    appIcon = new Tray('/Users/kiichi/work/node/prj/blockme/src/tray.png');
     var contextMenu = Menu.buildFromTemplate([
       { label: '1 Hour', type: 'radio' },
       { label: 'Until Noon', type: 'radio' },
       { label: 'Until 5pm', type: 'radio', checked: true },
       { label: 'Settings', type: 'radio' },
     ]);
     appIcon.setToolTip('This is my application.');
     appIcon.setContextMenu(contextMenu);
	
	
	
	
	// Create the browser window.
	mainWindow = new BrowserWindow({width: 800, height: 600});

	// and load the index.html of the app.
	mainWindow.loadUrl('file://' + __dirname + '/index.html');


	// File open dialog test
	//var dialog = require('dialog');
	//console.log(dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));


	ipc.on('load', function(event, arg) {
		console.log("load called");
		console.log(arg);  // prints some
		fs.readFile('/etc/hosts', 'utf8', function (err,data) {
			if (err) {
				return console.log(err);
			}
			console.log(data);
			event.returnValue = data;
		});
	});

	ipc.on('save', function(event, arg) {
		console.log("save called");
		console.log(arg);  // prints something
		fs.writeFile('test.txt', arg, function (err) {
			console.log('saved test...');
		});
		fs.writeFile('/etc/hosts', arg, function (err) {
			if (err) {
				return console.log(err);
			}
			console.log('saved hosts...');
		});
		event.returnValue = 'success';
	});

	ipc.on('online-status-changed', function(event, status) {
	  console.log(status);
	});

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
});
