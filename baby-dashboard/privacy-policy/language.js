// The policy is readable without JavaScript. Enhancement: keep the same section when switching languages.
const languageLinks = document.querySelectorAll("[data-policy-language]");

function preservePolicySection() {
  for (const link of languageLinks) {
    const destination = new URL(link.href);
    destination.hash = window.location.hash;
    link.href = destination.href;
  }
}

preservePolicySection();
window.addEventListener("hashchange", preservePolicySection);
