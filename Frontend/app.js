document.addEventListener("DOMContentLoaded", () => {

  // FILE INPUT

  const fileInput = document.querySelector("#pdf-input");
  const uploadStatus = document.querySelector("#upload-status");

  fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if (!file) {
      uploadStatus.textContent = "";
      uploadStatus.className = "";
      return;
    }

    uploadStatus.textContent =
      `Selected "${file.name}" (ready to upload)`;

    uploadStatus.className =
      "text-sm text-green-600 mt-2 min-h-[1.25rem]";
  });

  // SIDEBAR CHAT INTERACTION

  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const answerText = document.querySelector("#answer-text");

  sidebarItems.forEach((item) => {

    item.addEventListener("click", (e) => {

      e.preventDefault();

      sidebarItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      item.classList.add("active");

      const answer = item.getAttribute("data-answer");

      answerText.textContent = answer;

    });

  });

});