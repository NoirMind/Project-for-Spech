export function showLoader(type = "spinner") {
  const loader = document.querySelector('.loader');
  if (!loader) return;

  switch (type) {
    case "dots":
      loader.innerHTML = `
        <div class="loading-dots">
          <span></span><span></span><span></span>
        </div>`;
      break;
    case "skeleton":
      loader.innerHTML = `
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>`;
      break;
    default: // spinner
      loader.innerHTML = `
        <div class="spinner"></div>`;
  }
  loader.style.display = "flex";
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  loader.innerHTML = "";
  loader.style.display = "none";
}