document.getElementById("back-button").addEventListener("click", function () {
  window.history.back();
});
document.getElementById("card-number").addEventListener("input", function (e) {
  var cardNumber = e.target.value
    .replace(/\s+/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
  if (cardNumber.length > 19) {
    cardNumber = cardNumber.slice(0, 19);
  }
  var cardTypeLogo = document.querySelector(".card-type-logo");
  if (cardNumber.startsWith("4")) {
    cardTypeLogo.src = "{% static 'images/buy_credits/visa_logo.png' %}";
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55")
  ) {
    cardTypeLogo.src = "{% static 'images/buy_credits/mastercard_logo.png' %}";
  } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    cardTypeLogo.src = "{% static 'images/buy_credits/amex_logo.png' %}";
  } else {
    cardTypeLogo.src = ""; // Or set it to some default image
  }
  document.getElementById("card-number-display").innerText =
    cardNumber || "•••• •••• •••• ••••";
  e.target.value = cardNumber;
});

document
  .getElementById("cardholder-name")
  .addEventListener("input", function (e) {
    var cardHolderName = e.target.value;
    document.getElementById("cardholder-display").innerText =
      cardHolderName || "CARDHOLDER NAME";
  });

document
  .getElementById("expiration-date")
  .addEventListener("input", function (e) {
    var expirationDate = e.target.value;
    var formattedExpiration = expirationDate.replace(/[^0-9]/g, "").slice(0, 4);

    if (formattedExpiration.length > 2) {
      formattedExpiration =
        formattedExpiration.slice(0, 2) +
        "      /      " +
        formattedExpiration.slice(2);
    }

    e.target.value = formattedExpiration;
    document.getElementById("expiration-display").innerText =
      formattedExpiration || "MM / YY";
  });

function validateCardNumber(cardNumber) {
  const cardNumberRegex = /^(\d{4} ){3}\d{4}$/;
  return cardNumberRegex.test(cardNumber);
}

function validateCardholderName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

function validateExpirationDate(expiration) {
  const expirationRegex = /^(0[1-9]|1[0-2])\s+\/\s+(\d{2})$/;
  if (!expirationRegex.test(expiration)) {
    return false;
  }

  const [month, year] = expiration.split(/\s+\/\s+/);
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (
    parseInt(year) < currentYear ||
    (parseInt(year) === currentYear && parseInt(month) <= currentMonth)
  ) {
    return false;
  }

  return true;
}

function validateCVV(cvv, cardNumber) {
  const cvvRegex =
    cardNumber.startsWith("34") || cardNumber.startsWith("37")
      ? /^\d{4}$/
      : /^\d{3}$/;
  return cvvRegex.test(cvv);
}
document.getElementById("card-number").addEventListener("input", function (e) {
  const cardNumber = e.target.value;
  const maxLength = 19; // 16 digits + 3 spaces

  if (cardNumber.length > maxLength) {
    e.target.value = cardNumber.slice(0, maxLength);
  }
});

document.getElementById("cvv").addEventListener("input", function (e) {
  const cvv = e.target.value;
  const cardNumber = document.getElementById("card-number").value;
  const maxLength =
    cardNumber.startsWith("34") || cardNumber.startsWith("37") ? 4 : 3;

  if (cvv.length > maxLength) {
    e.target.value = cvv.slice(0, maxLength);
  }
});

$(document).ready(function () {
  var formId = "add-payment-method";
  //var formErrors = "{{ form_errors|escapejs }}";
  handleFormValidation(formId, formErrors);
});

/*document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const cardholderName = document.getElementById('cardholder-name').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!validateCardNumber(cardNumber)) {
      alert('Please enter a valid card number');
      return;
    }

    if (!validateCardholderName(cardholderName)) {
      alert('Please enter a valid cardholder name');
      return;
    }

    if (!validateExpirationDate(expirationDate)) {
      alert('Please enter a valid expiration date');
      return;
    }

    if (!validateCVV(cvv, cardNumber)) {
      alert('Please enter a valid CVV');
      return;
    }

    this.submit(); // If all validations pass, submit the form
  });*/
