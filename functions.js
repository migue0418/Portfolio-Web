function tabShowHide(idContent, idHeader){
    var tabs_header =["tabEducation", "tabCoding", "tabSoftware"];
    var tabs_content =["education", "coding", "software"];
    var i;

    for (i=0; i<tabs_header.length; i++){
        document.getElementById(tabs_header[i]).classList.remove('active');
    }

    for (i=0; i<tabs_content.length; i++){
        document.getElementById(tabs_content[i]).classList.add('hidden');
    }

    document.getElementById(idHeader).classList.add('active');
    document.getElementById(idContent).classList.remove('hidden');
}

function collapseIcon(tab) {
    var $dest = tab.getAttribute("data-target");
    if(tab.innerHTML == "+")
        tab.innerHTML = "-";
    else
        tab.innerHTML = "+";
    document.getElementById($dest).classList.toggle('hidden');
}
