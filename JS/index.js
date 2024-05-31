const onInsert = () => {
  const formData = document.getElementById("formData");
  const formDatas = new FormData(formData);

  for (const value of formDatas.values()) {
    console.log(value);
  }

  document.getElementById("message").innerHTML =
    "Thank You For Submitting Form!";

  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
    formData.reset();
  }, 10000); // Reset form after 10 seconds (10000 milliseconds)

  //Change The Input: 9860335785 To Output: ********85
  const payload = { number: "9860335785", status: "sent" };
  const changeNumber = (payload) => {
    if ((payload.status = "sent" && payload.number.length === 10)) {
      console.log("OTP SENT TO : " + "********" + payload.number.slice(8, 10));
    } else {
      console.log("Number Invalid Or Status Not Send!");
    }
  };

  const result =
    payload.number === 10
      ? console.log(
          payload.number.slice(-2).padStart(payload.number.length, "*")
        )
      : console.log("Invalid Number");

  /* Change The 48 long character word to first 10 letters ... last 10 letters
    U3HkN19Pj2xwBtEvFq7ZCRDBAaG5JdrXMznyYuoK8e6LQmWThiVcS0glbF TO 
    U3HkN19Pj2...hiVcS0glbF
  */
  const payloads = "U3HkN19Pj2xwBtEvFq7ZCRDBAaG5JdrXMznyYuoK8e6LQmWThiVcS0glbF";
  const changeFormat = (payloads) => {
    console.log(
      payloads.slice(0, 10) +
        "..." +
        payloads.slice(payloads.length - 10, payloads.length)
    );
  };
};
