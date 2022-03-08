

function f1() {

  var random = Math.floor((Math.random() * 10) + 1);
  var num = /^[0-9]+$/;
  alert("random guess is " + random);

  var guess = document.getElementById("one").value;
  console.log(random);



  if (guess == random)      {
  alert("Good Job!")
      }

  else if (random < guess)  {
  alert("You've guessed too high!")
      }

  else if (random > guess)  {
  alert("You've guessed too low!")

      }


  else if (random != num)   {
  alert("SUBMIT NUMBERS ONLY")
      }
  }
