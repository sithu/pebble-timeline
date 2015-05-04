/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var Accel = require('ui/accel');

var home = new UI.Card({
  title: '$1500',
  subtitle: 'net-income',
  body: 'for today',
  style: 'large'
});

// Create TimeText
var timeText = new UI.TimeText({
  // position: new Vector2(0, 25),
  size: new Vector2(144, 30),
  text: "%H:%M %a",
  font: 'gothic-24-bold',
  color: 'white',
  textAlign: 'center'
});

// accelerometer init
Accel.init();

// accelerometer
Accel.on('tap', function(e) {
  console.log('Tap event on axis: ' + e.axis + ' and direction: ' + e.direction);
});

Accel.peek(function(e) {
  console.log('Current acceleration on axis are: X=' + e.accel.x + ' Y=' + e.accel.y + ' Z=' + e.accel.z);
});

// main init
var main = home;
main.show();

main.on('accelTap', function(e) {
 console.log('Tapped the home window');
});

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Daily'
      /*  icon: 'images/menu_icon.png', */
      }, {
        title: 'Weekly'
      }, {
        title: 'Monthly'
      }, {
        title: 'Yearly'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'up', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: '$1500',
    textAlign: 'center'
  });
  
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
