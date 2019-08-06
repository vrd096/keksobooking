"use strick";

(function() {
  var FILE_TYPES = ["gif", "jpg", "jpeg", "png"];
  var fileAvatar = document.querySelector(".js-upload-avatar ");
  var preview = document.querySelector(".js-load__preview");

  fileAvatar.addEventListener("change", function() {
    var file = fileAvatar.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function(it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener("load", function() {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
