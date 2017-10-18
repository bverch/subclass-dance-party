$(document).ready(function() {
  window.dancers = [];
  window.stages = [new RockStage(), new BallroomStage()];
  window.currentDanceFloor = stages[0];
  Stage.setStage();

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('#stage').height() * Math.random(),
      $('#stage').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('#stage').append(dancer.$node);
  });

  $('.addActionButton').on('click', function(event) {
    var dancerActionFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerActionFunction = currentDanceFloor[dancerActionFunctionName];

    // make a dancer with a random position
    dancerActionFunction();
  });

  $('#stage').on('click', function(event) {
    $('#stage').find('.yarn').remove();
    const offset = $(this).offset();
    const left = event.pageX - offset.left - 43;
    const top = event.pageY - offset.top - 40;
    console.log('stage clicked');
    
    const $yarn = $('<span class="yarn"></span>');
    const styleSettings = {top, left};
    $yarn.css(styleSettings);
    $('#stage').append($yarn);

    for (let i = 0; i < dancers.length; i++) {
      dancers[i].setPosition(top, left);
    }
  });
});

