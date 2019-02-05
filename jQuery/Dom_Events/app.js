$(function() {
  // alert('Are you ready to count by ones, tens, and hundred?')
  var num = 1;
  var numOne = 1
  var numTwo = 11;
  var numThree = 101;
  $('.box').on('click', function(){
    num++ ;
    if (num <= 10)
      $('#counter-by10').text(num * 10);
    if (num <= 100)
      $('#counter-by100').text(num * 100);
  })
  $('button').on('click', function(){
    $('#counter-1').text(numOne++);
    $('#counter-10').text(numTwo++);
    $('#counter-100').text(numThree++);
    if (num <= 10)
      $('#counter-by10').text(numOne++ * 10)
    if(num <= 100)
      $('#counter-by100').text(numOne++ * 100)
  })
  $('.box').draggable({
    helper:'clone'
  })
  $('document').droppable()
})

// When the user clicks on the '10' box, a separate counter counts up by 10.
// When the user clicks on the '100' box, a separate counter counts up by 100.
// Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
// When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
// Extra Credit: allow the user to drag and drop the shapes.