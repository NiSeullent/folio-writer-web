document.getElementById("year").textContent = String(new Date().getFullYear());

// The GitHub Pages project remains a landing fallback. Its web-editor links
// should open the primary domain instead of github.io/workspace/.
if (window.location.hostname === "niseullent.github.io") {
  document.querySelectorAll('a[href="/workspace/"]').forEach((link) => {
    link.href = "https://folio.nyase.kr/workspace/";
  });
}
