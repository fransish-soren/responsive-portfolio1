(function() {
      // typing effect
      const phrases = ['Frontend Developer', 'Shopify Theme Developer', 'JavaScript Enthusiast', 'Content Creator'];
      let idx = 0, charIdx = 0, isDeleting = false;
      const el = document.getElementById('typingText');
      function type() {
        const current = phrases[idx];
        if (isDeleting) {
          el.textContent = current.substring(0, charIdx--);
          if (charIdx < 0) { isDeleting = false; idx = (idx+1)%phrases.length; setTimeout(type, 300); return; }
          setTimeout(type, 40);
        } else {
          el.textContent = current.substring(0, charIdx++);
          if (charIdx > current.length) { isDeleting = true; setTimeout(type, 1200); return; }
          setTimeout(type, 60);
        }
      }
      type();

      // dark/light toggle
      const toggle = document.getElementById('themeToggle');
      toggle.addEventListener('click', ()=> {
        document.body.classList.toggle('light');
        toggle.innerHTML = document.body.classList.contains('light') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      });

      // hamburger
      const hamburger = document.getElementById('hamburger');
      const nav = document.getElementById('navbar');
      hamburger.addEventListener('click', ()=> nav.classList.toggle('open'));

      // project filtering
      const filterBtns = document.querySelectorAll('.filter-btn');
      const projects = document.querySelectorAll('.project-card');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
          filterBtns.forEach(b=>b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.dataset.filter;
          projects.forEach(p => {
            if (filter === 'all' || p.dataset.category === filter) p.style.display = 'block';
            else p.style.display = 'none';
          });
        });
      });

      // back to top
      const backBtn = document.getElementById('back-top');
      window.addEventListener('scroll', ()=> {
        if (window.scrollY > 600) backBtn.classList.add('visible');
        else backBtn.classList.remove('visible');
      });
      backBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  // close mobile nav on link click
   document.querySelectorAll('#navbar a').forEach(a => a.addEventListener('click', ()=> nav.classList.remove('open')));
     })();
