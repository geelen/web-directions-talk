/*!
 * bespoke-bullets v0.0.1-alpha-2
 *
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://mit-license.org/markdalgleish
 */

(function(bespoke) {

  bespoke.plugins.bullets = function(deck) {
    var activeSlideIndex,
      activeBulletIndex,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll('[data-bespoke-bullet]'), 0);
      }),

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;
        
        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b < bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-last-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.add('bespoke-bullet-last-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-last-active');
              bullet.classList.remove('bespoke-bullet-active');
            }
          });
        });
      },

      canGoForwardsInSlide = function() {
        return bullets[activeSlideIndex][activeBulletIndex + 1] !== undefined;
      },

      canGoBackwardsInSlide = function() {
        return bullets[activeSlideIndex][activeBulletIndex - 1] !== undefined;
      },

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1;

        if (canGoForwardsInSlide()) {
          activateBullet(activeSlideIndex, activeBulletIndex + 1);
          return false;
        } else if (bullets[nextSlideIndex]) {
          activateBullet(nextSlideIndex, 0);
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1;

        if (canGoBackwardsInSlide()) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        } else if (bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        }
      };

    deck.on('next', function() {
      return next();
    });

    deck.on('prev', function() {
      return prev();
    });

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    activateBullet(0, 0);
  };

}(bespoke));

/*!
 * bespoke-hash v0.1.0
 *
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://mit-license.org/markdalgleish
 */

(function(bespoke) {

  bespoke.plugins.hash = function(deck) {
    var activeIndex,

      parseHash = function() {
        var hash = window.location.hash.slice(1),
          slideNumberOrName = parseInt(hash, 10);

        if (hash) {
          if (slideNumberOrName) {
            activateSlide(slideNumberOrName - 1);
          } else {
            deck.slides.forEach(function(slide, i) {
              slide.getAttribute('data-bespoke-hash') === hash && activateSlide(i);
            });
          }
        }
      },

      activateSlide = function(index) {
        if (index !== activeIndex) {
          deck.slide(index);
        }
      };

    setTimeout(function() {
      parseHash();

      deck.on('activate', function(e) {
        var slideName = e.slide.getAttribute('data-bespoke-hash');
        window.location.hash = slideName || e.index + 1;
        activeIndex = e.index;
      });

      window.addEventListener('hashchange', parseHash);
    }, 0);
  };

}(bespoke));

/* Custom Plugins */
bespoke.plugins.center = function(deck) {
  deck.slides.forEach(function(slide) {
    var centerWrapper = document.createElement('div'),
      children = [].slice.call(slide.childNodes, 0);

    centerWrapper.className = 'bespoke-center-wrapper';

    children.forEach(function(child) {
      slide.removeChild(child);
      centerWrapper.appendChild(child);
    });

    slide.appendChild(centerWrapper);
    centerWrapper.style.marginTop = ((slide.offsetHeight - centerWrapper.offsetHeight) / 2) + 'px';
  });
};

bespoke.plugins.progress = function(deck) {
  var progressBar = document.createElement('span'),
    progressWrapper = document.createElement('div');

  progressWrapper.className = 'bespoke-progress';
  progressWrapper.appendChild(progressBar);
  deck.parent.appendChild(progressWrapper);

  deck.on('activate', function(e) {
    progressBar.style.width = ((e.index * 100) / (deck.slides.length - 1)) + '%';
  });
};

bespoke.plugins.controls = function(deck) {
  var controls = document.createElement('div'),
    next, prev;

  controls.innerHTML = '' +
      '<aside class="controls">' +
      ' <a class="left" href="#">&#x25C4;</a>' +
      ' <a class="right" href="#">&#x25BA;</a>' +
      ' <a class="up" href="#">&#x25B2;</a>' +
      ' <a class="down" href="#">&#x25BC;</a>' +
      '</aside>'
  prev = controls.querySelector('.left');
  next = controls.querySelector('.right');

  prev.addEventListener('click', deck.prev);
  next.addEventListener('click', deck.next);

  deck.on('activate', function(e) {
    prev.classList[e.index === 0 ? 'remove' : 'add']('enabled');
    next.classList[e.index === deck.slides.length - 1 ? 'remove' : 'add']('enabled');
  });

  deck.parent.appendChild(controls);
};

bespoke.plugins.state = function(deck) {
  deck.on('activate', function(e) {
    var state = e.slide.getAttribute('data-bespoke-state');
    if (state !== undefined) {
      deck.parent.className = state;
    }
  });
};