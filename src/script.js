$(document).ready(function () {
  $("#weight").focus();
});

$(document).ready(function () {
  $('#calculate').click(function () {
    $('#display_message').html('Please input values');
  });
});
$(document).ready(function () {
  $('#imperial').click(function(){
    $('#imperial').css('background-color', 'purple');
    $('#imperial').css('color', 'white');
    $('#imperial').css('font-style', 'italic');
    $('#metric').css('background-color', 'transparent');
    $('#metric').css('color', 'white');
    $('#weight').attr('placeholder','Weight in lbs');
    $('#height').attr('placeholder','Height in inches');
    $('#calculate').click(function () {
      var w = parseFloat($('#weight').val());
      var h = parseFloat($('#height').val());
      var person = new Person({weight: w, height: h});
      person.calculate_bmi_imperial();
      $('#display_value').html('Your BMI is ' + person.bmiValue);
      $('#display_message').html('and you are '+ person.bmiMessage);
    });
  });
});

$(document).ready(function () {
  $('#metric').click(function(){
    $('#imperial').css('background-color', 'transparent');
    $('#imperial').css('color', 'white');
    $('#metric').css('background-color', 'purple');
    $('#metric').css('color', 'white');
    $('#metric').css('font-style', 'italic');
    $('#weight').attr('placeholder','Weight in kg');
    $('#height').attr('placeholder','Height in cm');
    $('#calculate').click(function () {
      var w = parseFloat($('#weight').val());
      var h = parseFloat($('#height').val());
      var person = new Person({weight: w, height: h});
      person.calculate_bmi_metric();
      $('#display_value').html('Your BMI is ' + person.bmiValue);
      $('#display_message').html('and you are '+ person.bmiMessage);
    });
  });
});

    // <!-- <script type="text/javascript">
    //   $(document).ready(function () {
    //     $('#imperial').click(function () {
    //       var w = parseFloat($('#weight').val());
    //       var h = parseFloat($('#height').val());
    //       var person = new Person({weight: w, height: h});
    //       var answer = document.getElementById('dropdown-selection').value;
    //        if(answer === 'metric') {
    //         person.calculate_bmi('metric');
    //         $('#display_value').html('Your BMI is ' + person.bmiValue);
    //         $('#display_message').html('and you are '+ person.bmiMessage);
    //         } else {
    //         person.calculate_bmi('imperial');
    //         $('#display_value').html('Your BMI is ' + person.bmiValue);
    //         $('#display_message').html('and you are '+ person.bmiMessage);
    //        }
    //     });
    //   });
    // </script> -->
