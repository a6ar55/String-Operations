function performOperations() {
  clearResults();

  var inputString = document.getElementById("inputString").value;

  inputString = removeForbiddenWords(inputString);
  displayResult("Original String: " + inputString);
  displayResult("Length: " + inputString.length);

  var reversedString = reverseString(inputString);
  displayReversed("Reversed String: " + reversedString);

  var randomizedString = randomizeString(inputString);
  displayResult("Randomized String: " + randomizedString);

  var base64EncodedString = base64Encode(inputString);
  displayResult("Base64 Encoded String: " + base64EncodedString);

  var xorKey = 666;
  var xorResult = xorString(inputString, xorKey);
  displayResult("XORed String: " + xorResult);

  var slidingText = document.createElement("div");
  slidingText.className = "sliding-text";
  slidingText.innerText = inputString;
  document.body.appendChild(slidingText);

  setTimeout(function () {
    slidingText.style.left = "100%";
  }, 100);

  setTimeout(function () {
    document.body.removeChild(slidingText);
  }, 1000);
}

function removeForbiddenWords(input) {
  var forbiddenWords = [
    "rorreno",
    "daolno",
    "/<",
    "ydob<",
    "lmth<",
    "vid<",
    "gvs<",
    "gmi<",
    "sserpyekno",
    "evomesuomno",
    "puesuomno",
    "nwodesuomno",
    "kcilclbdno",
    "revoesuomno",
    "tpircs",
    "src",
    "crs",
    "gmi",
    "tpircsavaj",
    "llorcsno",
    "nwodyekno",
    "puyekno",
    "egnahcno",
    "kcilcno",
    "elyts",
    "daeh",
    ""
  ];

  forbiddenWords.forEach(function (word) {
    var regex = new RegExp("\\b" + word + "\\b", "gi");
    input = input.replace(regex, "");
  });

  return input;
}

function displayResult(result) {
  var resultElement = document.createElement("p");
  resultElement.textContent = result;
  document.getElementById("result").appendChild(resultElement);
}

function displayReversed(result) {
  var resultElement = document.createElement("p");
  resultElement.innerHTML = result;
  document.getElementById("result").appendChild(resultElement);
}

function clearResults() {
  var resultContainer = document.getElementById("result");
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
}

function reverseString(input) {
  return input.split("").reverse().join("");
}

function randomizeString(input) {
  return input
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
}

function base64Encode(input) {
  return btoa(input);
}

function xorString(input, key) {
  var xorResult = "";

  for (var i = 0; i < input.length; i++) {
    xorResult += String.fromCharCode(input.charCodeAt(i) ^ key);
  }

  return xorResult;
}

document
  .getElementById("inputString")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
      performOperations();
    }
  });
