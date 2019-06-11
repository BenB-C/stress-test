// A Stress Test
// Include several questions.
// One that lists warning signs of being negatively affected by stress ("Loss of sleep", "Feeling overwhelmed", etc.)
// One that lists health symptoms linked to high-stress ("High blood pressure", "anxiety", etc.)
// Another that lists recommended coping methods to deal with stress. ("Meditate", "Manage your time", "Pet a cat", etc.) Instruct users to check all that apply to them.
// Then, based on user answers, provide some guidance: For instance, if a user reports 4 stress-related symptoms, and 6 warning signs apply to them, suggest some resources to help them out.
// Or, if a user says 4 warning signs of high stress apply to them, but they also report using 5 of the recommended ways to manage stress, tell them they're doing a pretty good job.
// Include at least 3 possible results.


$(function() {
  $("#stressForm").submit(function(event){
    event.preventDefault();

// Create var so we can put it all into array !
    var checkedWarningSigns = [];

// target input type which is inout:checkbox we put in array [name]:checked means it checked ! .each is same as forEach it pick one by one.
    $("input:checkbox[name=warning_signs]:checked").each(function(){
      var checkedValue = $(this).val();
// we create var and $(this).val(); target ones that checked and .val give a value
      checkedWarningSigns.push(checkedValue);
      console.log(checkedWarningSigns);
      console.log($(this));
// add checked value to array. if you click one is just add ["sleep"] line 20 value="sleep">Insomnia<br>
// if you click all it add all ["sleep","overhelmed", "alcohol"]

// Another way to do above two lines with one line:
  // checkedWarningSigns.push( $(this).val() );
    });
    $("input:checkbox[name=health]:checked").each(function(){
      $(this).val();
    });

    // $("input:checkbox[name=coping]:checked").each(function(){
    //   numberOfCheckedBoxes++;
    //   $(this).val();
  });
});
