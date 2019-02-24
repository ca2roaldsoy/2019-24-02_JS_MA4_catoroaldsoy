// TODO Cards    
var myBucketList = "https://jsonplaceholder.typicode.com/todos";   
            
    fetch(myBucketList)

        .then (function (response){
        return(response.json())
        }) .then(function(response){
            
      
        for(var i=0; i < response.length; i++){
            
            var cardNr = i+1; //card starts from nr 1
            var unLiItem = document.createElement("ul");
            var liItem = document.createElement("li"); // create list
            document.getElementById("unLi").appendChild(liItem); //bind list to unorderd list
                
                liItem.innerHTML += "<h2><pre> Bucket List number " + cardNr + "</pre>";
                liItem.innerHTML += "<pre>userId: " + response[i].userId + "</pre>";
                liItem.innerHTML += "<pre>id: " + response[i].id + "</pre>";
                liItem.innerHTML += "<pre>title: " + response[i].title + "</pre>";
                liItem.innerHTML += "<pre>complete:<i> " + response[i].completed + "</pre>";

                //style the todo cards
                liItem.style.display = "inline-block";
                liItem.style.width = "600px";
                liItem.style.margin = "50px";
                liItem.style.border = "thick solid #8d9a9c";
                liItem.style.padding = "10px";
                liItem.style.textAlign = "center";
                liItem.style.outline = "1px solid #515ee8";
                liItem.style.backgroundColor = "#befdff";
            
            }   
        })  

            .catch (error => console.log(error))
        