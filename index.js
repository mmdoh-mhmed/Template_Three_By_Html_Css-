

let last_li = document.querySelector('#last')

last_li.onclick = function () { 
    if(document.querySelector('#enterHeader').style.display == ''){
        document.querySelector('#enterHeader').style.display = 'flex';
    }
    else if(document.querySelector('#enterHeader').style.display == 'flex'){
        document.querySelector('#enterHeader').style.display = ''
    }
}