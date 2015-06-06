# blockme
BlockMe.

Setup

Make sure install node and npm. If you do, make sure node is up-to-date

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```


Install npm for electron

```
sudo npm install electron-prebuilt -g
```
if -g option did not work, do this first then try above
```
sudo npm install electron-prebuilt --save-dev
```

Install Electron pre build binary as runner

https://github.com/atom/electron/releases

use electron-v0.x.x-darwin-x64.zip



Run
```
sudo /Applications/Electron.app/Contents/MacOS/Electron .
```

Build Icon
```
cd icons
iconutil -c icns BlockMe.iconset 
```


Build Cross Platform

at root, create gulpfile.js. then
```
sudo npm install gulp
sudo npm install gulp-atom
sudo gulp atom
```
This will generate binaries in releases folder.
See more options.
https://github.com/xeodou/gulp-atom#options
