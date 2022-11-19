var selectedRow=null;
function  onFormSubmit(){
    if(validate()){
    var formData = readFormData();
    if(selectedRow==null)
    insertNewRecord(formData);
    else 
    updateRecord(formData);
     
    resetForm();

    }
}




function insertNewRecord(data){
    var table= document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML =data.mail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML =data.number;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=`<a onclick="onEdit(this);" class="controls edit">Edit</a>
    <a onclick="onDelete(this);" class="controls delete">Delete</a>`;
}
// to read form data
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;

    formData["mail"] = document.getElementById("mail").value;
    formData["number"] = document.getElementById("number").value;
    return formData;
}
// to reset 
function resetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("mail").value="";
    document.getElementById("number").value="";
}

// on edit
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullName").value=selectedRow.cells[0].innerHTML;
    document.getElementById("mail").value=selectedRow.cells[1].innerHTML;
    document.getElementById("number").value=selectedRow.cells[2].innerHTML;
}
// update the record
function updateRecord(formData){
    selectedRow.cells[0].innerHTML= formData.fullName;
    selectedRow.cells[1].innerHTML= formData.mail;
    selectedRow.cells[2].innerHTML= formData.number;

    
}
// on delete the record
function onDelete(td){
    if(confirm("Are You Sure to delete the Record ?")){
    row=td.parentElement.parentElement;
  document.getElementById("empList").deleteRow(row.rowIndex);
  resetForm();

}}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("validation-error").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("validation-error").classList.contains("hide"))
            document.getElementById("validation-error").classList.add("hide");
    }
    return isValid;
}