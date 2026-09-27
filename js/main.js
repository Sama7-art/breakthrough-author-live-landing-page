/* =========================================================
   Breakthrough Author Live — Landing Page Behavior
   ========================================================= */

// ---- CONFIG: set the real checkout URL here when it's ready ----
// If left as "#checkout", all CTA buttons scroll to the on-page
// pricing/checkout section instead of leaving the site.
const CHECKOUT_URL = "#checkout";

document.addEventListener("DOMContentLoaded", () => {
  // Wire every CTA button to the single checkout config constant above.
  document.querySelectorAll(".cta-btn").forEach((btn) => {
    btn.setAttribute("href", CHECKOUT_URL);
  });

  // Hero video placeholder: reveal the <video> element on click if a
  // real source has been added; otherwise just show a friendly note.
  const playBtn = document.querySelector(".video-play-btn");
  const videoFrame = document.querySelector(".video-frame");
  if (playBtn && videoFrame) {
    playBtn.addEventListener("click", () => {
      const realVideo = videoFrame.querySelector("video[data-real-source]");
      if (realVideo && realVideo.dataset.realSource) {
        realVideo.src = realVideo.dataset.realSource;
        realVideo.hidden = false;
        realVideo.controls = true;
        realVideo.play();
        playBtn.hidden = true;
      } else {
        playBtn.setAttribute("aria-disabled", "true");
        playBtn.querySelector(".video-play-label").textContent =
          "Video coming soon — add your VSL URL in js/main.js";
      }
    });
  }
});
