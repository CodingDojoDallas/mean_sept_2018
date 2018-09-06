users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  
  var userLanguages = function(allUsers){
      output = "";
      for(i in allUsers){
          currentuser = allUsers[i]; 
          output +=  currentuser["fname"]+ ' ' + currentuser["lname"] + ' ';
          output += "knows " ;
          for(let j = 0, l = allUsers [i]["languages"].length; j < l; j++){
              output += allUsers [i]["languages"][j]
              if (j + 2 < l){
                  output += ", "
              }
              else if (j + 2 == l){
                  output += " and "
              }
                  
            }
            output += ".";
        var newArray = []  
        if ("interests" in currentuser && currentuser["interests"] != undefined){
              output += "\n";
              output += currentuser["fname"] + " likes "
              
            for(k in currentuser["interests"]){  
            //   console.log(currentuser["interests"][k]);
              newArray = newArray.concat(currentuser["interests"][k]);
            }
            // console.log(newArray);
            
            for(let k = 0, l = newArray.length; k < l; k++){
              output += newArray[k]
              if (k + 2 < l){
                  output += ", "
              }
              else if (k + 2 == l){
                  output += " and "
              }
                  
            }
          }

          if(i != allUsers.length-1){
            output += "\n";
          }

        }
      return output;
    }
  
  console.log(userLanguages(users))