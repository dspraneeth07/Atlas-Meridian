<!--
==============================================================================
Atlas AI Labs - Atlas Meridian
Design ID : AAM-MER-BTN-001
Component  : Meridian Launch Button
Version    : 1.0.0
Category   : Button
Author     : Atlas AI Labs
==============================================================================
-->

<div class="meridian-wrapper">
  <button
    class="meridian-button"
    aria-label="Launch Experience"
  >
    <span class="meridian-button__label">
      Launch Experience
    </span>

    <span class="meridian-button__icon-container">
      <svg
        class="meridian-button__icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 12H20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />

        <path
          d="M13 5L20 12L13 19"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
</div>

<style>
:global(:root){
  --meridian-primary:#8b5cf6;
  --meridian-primary-light:#a78bfa;
  --meridian-primary-dark:#6d28d9;

  --meridian-surface:#ffffff;
  --meridian-text:#ffffff;
  --meridian-icon-text:#6d28d9;

  --meridian-radius-lg:1.125rem;
  --meridian-radius-md:0.875rem;

  --meridian-shadow:
    0 10px 30px rgba(109,40,217,.28),
    0 4px 12px rgba(109,40,217,.12);

  --meridian-shadow-hover:
    0 18px 40px rgba(109,40,217,.35),
    0 8px 20px rgba(109,40,217,.18);

  --meridian-transition:
    280ms cubic-bezier(.4,0,.2,1);

  --meridian-font:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

:global(*) ,
:global(*::before),
:global(*::after){
  box-sizing:border-box;
}

.meridian-wrapper{
  min-height:100vh;
  display:grid;
  place-items:center;

  background:
    radial-gradient(circle at top left,
      rgba(167,139,250,.18),
      transparent 40%),
    radial-gradient(circle at bottom right,
      rgba(109,40,217,.15),
      transparent 40%),
    #f8fafc;

  font-family:var(--meridian-font);
}

.meridian-button{
  position:relative;
  display:inline-flex;
  align-items:center;
  min-height:3.5rem;

  padding:
    .5rem
    .5rem
    .5rem
    1.5rem;

  border:none;
  border-radius:var(--meridian-radius-lg);

  cursor:pointer;
  overflow:hidden;

  color:var(--meridian-text);

  font-family:var(--meridian-font);
  font-size:.975rem;
  font-weight:600;
  letter-spacing:.02em;

  background:
    linear-gradient(
      135deg,
      var(--meridian-primary-light),
      var(--meridian-primary)
    );

  box-shadow:var(--meridian-shadow);

  transition:
    transform var(--meridian-transition),
    box-shadow var(--meridian-transition),
    filter var(--meridian-transition);
}

.meridian-button::before{
  content:"";
  position:absolute;
  inset:0;

  background:
    linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,.22),
      transparent
    );

  transform:translateX(-100%);
  transition:transform 700ms ease;
}

.meridian-button:hover::before{
  transform:translateX(100%);
}

.meridian-button:hover{
  transform:translateY(-2px);
  box-shadow:var(--meridian-shadow-hover);
}

.meridian-button:active{
  transform:translateY(0);
}

.meridian-button__label{
  position:relative;
  z-index:2;
}

.meridian-button__icon-container{
  position:relative;

  display:flex;
  align-items:center;
  justify-content:center;

  width:2.65rem;
  height:2.65rem;

  margin-left:1rem;

  background:rgba(255,255,255,.98);

  border-radius:var(--meridian-radius-md);

  box-shadow:
    0 4px 12px rgba(109,40,217,.16);

  transition:
    width var(--meridian-transition),
    transform var(--meridian-transition),
    background var(--meridian-transition);
}

.meridian-button:hover .meridian-button__icon-container{
  width:calc(100% - .75rem);
}

.meridian-button__icon{
  width:1.15rem;
  height:1.15rem;

  color:var(--meridian-icon-text);

  transition:
    transform var(--meridian-transition);
}

.meridian-button:hover .meridian-button__icon{
  transform:translateX(.15rem);
}

.meridian-button:active .meridian-button__icon-container{
  transform:scale(.96);
}
</style>