"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = chooseTraitsSearch(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
  
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

function chooseTraitsSearch(people){
let searchType = promptFor("Would you like to search for one or multiple traits up to 5? Enter 'one' or 'multiple'", chars);
let searchResults;
switch(searchType){
case 'one':
 searchResults = ChooseWhichTraitsearch(people);
 break;
 case 'multiple':
   searchResults = searchByTraits(people);
   break;
  }
}
function ChooseWhichTraitsearch(people){
  let searchType = promptFor("Would you like to seacrh for 'gender' 'dob' 'height' 'weight' 'eye color', or 'occupation'?", chars);
  let searchResults;
  switch(searchType){
    case 'gender':
      searchResults = searchByGender(people);
      break;
      case 'dob':
        searchResults = searchByDob(people);
        break;
        case 'height':
          searchResults = searchByHeight(people);
          break;
          case 'weight':
            searchResults = searchByWeight(people);
            break;
            case 'eye color':
              searchResults = searchByEyeColor(people);
              break;
              case 'occupation':
                searchResults = searchByOccupation(people);
                break;
  }

}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    console.log(displayPerson(person));
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson[0];
}
function searchByGender(people){
  let gender = promptFor("Please enter a 'male' or 'female'", chars);

  let foundPerson = people.filter(function(person){
   if(person.gender === gender){
     return true;
   }
   else{
     return false;
   }
  })
  return foundPerson;
}
function searchByDob(people){
  let dob = promptFor("Please enter 'dob' in this format with numbers: mm/dd/yyyy", chars);

  let foundPerson = people.filter(function(person){
   if(person.dob === dob){
     return true;
   }
   else{
     return false;
   }
  })
  return foundPerson;
}
function searchByHeight(people){
  let height = promptFor("Please enter 'height' in this format with numbers in inches: nn", chars);

  let foundPerson = people.filter(function(person){
   if(person.height === height){
     return true;
   }
   else{
     return false;
   }
  })
  return foundPerson;
}
function searchByWeight(people){
  let weight = promptFor("Please enter 'weight' in this format: nnn with numbers in pounds", chars);

  let foundPerson = people.filter(function(person){
   if(person.weight === weight){
     return true;
   }
   else{
     return false;
   }
  })
  return foundPerson;
}
function searchByEyeColor(people){
  let eyeColor = promptFor("Please enter 'eye color'", chars);

  let foundPerson = people.filter(function(person){
   if(person.eyeColor === eyeColor){
     return true;
   }
   else{
     return false;
   }
  })
  return foundPerson;
}
function searchByOccupation(people){
  let occupation = promptFor("Please enter 'occupation'", chars);

  let foundPerson = people.filter(function(person){
   if(person.occupation === occupation){
     return true;
   }
   else{
     return false;
   }
  })
  return foundPerson;
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Name: " + person.firstName + " " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Age: " + person.age + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + person.currentSpouse + "\n"
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
