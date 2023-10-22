// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// This adds a current date to the title of the schedule. It changes each day.
var todayDate = dayjs().format('dddd, MMM D YYYY');
$("#currentDay").html(todayDate);

$(function () {
// Targets saveBtn adding the event listener through jquery
  $('.saveBtn').on('click', function() {
    // The closest attribute here traverses back up the DOM to find the ancestor element, then the attr id selects the correct attribute to apply the new const to.
    const timeBlockId = $(this).closest('.time-block').attr('id');
  
    // This line creates the field for user input within the textarea
    const userInput = $(this).siblings('textarea').val();
  
    // Save the user input to local storage
    localStorage.setItem(timeBlockId, userInput);
  });
  
  $(document).ready(function() {
    function updateTimeBlockColors() {
      // I'm still working on getting this const to run through dayjs
      const currentHour = new Date().getHours();
      // Loops through each time block
      $('.time-block').each(function() {
        // This const parses the ids, which separate the hour divs in my HTML. I did this so I can later create an if else to apply classes.
        const blockHour = parseInt($(this).attr('id'));
  
        // Creates a time comparison between the blockHour and currentHour, which will automatically adjust the class.
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
    }
    // Runs the function to automatically change the classes to the time-appropriate colors
    updateTimeBlockColors();
  
    // Set an interval to update the classes every 5 minutes
    setInterval(updateTimeBlockClasses, 300000);
  });
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 

});
