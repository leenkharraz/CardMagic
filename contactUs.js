//selection
const form = document.querySelector("#cardform");
const msg = document.querySelector("#msg");

//event listener
form.addEventListener("submit", e => {
  let messages = [];

  messages = messages.concat(isFilled("#fname", "first name is missing"));
  messages = messages.concat(isFilled("#lname", "last name is missing"));
  messages = messages.concat(isFilled("#email", "email is missing"));
  messages = messages.concat(isEmail("#email", "Email format is wrong"));
  messages = messages.concat(isFilledMobile("#no", "Mobile number is missing"));
  messages = messages.concat(isMobile("#no", "Mobile number must be numbers only"));

  if (messages.length > 0) {
    //there is an error
    msg.innerHTML = messages.join("<br>");
    //prevent submit
    e.preventDefault();
  }
});

// functions
function isFilled(selector, msg) {
  const element = document.querySelector(selector).value.trim();
  if (element.length < 1) {
    return [msg];
  }
  return [];
}

function isEmail(selector, msg) {
  const element = document.querySelector(selector).value.trim();
  if (!element.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)) {
    return [msg];
  }
  return [];
}

//Mobile input validation functions:

function isFilledMobile(selector, msg) {
  const element = document.querySelector(selector).value.trim();
  if (element.length < 1) {
    return [msg];
  }
  return [];
}

function isMobile(selector, msg) {
  const element = document.querySelector(selector).value.trim();
  if (!element.match(/^\d{9}$/)) {
    return [msg];
  }
  return [];
}
