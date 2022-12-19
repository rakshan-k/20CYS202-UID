function ValidationForm() {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value;
    var type =
        document.forms.RegForm.Type.value;
    var password =
        document.forms.RegForm.Password.value;
    var birthday =
        document.forms.RegForm.Birthday.value;
    var person =
        document.forms.RegForm.Person.value;
    var address =
        document.forms.RegForm.Address.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                     // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                               // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;

    }

    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (phone == "") {
        window.alert("Please enter your mobile number.");
        phone.focus();
        return false;
    }

    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    if (email == "" || !regEMail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (birthday == "" || !regBirthday.test(birthday)) {
        window.alert("Please enter a your birthday.");
        birthday.focus();
        return false;
    }

    if (person.selectedIndex == -1) {
        alert("Please enter the number of person.");
        person.focus();
        return false;
    }

    if (type.selectedIndex == -1) {
        alert("Please enter your profession.");
        type.focus();
        return false;
    }

    return true;
}