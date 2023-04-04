function getDogeImage (header) {
  const dogeImage = header.querySelector('h1[role="heading"] svg image');

  if (dogeImage) {
    return dogeImage.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
  }
}

const mutationObserver = new MutationObserver((mutationRecords) => {
  mutationRecords.forEach((mutationRecord) => {
    const header = mutationRecord.target.querySelector('header');

    if (header) {
      const dogeImage = getDogeImage(header);

      const favicon = document.querySelector('head link[rel="shortcut icon"]');
      if (favicon) {
        favicon.href = dogeImage;
      }
    }
  })
});

mutationObserver.observe(
  document.body,
  { childList: true, subtree: true }
);
