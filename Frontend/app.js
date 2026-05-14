document.addEventListener("DOMContentLoaded", () => {

  // FILE INPUT

  const fileInput =
    document.querySelector("#pdf-input");

  const uploadStatus =
    document.querySelector("#upload-status");

  const previewArea =
    document.querySelector("#preview-area");

  fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if (!file) {

      uploadStatus.textContent = "";
      uploadStatus.className = "";

      return;
    }

    // STATUS

    uploadStatus.textContent =
      `Selected "${file.name}"`;

    uploadStatus.className =
      "text-sm text-green-600 mt-2";

    // PREVIEW

    if (file.type.startsWith("image/")) {

      const imageURL =
        URL.createObjectURL(file);

      previewArea.innerHTML = `
        <div class="preview-file">
          <img src="${imageURL}" alt="preview"/>
          <p>${file.name}</p>
        </div>
      `;

    } else {

      previewArea.innerHTML = `
        <div class="preview-file">
          <div style="font-size:4rem;">📄</div>
          <p>${file.name}</p>
        </div>
      `;

    }

  });

  // SIDEBAR

  const sidebarItems =
    document.querySelectorAll(".sidebar-item");

  const answerText =
    document.querySelector("#answer-text");

  sidebarItems.forEach((item) => {

    item.addEventListener("click", (e) => {

      e.preventDefault();

      sidebarItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      item.classList.add("active");

      const answer =
        item.getAttribute("data-answer");

      answerText.textContent = answer;

    });

  });

  // ASK BUTTON

  const askBtn =
    document.querySelector(".ask-btn");

  const textarea =
    document.querySelector(".query-textarea");

  askBtn.addEventListener("click", () => {

    const question =
      textarea.value.trim();

    if (question === "") {

      answerText.textContent =
        "⚠️ Please type a question first.";

      return;
    }

    answerText.textContent =
      "🤖 Thinking...";

    setTimeout(() => {

      answerText.textContent =
        `You asked: "${question}"`;

    }, 700);

  });

  // NEW SESSION

  const newSessionBtn =
    document.querySelector(".sidebar-new-btn");

  newSessionBtn.addEventListener("click", () => {

    sidebarItems.forEach((nav) => {
      nav.classList.remove("active");
    });

    answerText.textContent =
      "Answer will appear here once you ask a question…";

    textarea.value = "";

    uploadStatus.textContent = "";

    fileInput.value = "";

    previewArea.innerHTML = `
      <span class="drop-icon">🗃️</span>

      <p class="drop-text">
        Drag & drop your file here
      </p>

      <p class="drop-subtext">
        PDF, Images, TXT, DOCX, Video & more
      </p>
    `;

  });

});