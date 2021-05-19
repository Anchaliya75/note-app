
console.log("Starting a new project");
showNotes();
let addbtn =document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
    let addTxt= document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
   
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addTxt.value="";
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html='';
    notesObj.forEach(function(element,index){
        html+=` <div class=" notecard card mx-2 my-2" style="width: 18rem">
                
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete-Note</button>
        </div>
        </div>`;
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length !=0){
        notesElm.innerHTML=html;

    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}
function deleteNote(index){
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
   
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();

}