import { util } from "./util.js";
import { like } from "./like.js";
import { theme } from "./theme.js";
import { audio } from "./audio.js";
import { comment } from "./comment.js";
import { progress } from "./progress.js";
import { pagination } from "./pagination.js";

window.util = util;
window.like = like;
window.theme = theme;
window.audio = audio;
window.comment = comment;
window.progress = progress;
window.pagination = pagination;

// Pause audio when tab is not visible
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    window.audio.pause();
  } else {
    if (!window.audio.paused) {
      window.audio.play().catch((error) => {
        console.warn("Failed to autoplay after visibility change:", error);
      });
    }
  }
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("©2024 shyntaayu. All Right Reserved");
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
    alert("©2024 shyntaayu. All Right Reserved");
  }
});
