let submitButton=document.getElementById('btn');
let addItem=document.getElementById('form-control');
let list=document.getElementById('list');
let count=0;
submitButton.addEventListener('click',function(){
    if(addItem.value==""){
        alert("add values");
        return;
    }
    count=count+1;
    var counter=document.createElement('P');
    var para=document.createElement('p');
    var div=document.createElement('DIV');
    var check= document.createElement("input"); 
    check.type= "checkbox";
    var close=document.createElement('button');
    counter.innerText=count+"."+" ";

    close.innerText='Delete';
    counter.style.fontSize="20px";
    div.classList.add('divstyle')
    para.classList.add('paraStyle');
    close.classList.add('btnstyle');
    para.innerText=addItem.value ;
    div.appendChild(counter);
    list.appendChild(div);
    div.appendChild(para);
    div.appendChild(close);
    div.appendChild(check);
    addItem.value="";
    close.addEventListener('click',function(){
        list.removeChild(div);
        count=count-1
    })
    });




