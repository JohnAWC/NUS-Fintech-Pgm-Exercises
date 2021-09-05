function addBank(){
    var node = document.createElement("li");                
    var textnode = document.createTextNode("My Digibank");        
    node.appendChild(textnode);                              
    document.getElementById("bankList").appendChild(node);
}
