document.getElementById("uploadForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var formData = new FormData();
  var imageFile = document.getElementById("imageFile").files[0];

  if (imageFile) {
    formData.append("imageFile", imageFile);

    // Make a fetch request to upload the image
    fetch("http://localhost:8081/api/upload", {
      method: "POST",
       headers: {
    'Accept': 'application/json',
  },
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          return response.json(); // Parse response body as JSON
        } else {
          throw new Error("Error uploading image. Status code: " + response.status);
        }
      })
      .then(function (data) {

        console.log("Image uploaded successfully");
        console.log("Image URL: " + data.imageUrl);
        // Handle the successful response here
        alert('image saved successfully');
      })
      .catch(function (error) {
        console.log(error.message);
        // Handle any errors here
      });
  }
});

