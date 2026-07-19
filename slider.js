document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.image-slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    const leftBtn = slider.querySelector('.arrow.left');
    const rightBtn = slider.querySelector('.arrow.right');
    let index = 0;

    function showImage(i) {
      images.forEach((img, idx) => {
        img.classList.toggle('active', idx === i);
      });
    }

    function checkArrows() {
      if (images.length <= 1) {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
      } else {
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
      }
    }

    leftBtn.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    rightBtn.addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage(index);
    });

    showImage(index);
    checkArrows();
  });
});
