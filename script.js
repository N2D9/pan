// 音声ファイルを読み込み
const startSound = new Audio("click.mp3");
startSound.volume = 0.5;

function startSite(withSound) {
  if (withSound) {
    startSound.play(); // 音を鳴らす
  }

  const overlay = document.querySelector(".overlay");
  const logoContainer = document.getElementById("logo-container");
  const main = document.getElementById("main");

  // フェードアウト
  overlay.classList.add("fade-out-first");

  // 一定時間後にロゴ表示（フェードイン）
  setTimeout(() => {
    overlay.style.display = "none"; // 完全に非表示に
    logoContainer.classList.add("fade-in-logo");

     // ★ ロゴをフェードアウトしてメイン表示に切り替える
     setTimeout(() => {
        logoContainer.classList.add("fade-out-logo");

        // 1秒後にロゴ非表示 → メイン表示
      setTimeout(() => {
        logoContainer.style.display = "none";
        main.style.display = "block";
      }, 1400); // ロゴのフェードアウトが終わるまで待つ
    }, 2300); // ロゴを出してから3秒後に次の演出へ

  }, 1400); // フェードアウトに合わせて1秒待つ

}
