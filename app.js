function addItem() {

    var inputItem = document.getElementById("todoItem");
    var val = inputItem.value;
    if (val === "") {
        alert("Please enter the Task")
    } else {

        var list = document.getElementById("tasks");
        var editbtn = document.createElement('button');

        var nodeeditbtn = document.createElement('i');
        nodeeditbtn.setAttribute('class', 'fa fa-pencil');
        nodeeditbtn.setAttribute('aria-hidden', 'true');
        editbtn.appendChild(nodeeditbtn);
        editbtn.setAttribute('class', 'btn btn-success mbtn');
        editbtn.setAttribute('onclick', 'editItem(this);');


        var delbtn = document.createElement('button');
        var nodedelbtn = document.createElement('i');
        nodedelbtn.setAttribute('class', 'fa fa-trash-o');
        nodedelbtn.setAttribute('aria-hidden', 'true');
        delbtn.appendChild(nodedelbtn);
        delbtn.setAttribute('class', 'btn btn-danger');
        delbtn.setAttribute('onclick', 'delItem(this);');

        var item = document.createElement('li');
        item.innerHTML = val;
        item.setAttribute('class', 'alert alert-dark')

        item.appendChild(editbtn);
        item.appendChild(delbtn);
        list.appendChild(item);

        inputItem.value = "";


    }
}
function delItem(v) {
    v.disabled = true;
    var itm = v;
    var li = itm.parentNode;
    var valLi = li.innerHTML;

    var deletedUl = document.getElementById("deleted");
    deletedUl.style.borderTop = "2px solid #ff6666";

    var lidele = document.createElement('li');
    lidele.setAttribute('class', 'alert alert-danger');
    lidele.innerHTML = valLi;
    deletedUl.appendChild(lidele);
    console.log(li)
    var p = li.parentNode;
    p.removeChild(li);


}


function editItem(e) {
    e.nextSibling.hidden = true;

    var item = e;
    var li = item.parentNode;
    var litext = li.firstChild;

    var nodeeditbtn = document.createElement('i');
    nodeeditbtn.setAttribute('class', 'fa fa-floppy-o');
    nodeeditbtn.setAttribute('aria-hidden', 'true');
    item.innerHTML = "";
    item.appendChild(nodeeditbtn);
    item.setAttribute('onclick', 'saveitem(this)');
    var editNode = document.createElement('input');
    editNode.setAttribute('id', 'edititeminput');
    editNode.setAttribute("value", litext.nodeValue);

    litext.remove();
    li.prepend(editNode);

}

function saveitem(s) {

    var itembtn = s.previousSibling;
    var p = s.parentNode;
    var valueedited = itembtn.value;
    var nodetext = document.createTextNode(valueedited);
    var fc = p.firstChild;
    p.removeChild(fc);
    p.prepend(nodetext);
    var nodeeditbtn = document.createElement('i');
    nodeeditbtn.setAttribute('class', 'fa fa-pencil');
    nodeeditbtn.setAttribute('aria-hidden', 'true');
    s.innerHTML = "";
    s.appendChild(nodeeditbtn);
    s.setAttribute('onclick', 'editItem(this)');
    s.nextSibling.hidden = false;

}