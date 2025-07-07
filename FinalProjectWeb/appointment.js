document.addEventListener("DOMContentLoaded", function () {
  const fields = {
      firstName: document.getElementById("firstName"),
      phone: document.getElementById("Phone"),
      email: document.getElementById("Email"),
      question: document.getElementById("question"),
  };

  function isNotEmpty(value) {
      return value != null && value.trim().length > 0;
  }

  function fieldValidation(field, validationFunction) {
      if (!field) return false;

      const isValid = validationFunction(field.value);
      field.className = isValid ? "" : "placeholderRed";
      return isValid;
  }

  function isValid() {
      let valid = true;
      valid &= fieldValidation(fields.firstName, isNotEmpty);
      valid &= fieldValidation(fields.phone, isNotEmpty);
      valid &= fieldValidation(fields.email, isNotEmpty);

      return Boolean(valid); // Ensure it returns true/false
  }

  class User {
      constructor(firstName, email, phone, question) {
          this.firstName = firstName;
          this.email = email;
          this.phone = phone;
          this.question = question;
      }
  }

  function sendContact() {
      if (isValid()) {
          const usr = new User(
              fields.firstName.value,
              fields.email.value,
              fields.phone.value,
              fields.question.value
          );

          alert(`${usr.firstName}, thanks for registering.`);
      } else {
          alert("There was an error. Please fill out all fields correctly.");
      }
  }

  document.getElementById("submit").addEventListener("click", sendContact);
});