const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch("../03_hinan.json")
  .then((res) => res.json())
  .then((data) => {
    const place = data.find((x) => String(x.項番) === id);

    if (!place) {
      document.getElementById("place").innerHTML =
        "<h1>施設が見つかりません。</h1>";
      return;
    }

    // タイトル
    document.title = `${place.施設名称} | 習志野市 一時避難場所`;

    // description
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        `${place.施設名称}の所在地や電話番号などを掲載しています。`,
      );

    // 本文
    document.getElementById("place").innerHTML = `
            <h1>${place.施設名称}</h1>

            <p><strong>住所</strong><br>${place.住所}</p>

            <p><strong>電話番号</strong><br>${place.電話番号 || "なし"}</p>

            <p>
                <a href="../index.html">
                    ← 一覧へ戻る
                </a>
            </p>
        `;
  });
