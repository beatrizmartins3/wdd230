const input=document.querySelector('#favchap');
const button=document.querySelector('button');
const list=document.querySelector('#list');

let chaptersArray = getList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener('cilck',function(){if (input.value != ''){'Enter a book and chapter.'}});
button.addEventListener('click',()=> { 
    if (input.value !=''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setList();
        input.value();
        input.focus();
    }
 });

 function displayList(item){
    const li=document.createElement('li');
    const deleteButton=document.createElement('button');
    li.textContent=item;
    deleteButton.textContent='X';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click',function(){
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
    });
    
}


input.focus();
input.value='';

function setList(){
    localStorage.setItem('BOMList',JSON.stringify(chaptersArray));
}
function getList(){
    return JSON.parse(localStorage.getItem("BOMList"));
}
function deleteChapter(chapter){
    chapter.chapter.slice(0,chapter.length-1);
    chaptersArray=chaptersArray.filter(item => item !==chapter);
    setList();
}