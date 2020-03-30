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
   default:
    app(people); // restart app
      break;
  }
  mainMenu(searchResults, people);

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
                default:
                app(people); // restart app
                break;
  }
  displayPeople(people);

}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  person.map(function(person){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

 

  

  
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person);
    console.log(displayPerson([0]));

    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
      searchForDescendants(people);
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
})
 
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
  return foundPerson;
}
function searchByTraits(people){
  let gender = promptFor("Enter the infomration for the following prompts, if unknown or not needed press any alphbetical key and press enter to proceed. What is the person's 'gender'? enter 'male' or female'", chars);
  let height = promptFor("What is the person's 'height'? enter inches",chars);
  let weight = promptFor("What is the person's 'weight'? enter pounds", chars);
  let dob = promptFor("What is the person's 'dob'? enter fomral mm/dd/yyyy all in numbers",chars);
  let eyeColor = promptFor("What is the person's 'eye color'? enter single word",chars);
  let occupation = promptFor("What is the person's 'occupation'?",chars);
  
  let foundPeople = people.filter(function(person){
   if(person.gender === gender || person.height === height || person.weight === weight || person.dob === dob || person.eyeColor === eyeColor || person.occupation === occupation){
     return true;
   }
   else{
     return false;
   }
  })
  displayPeople(foundPeople)
  return foundPeople
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
  displayPeople(foundPerson)
  //return foundPeople
  
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
  displayPeople(foundPerson)
  return foundPeople
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
  displayPeople(foundPerson)
  return foundPeople
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
  displayPeople(foundPerson)
  return foundPeople
  
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
function searchForDescendants(counter, people){
  let descendants = parent.id;
  let descendants = people.filter(function(person){
  if(counter>0){
    return searchForDescendants(counter-1);
  }
  console.log(descendants);
})
}
//searchForDescendants(4);

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

function displayImmediateFamily(familyMember){
  // this function is going to be to get the immediate family members from the person we search for and display them in the console window
  // the user stories specify Names, relation t the found person 
  let familyInfo = "Name: " + familyMember.firstName + " " + familyMember.lastName + "\n";
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
