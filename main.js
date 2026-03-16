const chars = "｢｣ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";

function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
}

function scramble() {
  const el = document.getElementById("scramble");
  const original = el.innerText;

  let i = 0;

  const interval = setInterval(() => {
    el.innerText = original
      .split("")
      .map((char, index) => {
        if (index < i) return char;
        return randomChar();
      })
      .join("");

    if (i >= original.length) clearInterval(interval);

    i += 0.5;
  }, 30);
}

window.onload = scramble;