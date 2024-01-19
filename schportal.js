var studentArr = [];

function addStudent() {
  if (studentName.value != "" && studentEmail.value != "") {
var  studentObj ={
  nameOfStudent :studentName.value,
  emailOfStudent  :studentEmail.value,
}
studentArr.push(studentObj)
    document.getElementById("showEmptyErrorMessage").style.display = "none";
    document.getElementById("allButtons").style.display = "block";
    displayStudents();
  } else {
    document.getElementById("showEmptyErrorMessage").style.display = "block";
    console.log("You dey whine");
  }
}
function editStudent() {
  var newIndex = parseInt(editedIndex.value);
  var newStudent = parseInt(editedDetails.value);
  console.log(newStudent);

      console.log(editedIndex);
      studentArr.splice(newIndex - 1, 1, { nameOfStudent: studentArr[newIndex - 1].nameOfStudent, emailOfStudent: newStudent });
      displayStudents();
    } 
function displayStudents() {
  document.getElementById("noStudentRegistered").style.display = "none";
  studentTable.innerHTML = `
        <tr>
        <th>S/N</th>
        <th>Students</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
        `;
  for (let i = 0; i < studentArr.length; i++) {
    //    console.log(i);
    studentTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${studentArr[i].nameOfStudent}</td>
        <td>${studentArr[i].emailOfStudent}</td>
        </tr>
        `;
  }
}
