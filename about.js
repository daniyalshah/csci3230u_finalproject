var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');
var mongoose = require('mongoose');

// database config
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blushmatter', {
      useNewUrlParser: true
   },
   function(error) {
      if (error) {
         return console.error('Unable to connect:', error);
      }
   });
mongoose.set('useCreateIndex', true);

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: false
}));

// configure the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// configure sessions
app.use(session({
   genid: function(request) {
      return uuid();
   },
   resave: false,
   saveUninitialized: false,
   // cookie: {secure: true},
   secret: 'apollo slackware prepositional expectations'
}));

// utility functions (read: hacks)
var emails = [];
function emailExits(toFind) {
   for (i = 0; i < emails.length; i++) {
      if (emails[i] === toFind) {
         return true;
      }
   }
   return false;
}

// database schemas
var Schema = mongoose.Schema;
var contactSchema = new Schema({
   username: String,
   email: {
      type: String,
      unique: true,
      index: true
   },
   message: String
}, {
   collection: 'contact'
});
var Contact = mongoose.model('contact', contactSchema);

//routes
app.get('/', function(request, response) {
   response.sendFile(__dirname + '/public/main.html');
});

app.get('/portraits', function(request, response) {
   response.sendFile(__dirname + '/public/portraits.html');
});

app.get('/oneminute', function(request, response) {
   response.sendFile(__dirname + '/public/oneminute.html');
});

app.get('/birthdayedit', function(request, response) {
   response.sendFile(__dirname + '/public/birthdayedit.html');
});

app.get('/automotive', function(request, response) {
   response.sendFile(__dirname + '/public/automotive.html');
});

//routes
app.get('/about', function(request, response) {
   username = request.session.username;
   response.render('about', {
      username: username
   });
});

app.post('/aboutProcess', function(request, response){
  username = request.body.username;
  email = request.body.email;
  message = request.body.usermsg;

  console.log('user name:', username);
  console.log('user email:', email);

  newContact = new Contact({
    username: username,
    email: email,
    message: message
  });

  newContact.save(function(error) {
    if (error) {
       response.render('about',
                       {errorMessage: 'Unable to send message.'});
    } else {
       request.session.username = username;
       response.render('aboutSent', {
          username: username
       });
    }
 });
});

// web listener
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
   console.log('Server listening on port ' + app.get('port'));
});
