/*
==============================================================================
Atlas AI Labs - Atlas Meridian
Design ID : AAM-MER-BTN-002
Component  : Meridian Pulse Button
Version    : 1.0.0
Category   : Button
Author     : Atlas AI Labs
==============================================================================
*/

function Component(_metadata: Record<string, unknown>): ClassDecorator {
  return () => {};
}

@Component({
  selector: 'atlas-meridian-pulse-button',
  standalone: true,

  template: `
    <div class="meridian-wrapper">

      <button
        type="button"
        class="meridian-pulse-button"
        aria-label="Activate Credits">

        <span class="meridian-pulse-button__corner"></span>

        <span class="meridian-pulse-button__particles">
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
          <i class="meridian-pulse-button__particle"></i>
        </span>

        <span class="meridian-pulse-button__content">

          <svg
            class="meridian-pulse-button__icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5">

            <polyline
              points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37">
            </polyline>

          </svg>

          <span>Access Credits</span>

        </span>

      </button>

    </div>
  `,

  styles: [`
    :host{
      display:block;

      --meridian-accent:#8b5cf6;
      --meridian-accent-light:#b388ff;
      --meridian-accent-dark:#6d28d9;

      --meridian-surface:#ffffff;
      --meridian-text:#ffffff;

      --meridian-radius:1rem;

      --meridian-shadow:
        0 12px 32px rgba(109,40,217,.22),
        0 4px 12px rgba(109,40,217,.12);

      --meridian-shadow-hover:
        0 22px 48px rgba(109,40,217,.32),
        0 8px 20px rgba(109,40,217,.18);

      --meridian-transition:
        320ms cubic-bezier(0.22,1,0.36,1);

      --meridian-font:
        Inter,
        ui-sans-serif,
        system-ui,
        sans-serif;
    }

    *,
    *::before,
    *::after{
      box-sizing:border-box;
    }

    .meridian-wrapper{
      min-height:100vh;
      display:grid;
      place-items:center;

      background:
        radial-gradient(
          circle at top left,
          rgba(179,136,255,.12),
          transparent 45%
        ),
        radial-gradient(
          circle at bottom right,
          rgba(139,92,246,.10),
          transparent 45%
        ),
        #f8fafc;

      font-family:var(--meridian-font);
    }

    .meridian-pulse-button{
      position:relative;

      display:inline-flex;
      align-items:center;
      justify-content:center;

      padding:.875rem 1.5rem;

      border:none;
      border-radius:var(--meridian-radius);

      cursor:pointer;
      overflow:hidden;

      background:
        radial-gradient(
          circle at 50% 120%,
          rgba(179,136,255,.65),
          transparent 60%
        ),
        linear-gradient(
          135deg,
          var(--meridian-accent-light),
          var(--meridian-accent)
        );

      box-shadow:var(--meridian-shadow);

      transition:
        transform var(--meridian-transition),
        box-shadow var(--meridian-transition);
    }

    .meridian-pulse-button::before{
      content:"";

      position:absolute;
      inset:1px;

      border-radius:calc(var(--meridian-radius) - 1px);

      background:
        linear-gradient(
          180deg,
          rgba(255,255,255,.12),
          rgba(255,255,255,.03)
        );

      pointer-events:none;
    }

    .meridian-pulse-button:hover{
      transform:translateY(-2px);
      box-shadow:var(--meridian-shadow-hover);
    }

    .meridian-pulse-button:active{
      transform:scale(.96);
    }

    .meridian-pulse-button__corner{
      position:absolute;
      top:0;
      right:0;

      width:1.25rem;
      height:1.25rem;

      overflow:hidden;

      border-top-right-radius:var(--meridian-radius);
    }

    .meridian-pulse-button__corner::before{
      content:"";

      position:absolute;
      inset:0;

      background:
        radial-gradient(
          circle at 50% 50%,
          rgba(255,255,255,.35),
          transparent 70%
        );

      transition:transform .5s ease;
    }

    .meridian-pulse-button__corner::after{
      content:"";

      position:absolute;
      top:-8px;
      right:-8px;

      width:24px;
      height:24px;

      transform:rotate(45deg);

      background:rgba(255,255,255,.92);

      box-shadow:
        0 0 10px rgba(255,255,255,.4);
    }

    .meridian-pulse-button:hover
    .meridian-pulse-button__corner{
      transform:translate(12px,-12px);
      transition:transform .45s ease;
    }

    .meridian-pulse-button__particles{
      position:absolute;
      inset:0;
      pointer-events:none;
    }

    .meridian-pulse-button__particle{
      position:absolute;
      bottom:-10px;

      width:3px;
      height:3px;

      border-radius:50%;

      background:rgba(255,255,255,.95);

      animation:
        meridian-float infinite ease-in-out;
    }

    @keyframes meridian-float{
      0%{
        transform:translateY(0);
        opacity:1;
      }

      85%{
        opacity:0;
      }

      100%{
        transform:translateY(-64px);
        opacity:0;
      }
    }

    .meridian-pulse-button__particle:nth-child(1){left:10%;animation-duration:2.3s;}
    .meridian-pulse-button__particle:nth-child(2){left:20%;animation-duration:2.1s;}
    .meridian-pulse-button__particle:nth-child(3){left:32%;animation-duration:2.5s;}
    .meridian-pulse-button__particle:nth-child(4){left:45%;animation-duration:1.9s;}
    .meridian-pulse-button__particle:nth-child(5){left:55%;animation-duration:2.4s;}
    .meridian-pulse-button__particle:nth-child(6){left:65%;animation-duration:2.0s;}
    .meridian-pulse-button__particle:nth-child(7){left:74%;animation-duration:2.6s;}
    .meridian-pulse-button__particle:nth-child(8){left:82%;animation-duration:2.2s;}
    .meridian-pulse-button__particle:nth-child(9){left:90%;animation-duration:2.5s;}
    .meridian-pulse-button__particle:nth-child(10){left:96%;animation-duration:2.1s;}

    .meridian-pulse-button__content{
      position:relative;
      z-index:2;

      display:flex;
      align-items:center;
      gap:.5rem;

      color:var(--meridian-text);

      font-size:.95rem;
      font-weight:600;
      letter-spacing:.02em;
    }

    .meridian-pulse-button__icon{
      width:1.125rem;
      height:1.125rem;

      stroke:currentColor;

      transition:
        transform .8s ease,
        fill .2s ease;
    }

    .meridian-pulse-button:hover
    .meridian-pulse-button__icon{
      animation:
        meridian-stroke 1s linear forwards,
        meridian-fill .1s linear forwards .9s;
    }

    @keyframes meridian-stroke{
      from{
        stroke-dasharray:0 0 0 0;
      }

      to{
        stroke-dasharray:72 72 0 0;
      }
    }

    @keyframes meridian-fill{
      to{
        fill:white;
      }
    }
  `]
})
export class MeridianPulseButtonComponent {}