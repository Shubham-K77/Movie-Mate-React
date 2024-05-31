const copyText = () => {
  const display = document.getElementById("display");
  const copyText = document.getElementById("copyText");
  copyText.select();
  document.execCommand("copy");
  display.style.display = "block"; // Displaying the message
  setTimeout(() => {
    copyText.value = ""; // Clearing the input field
    display.style.display = "none"; // Hiding the message after 5 seconds
  }, 5000);
};
