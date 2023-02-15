let userSelected = null;

function Read() {
    let data = {};
    data["FullName"] = document.getElementById("FullName").value;
    data["Address"] = document.getElementById("Address").value;
    data["Salary"] = document.getElementById("Salary").value;
    data["Position"] = document.getElementById("Position").value;
    data["Skill"] = document.getElementById("Skill").value;

    return data;
}

function FormSubmit() {
    let formData = Read();
    if (userSelected == null){
        Create(formData);
    }
    else{
        Update(formData);
    }
    ClearForm();
}

function Create(data) {
    var table = document.getElementById("tableEmployee").getElementsByTagName('tbody')[0];
    var NewRow = table.insertRow(table.length);
    cell1 = NewRow.insertCell(0);
    cell1.innerHTML = data.FullName;

    cell2 = NewRow.insertCell(1);
    cell2.innerHTML = data.Address;

    cell3 = NewRow.insertCell(2);
    cell3.innerHTML = data.Salary;

    cell4 = NewRow.insertCell(3);
    cell4.innerHTML = data.Position;

    cell5 = NewRow.insertCell(4);
    cell5.innerHTML = data.Skill;

    cell6 = NewRow.insertCell(5);
    cell6.innerHTML = `<a onClick="Edit(this)">Edit</a> <a onClick="Delete(this)">Delete</a>`;
}

function ClearForm() {
    document.getElementById("FullName").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Salary").value = "0";
    document.getElementById("Position").value = "";
    document.getElementById("Skill").value = "";

    userSelected = null;
}

function Edit(td) {
    userSelected = td.parentElement.parentElement;
    document.getElementById("FullName").value = userSelected.cells[0].innerHTML;
    document.getElementById("Address").value = userSelected.cells[1].innerHTML;
    document.getElementById("Salary").value = userSelected.cells[2].innerHTML;
    document.getElementById("Position").value = userSelected.cells[3].innerHTML;
    document.getElementById("Skill").value = userSelected.cells[4].innerHTML;
}

function Update(formData) {
    userSelected.cells[0].innerHTML = formData.FullName;
    userSelected.cells[1].innerHTML = formData.Address;
    userSelected.cells[2].innerHTML = formData.Salary;
    userSelected.cells[3].innerHTML = formData.Position;
    userSelected.cells[4].innerHTML = formData.Skill;
}

function Delete(td) {
    if (confirm('Do you want to delete this row?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableEmployee").deleteRow(row.rowMain);

        ClearForm();
    }
}