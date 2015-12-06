function send(){
    var node = document.getElementById('message');
    var child = document.createElement('div');
    child.setAttribute("class", 'comment');
    node.appendChild(child);
    child.innerHTML="<h3>"+"<img src='pic/2.png'>"+"<strong>noname<strong/>"+"</h3>"+"<p>"+document.getElementById('comment').value+"</p>"+"<br><br>";
    return false;
    }
