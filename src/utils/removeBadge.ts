
export const removeLovableBadge = () => {
  const badge = document.getElementById('lovable-badge');
  if (badge) {
    badge.remove();
  }
};

// Run on page load
document.addEventListener('DOMContentLoaded', removeLovableBadge);

// Also run after React hydration
setTimeout(removeLovableBadge, 1000);

