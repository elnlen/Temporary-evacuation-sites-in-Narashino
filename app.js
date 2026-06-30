const cards = document.getElementById("cards");

fetch("./03_hinan.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((place) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `
        <a class="card" href="place/${place.項番}.html">
          <h2>${place.施設名称}</h2>

          <p>${place.住所}</p>

          <p>${place.電話番号 || "なし"}</p>
        </a>
        `,
      );
    });
  });
