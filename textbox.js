function lenguname(){
    var element=document.getElementById("uname")
    element.style.borderColor="blue";
    
    var legend_tag=document.createElement("legend")
    var text=document.createTextNode("Username")
    legend_tag.appendChild(text)
    element.appendChild(legend_tag)
}