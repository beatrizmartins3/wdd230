const input=document.querySelector('#favchap');
const button=document.querySelector('button');
const list=document.querySelector('#list');

button.addEventListener('cilck',function(){if (input.value != ''){'Enter a book and chapter.'}});
button.addEventListener('click',()=> { ('Press enter when to search') });

const li=document.createElement('li');
const deleteButton=document.createElement('button');
li.textContent=input.value;
deleteButton.textContent='X';
li.append(deleteButton);
list.append(li);
deleteButton.addEventListener('click',function(){
    list.removeChild(li);
    input.focus();
});
input.focus();
input.value='';