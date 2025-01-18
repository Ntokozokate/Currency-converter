let apiKey = "76094aefbf500e8d05691717";
let ratesUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
let codesUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

fetch(codesUrl)
  .then((response) => response.json())
  .then((data) => {
    let supportedCodes = data.supported_codes;
    console.log(supportedCodes);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
fetch(ratesUrl)
  .then((response) => response.json())
  .then((data) => {
    let bwpRate = data.conversion_rates.ZWL;
    let hiText = document.querySelector(".hi-text");
    hiText.textContent = `Exchange rate in Zimbabawean dollar (ZWL
    ) is ${bwpRate}`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
