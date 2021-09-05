
var names = ['James','Jack','Flora', 'Mikhil'];

for (i=0; i<names.length; i++) {
    var node = document.createElement("li");                
    var textnode = document.createTextNode(names[i] + " , " + names[i].length);        
    node.appendChild(textnode);
    document.getElementById("answer").appendChild(node);                              
}


