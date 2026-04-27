$(document).ready(function () {
  const $target = $("#text-target");
  const palabras = ["San Francisco", "Madrid", "Buenos Aires", "Tokio", "Londres"];
  let palabrasIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 150;

  function type() {
    const currentWord = palabras[palabrasIndex];

    if (isDeleting) {
      $target.text(currentWord.substring(0, charIndex - 1));
      charIndex--;
      typeSpeed = 75;
    } else {
      $target.text(currentWord.substring(0, charIndex + 1));
      charIndex++;
      typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      palabrasIndex = (palabrasIndex + 1) % palabras.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type(); 

  $(".contador").each(function () {
    var $this = $(this);
    var valorFinal = parseInt($this.attr("data-valor"));

    $({ countNum: 0 }).animate(
      {
        countNum: valorFinal,
      },
      {
        duration: 2500,
        easing: "swing",
        step: function () {
          var numeroFormateado = Math.floor(this.countNum).toLocaleString("en-US");
          $this.text(numeroFormateado);
        },
        complete: function () {
          $this.text(valorFinal.toLocaleString("en-US"));
        },
      },
    );
  });
});