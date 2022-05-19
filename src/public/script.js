const fileInput = document.getElementById("upfile");
const chooseFileButton = document.querySelector(".choose-file-button");
const chooseFileLabel = document.querySelector(".file-to-upload");
const submitButton = document.querySelector(".submit-button");

let selectedFile = "";

const onChooseFileButtonClicked = () => {
  fileInput.click();
};

const onFileInputChanged = (ev) => {
  const submittedFile = ev.target.files[0];
  console.log(ev.target.files[0]);

  if (!submittedFile) {
    selectedFile = "";
    chooseFileLabel.innerHTML = "<em>No file chosen.</em>";
    submitButton.disabled = true;
  } else {
    selectedFile = submittedFile.name;
    chooseFileLabel.innerHTML = selectedFile;
    submitButton.disabled = false;
  }
};

chooseFileButton.addEventListener("click", onChooseFileButtonClicked);
fileInput.addEventListener("change", onFileInputChanged);
