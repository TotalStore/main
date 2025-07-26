// App data
const apps = [
  {
    name: "ML Manager",
    desc: "Ek app hai jo Android me installed apps ka APK bana sakta hai",
    image: "icons/mlManeger.png",
    apk: "apps/ml.apks"
  },
  {
    name: "YouTube",
    desc: "Watch videos and create content",
    image: "apps/youtube.jpg",
    apk: "apps/youtube.apk"
  }
  // Add more apps here
];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, ''); // remove all except a-z and 0-9
}

function renderApps(appList) {
  const container = document.getElementById("appsContainer");
  container.innerHTML = "";

  if (appList.length === 0) {
    document.getElementById("noResult").style.display = "block";
    document.getElementById("notFoundText").innerText = document.getElementById("searchInput").value;
    return;
  } else {
    document.getElementById("noResult").style.display = "none";
  }

  appList.forEach(app => {
    const card = document.createElement("div");
    card.className = "app-card";
    card.innerHTML = `
      <img src="${app.image}" alt="${app.name}">
      <h3>${app.name}</h3>
      <p>${app.desc}</p>
      <a href="${app.apk}" class="download-btn" download>Download</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", () => {
  const input = normalize(document.getElementById("searchInput").value);
  const filtered = apps.filter(app => normalize(app.name).includes(input));
  renderApps(filtered);
});

// Initial render
renderApps(apps);
