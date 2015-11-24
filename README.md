# Chat Frontend

This project is frontend interface to [Chat API](https://github.com/w-osilva/chat-api).

### Install

To run this project is necessary:

* nodejs
* bower
* gulp

#### Node
```
sudo apt-get install nodejs
```

#### Bower
```
sudo npm install bower -g
```

#### Gulp
```
npm install gulp -g
```
After installing gulp you need to install additional components.
```
npm install gulp gulp-concat gulp-uglify gulp-bower gulp-sass gulp-watch gulp-jshint gulp-rename gulp-util --save-dev
```
Now we will download the dependencies **gulp bower** . (Performs the task **bower** configured in gulpfile.js).
```
gulp bower
```