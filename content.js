function setPlaybackSpeed() {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 1.5;
    }
  }
  
  // Run function on page load
  setPlaybackSpeed();
  
  // Also adjust speed when new videos are loaded dynamically
  const observer = new MutationObserver(setPlaybackSpeed);
  observer.observe(document.body, { childList: true, subtree: true });