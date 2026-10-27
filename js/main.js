document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel__track');
  const prev = carousel.querySelector('.carousel__arrow--prev');
  const next = carousel.querySelector('.carousel__arrow--next');

  const updateArrows = () => {
    prev.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
  };

  prev.addEventListener('click', () =>
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
  next.addEventListener('click', () =>
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }));

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
});