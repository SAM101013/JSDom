console.log(document.getElementById("mainContent"))

console.log( document.getElementsByTagName("p")[1].textContent)

function toggleImage() {
    const image = document.getElementById("myImage");
    const button = document.querySelector("button"); 
// Get a reference to the button
  
    if (image.style.display === "none") {
      image.style.display = "block";
      button.textContent = "Now You See me"; 
// Change button text to "Now You Don't"
    } else {
      image.style.display = "none";
      button.textContent = "Now You Don't"; 
      
// Change button text back to "Toggle Image"
    }
  }

const imageUrlInput = document.getElementById("imageUrlInput");
const changeImageButton = document.getElementById("changeImageButton");
const myImage = document.getElementById("myImage");

changeImageButton.addEventListener("click", () => {
  const imageUrl = imageUrlInput.value;
  if (isValidImageUrl(imageUrl)) {
    myImage.src = imageUrl;
  } else {

    alert("URL Is Invalid.");
  }
});

function isValidImageUrl(url) {

  return url.match(/\.(jpg|jpeg|png|gif)$/i);
}

  