document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("downloadButton");
  const mobileHintButton = document.querySelector(".btn-mobile");
  const modal = document.getElementById("downloadModal");
  const modalClose = document.getElementById("modalClose");
  const installerButton = document.getElementById("installerButton");
  const standaloneButton = document.getElementById("standaloneButton");

  // Extra guard: hide the mobile-only hint button on non-mobile devices,
  // even if the viewport is narrow on desktop.
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  if (!isMobile && mobileHintButton) {
    mobileHintButton.style.display = "none";
  }

  // Desktop "Download for Windows" button opens the modal.
  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      if (modal) {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
      }
    });
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // Wire up downloads to your existing files.
  // These paths assume the site is deployed with the "installer_stand_alone" folder at the project root.
  if (installerButton) {
    installerButton.addEventListener("click", () => {
      window.location.href =
        "installer_stand_alone/Notepad Sharp_0.2.0_x64_en-US.msi";
    });
  }

  if (standaloneButton) {
    standaloneButton.addEventListener("click", () => {
      window.location.href = "installer_stand_alone/Notepad-Sharp-0.2.0.exe";
    });
  }
});
