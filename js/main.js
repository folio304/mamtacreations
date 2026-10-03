/* Mamta Creations — shared site script. No need to edit; change js/config.js instead. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const page = document.body.dataset.page;
  const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || "";
  const wa = text => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  const askText = title => `Hello ${SITE.name}, I saw "${title}" on your website. Please share the price and details.`;

  const ICON = {
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1ZM21.1 8.2a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-3.8-1.5C14.3 2.8 9.7 2.8 8.2 2.9a5.4 5.4 0 0 0-3.8 1.5 5.4 5.4 0 0 0-1.5 3.8c-.1 1.5-.1 6.1 0 7.6a5.4 5.4 0 0 0 1.5 3.8 5.4 5.4 0 0 0 3.8 1.5c1.5.1 6.1.1 7.6 0a5.4 5.4 0 0 0 3.8-1.5 5.4 5.4 0 0 0 1.5-3.8c.1-1.5.1-6.1 0-7.6Zm-2 9.3a3.1 3.1 0 0 1-1.7 1.7c-1.2.5-4 .4-5.4.4s-4.2.1-5.4-.4a3.1 3.1 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.4s-.1-4.2.4-5.4a3.1 3.1 0 0 1 1.7-1.7c1.2-.5 4-.4 5.4-.4s4.2-.1 5.4.4a3.1 3.1 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.4s.1 4.2-.4 5.4Z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9a15.4 15.4 0 0 1 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.3 1Z"/></svg>'
  };

  /* ---------- Header, footer, floating WhatsApp ---------- */
  const NAV = [["index.html", "Home", "home"], ["gallery.html", "Gallery", "gallery"], ["reels.html", "Reels", "reels"], ["contact.html", "Contact", "contact"]];
  const social = () => [
    SITE.instagram && `<a href="${esc(SITE.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>`,
    SITE.facebook && `<a href="${esc(SITE.facebook)}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.fb}</a>`
  ].filter(Boolean).join("");

  $("#site-header").innerHTML = `
    <div class="toran" aria-hidden="true"></div>
    <div class="bar wrap">
      <a class="brand" href="index.html">${esc(SITE.name)}</a>
      <button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>
      <nav id="nav" class="nav">
        ${NAV.map(([h, t, id]) => `<a href="${h}"${id === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
        <a class="btn btn-sm btn-wa" href="${wa(`Hello ${SITE.name}, I would like to enquire about your work.`)}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
      </nav>
    </div>`;
  const mb = $(".menu-btn");
  mb.addEventListener("click", () => {
    const open = mb.getAttribute("aria-expanded") === "true";
    mb.setAttribute("aria-expanded", String(!open));
    $("#nav").classList.toggle("open", !open);
  });

  $("#site-footer").innerHTML = `
    <div class="wrap foot">
      <div>
        <p class="brand">${esc(SITE.name)}</p>
        <p>${esc(SITE.tagline)}. Made by hand by ${esc(SITE.maker)}.</p>
      </div>
      <div>
        <p class="foot-h">Visit</p>
        ${NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
      </div>
      <div>
        <p class="foot-h">Reach us</p>
        <a href="tel:${esc(SITE.phone.replace(/\s/g, ""))}">${esc(SITE.phone)}</a>
        ${SITE.email ? `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>` : ""}
        <span>${esc(SITE.address)}</span>
        <div class="social">${social()}</div>
      </div>
    </div>
    <p class="wrap copy">&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</p>`;

  document.body.insertAdjacentHTML("beforeend",
    `<a class="wa-float" href="${wa(`Hello ${SITE.name}, I would like to enquire about your work.`)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICON.wa}</a>`);

  /* ---------- Shared pieces ---------- */
  const photo = (item, cls = "") =>
    `<img class="${cls}" src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'ph ${cls}',textContent:this.alt}))">`;

  /* ---------- Home ---------- */
  if (page === "home") {
    const feat = GALLERY.filter(g => g.featured);
    const heroPics = feat.slice(0, 3);
    $("#hero-title").textContent = SITE.tagline;
    $("#hero-intro").textContent = SITE.intro;
    $("#hero-wa").href = wa(`Hello ${SITE.name}, I would like to place an order.`);
    $("#hero-arches").innerHTML = heroPics.map((g, i) => `<figure class="arch a${i + 1}">${photo(g)}</figure>`).join("");

    $("#cat-grid").innerHTML = CATEGORIES.map(c => {
      const first = GALLERY.find(g => g.category === c.id);
      const count = GALLERY.filter(g => g.category === c.id).length;
      return `<a class="cat" href="gallery.html?cat=${c.id}">
        <span class="cat-pic">${first ? photo(first) : `<span class="ph">Photos coming soon</span>`}</span>
        <span class="cat-name">${esc(c.name)}</span>
        <span class="cat-blurb">${esc(c.blurb)}</span>
        <span class="cat-count">${count ? `${count} photo${count > 1 ? "s" : ""}` : "Coming soon"}</span>
      </a>`;
    }).join("");

    $("#about-text").textContent = SITE.about;
    $("#feat-grid").innerHTML = GALLERY.slice(0, 6).map(g =>
      `<a class="tile" href="gallery.html?cat=${g.category}">${photo(g)}<span>${esc(g.title)}</span></a>`).join("");

    $("#reel-links").innerHTML = [
      SITE.instagram && `<a class="btn btn-light" href="${esc(SITE.instagram)}" target="_blank" rel="noopener">${ICON.ig}Instagram</a>`,
      SITE.facebook && `<a class="btn btn-light" href="${esc(SITE.facebook)}" target="_blank" rel="noopener">${ICON.fb}Facebook</a>`,
      `<a class="btn btn-outline-light" href="reels.html">Watch on this site</a>`
    ].filter(Boolean).join("");
  }

  /* ---------- Gallery ---------- */
  if (page === "gallery") {
    const params = new URLSearchParams(location.search);
    let current = CATEGORIES.some(c => c.id === params.get("cat")) ? params.get("cat") : "all";
    let shown = [];
    const chips = $("#filters"), grid = $("#gallery-grid"), empty = $("#gallery-empty");

    chips.innerHTML = [["all", "All work"], ...CATEGORIES.map(c => [c.id, c.name])]
      .map(([id, n]) => `<button type="button" data-cat="${id}">${esc(n)}</button>`).join("");

    function render() {
      $$("button", chips).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === current)));
      shown = current === "all" ? GALLERY : GALLERY.filter(g => g.category === current);
      grid.innerHTML = shown.map((g, i) => `
        <figure class="g-item">
          <button type="button" class="g-open" data-i="${i}" aria-label="View larger: ${esc(g.title)}">${photo(g)}</button>
          <figcaption>
            <span class="g-title">${esc(g.title)}</span>
            <span class="g-cat">${esc(catName(g.category))}</span>
            <a class="btn btn-sm btn-wa" href="${wa(askText(g.title))}" target="_blank" rel="noopener">${ICON.wa}Ask for price</a>
          </figcaption>
        </figure>`).join("");
      empty.hidden = shown.length > 0;
      const url = current === "all" ? "gallery.html" : `gallery.html?cat=${current}`;
      history.replaceState(null, "", url);
    }
    chips.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      current = b.dataset.cat; render();
    });

    /* Lightbox */
    const box = $("#lightbox"); let idx = 0;
    function show(i) {
      idx = (i + shown.length) % shown.length;
      const g = shown[idx];
      $("#lb-img").src = g.image; $("#lb-img").alt = g.title;
      $("#lb-title").textContent = g.title;
      $("#lb-cat").textContent = catName(g.category);
      $("#lb-wa").href = wa(askText(g.title));
      $("#lb-count").textContent = `${idx + 1} of ${shown.length}`;
    }
    grid.addEventListener("click", e => {
      const b = e.target.closest(".g-open"); if (!b) return;
      show(+b.dataset.i); box.showModal();
    });
    $("#lb-prev").onclick = () => show(idx - 1);
    $("#lb-next").onclick = () => show(idx + 1);
    $("#lb-close").onclick = () => box.close();
    box.addEventListener("click", e => { if (e.target === box) box.close(); });
    box.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
    render();
  }

  /* ---------- Reels ---------- */
  if (page === "reels") {
    const grid = $("#reels-grid");
    $("#reel-follow").innerHTML = [
      SITE.instagram && `<a class="btn" href="${esc(SITE.instagram)}" target="_blank" rel="noopener">${ICON.ig}Follow on Instagram</a>`,
      SITE.facebook && `<a class="btn btn-outline" href="${esc(SITE.facebook)}" target="_blank" rel="noopener">${ICON.fb}Follow on Facebook</a>`
    ].filter(Boolean).join("");

    if (!REELS.length) {
      $("#reels-empty").hidden = false;
    } else {
      let hasIG = false;
      grid.innerHTML = REELS.map(url => {
        url = url.trim();
        if (/instagram\.com/i.test(url)) {
          hasIG = true;
          const clean = url.split("?")[0].replace(/\/?$/, "/");
          return `<div class="reel"><blockquote class="instagram-media" data-instgrm-permalink="${esc(clean)}" data-instgrm-version="14">
            <a href="${esc(clean)}" target="_blank" rel="noopener">Watch this reel on Instagram</a></blockquote></div>`;
        }
        if (/facebook\.com|fb\.watch/i.test(url)) {
          return `<div class="reel reel-fb"><iframe src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=320" title="Facebook reel" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
            <a href="${esc(url)}" target="_blank" rel="noopener">Open on Facebook</a></div>`;
        }
        return `<div class="reel"><a class="btn" href="${esc(url)}" target="_blank" rel="noopener">Watch reel</a></div>`;
      }).join("");
      if (hasIG) {
        const s = document.createElement("script");
        s.async = true; s.src = "https://www.instagram.com/embed.js";
        document.body.appendChild(s);
      }
    }
  }

  /* ---------- Contact ---------- */
  if (page === "contact") {
    $("#c-interest").innerHTML = `<option value="">Choose one</option>` +
      CATEGORIES.map(c => `<option>${esc(c.name)}</option>`).join("") + `<option>Something else</option>`;
    $("#c-details").innerHTML = `
      <a class="detail" href="${wa(`Hello ${SITE.name}, I would like to enquire about your work.`)}" target="_blank" rel="noopener">${ICON.wa}<span><b>WhatsApp</b>${esc(SITE.phone)}</span></a>
      <a class="detail" href="tel:${esc(SITE.phone.replace(/\s/g, ""))}">${ICON.phone}<span><b>Call</b>${esc(SITE.phone)}</span></a>
      ${SITE.instagram ? `<a class="detail" href="${esc(SITE.instagram)}" target="_blank" rel="noopener">${ICON.ig}<span><b>Instagram</b>@${esc(SITE.instagram.replace(/\/$/, "").split("/").pop())}</span></a>` : ""}
      ${SITE.facebook ? `<a class="detail" href="${esc(SITE.facebook)}" target="_blank" rel="noopener">${ICON.fb}<span><b>Facebook</b>Follow our page</span></a>` : ""}
      <p class="detail-note"><b>Based in</b> ${esc(SITE.address)}<br><b>Hours</b> ${esc(SITE.hours)}</p>`;

    const form = $("#c-form"), status = $("#c-status");
    if (!SITE.email) $("#c-email-btn").hidden = true;
    const message = () => {
      const f = Object.fromEntries(new FormData(form));
      return [
        `Hello ${SITE.name}, I have an enquiry from your website.`,
        `Name: ${f.name}`, `Phone: ${f.phone}`,
        f.interest && `Interested in: ${f.interest}`,
        f.date && `Needed by: ${f.date}`,
        f.message && `Details: ${f.message}`
      ].filter(Boolean).join("\n");
    };
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const via = e.submitter && e.submitter.value;
      if (via === "email") {
        location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(message())}`;
        status.textContent = "Your email app should open with the enquiry ready. Press send there.";
      } else {
        window.open(wa(message()), "_blank", "noopener");
        status.textContent = "WhatsApp opened with your enquiry ready. Press send there.";
      }
    });
  }
})();
