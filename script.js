function showalert(event){
	event.preventDefault();
	 let firstName = document.getElementById("firstName").value;
     let lastName = document.getElementById("lastName").value;
     let phoneNumber = document.getElementById("phoneNumber").value;
  let emailId = document.getElementById("emailId").value;
	 let message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
            alert(message);
}
