// Do NOT modify the HTML document manually!!!!

// Question 1 - incorrect
// Use jQuery to add two more elements to the the UL in the 'question-1' div
$('ul').append('<li>Mice</li>');
$('ul').append('<li>Snakes</li>');

// Correction
$('<li>').html.(text).append('<li>Mice</li>');
$('<li>').html.(text).append('<li>Snakes</li>');

// Question 2 - correct.
// Add a click event handler to the paragraph in the 'question-2' div
// which triggers a method called 'alertClicked',
// which will display an alert with the text of "Question 2 Success".

var alertClicked = function() {
  alert("Question 2 Success");
};

$(document).ready(function() {
  $('#question-2').on('click', alertClicked);
});

// Can also do $('#question-2 p').click(alertClicked);

// Question 3 - correct
// Why won't the following code make clicking on anything the 'question-3' div
// invoke the alertClicked method?

$('#question-3').on('click', alertClicked);

// Answer: Becuase it has to be enclosed in $(document).ready(function()) {};
// (added) - in order for it to bind properly.  Otherwise '#question-3' doesn't exist.

// Question 4 - incorrect
// Make the HTML in the 'question-4' div fade out when you hover over it,
// and fade back in when you move your mouse away from it

var fadeOutOnHover = function() {
    $(this).fadeOut('slow');
};

var fadeInOnMouseleave = function() {
    $(this).fadeIn('slow');
};

$(document).ready(function() {
  $('h2').hover(fadeOnHover);
  $('h2').mouseLeave(fadeInMouseleave);
});

// Correction: need to specify the id rather than the element
$(document).ready(function() {
  $('#question-4').hover(fadeOutOnHover);
  $('#question-4').mouseLeave(fadeInMouseleave);
});

// Question 5 - incorrect
// Make question 5's h2 turn blue when someone types 'winning'
// in its input element and hits enter


var makeMeBlue = function() {
  if
};

$(document).ready(function() {
  $('#q-5-input').change(function() {
    if (this.val() == 'winning') {
      $('#q-5-input').parent.addClass('blue');
    };
  });

});

// Correction
$(document).ready(function() {
  $('#q-5-input').change(function() {
    if ($(this).val() === 'winning') { // Need to jquery function "this", and use tripple equals
      $('#q-5-input').prev().css(color, 'blue'); //use prev() instead of parent() as parent() will give us the div
                                                // could also have done sibling()
                                                // use .css instead of addClass (don't have a 'blue' class defined)
    };
  });
});

// another way
var turnBlue = function(event) {
  if (event.which === 13 && ($(this).val() === 'winning')) { //event.which tells you which event
    $(this).parent.find('h2').css('color', 'blue');
  };
});

$(document)ready(function() {
  $('#q-5-input').keypress(turnBlue);
});



// Question 6 - incorrect
// Add a method to the String prototype called 'reverse'
// which will return the string reversed.
// You should be able to run 'foo'.reverse() and get 'oof'
// Use this method to reverse the text in the h2 in the 'question-6' div

String.prototype.reverse = function() {
  var len = this.length;
  var revString = ""
  for (i = (len - 1); i >= 0; i--) {
    revString += this.charAt(i);
  }
  return revString;
};


// Totally unsure of this one
$(document).ready(function() {
  var rev = $('#question-6').parent().reverse();
});

// Correction
$(document).ready(function() {
  var orig = ('#question-6 h2').val();
  $('#question-6 h2').html(orig.reverse()); // needed to call .prev.text(reverse())

});


// Question 7 - correct
// Write a method called 'highLightHeaders' that will add a class of 'highlight'
// to all h2's when it is invoked

var highLightHeaders = function() {
  $('h2').addClass('highlight');
}
// Question 8 - correct
// Define a constructor function called `Cat`,that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
};

// Question 9 - correct
// Add a function called `description` to the `Cat` prototype that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

Cat.prototype.description = function() {
  return this.name + " is a " + this.age + "-year-old " + this.color + " cat."
}


// Question 10 - incorrect
// Use the methods of .map and .reduce to return the
// sum the prices of the objects in the array below.
// Do *not* use a for loop

// Googled this one..

var items = [
  {name: 'iPhone 5c', price: 99.99},
  {name: 'iPhone 5s', price: 149.99},
  {name: 'iPhone 6', price: 249.99},
  {name: 'iPhone 6 plus', price: 399.99}
];

items.map(function(item) {
  return item.price;
})
.reduce(function(a,b)) { // takes first 2, and returns a result add to third return a result etc
  return a + b;
}
