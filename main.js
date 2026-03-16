const chars = "｢｣ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
}

function scramble(el) {
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
  }, 40);
}

const element = document.querySelectorAll('.scramble');

element.forEach((el, index) => {
    setTimeout(() => {
        scramble(el);
    }, index * 1)
});