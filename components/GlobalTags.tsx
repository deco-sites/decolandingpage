import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      <link
        href="https://fonts.cdnfonts.com/css/helvetica-2"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      >
      </link>

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style>
        {`

        body {
          font-family: 'Albert Sans', sans-serif;
          background: #0A2121;
        }

        h1 strong {
          color: #02F67C;
          font-weight: 600;
        }

        #TitleCards strong, #Footer strong, #TrustedBy strong, #MadeBy strong {
          font-weight: 600;
          color: #02F67C;
        }

        #Invite strong, #Description strong {
          font-weight: 700;
        }

        #InviteText a {
          text-decoration: underline;
          color: #0A2121
        }

        html {
            height: 100%;
            display: grid;
          }
          
          #space {
            background-color: #0A2121;
            position: relative;
            width: 100%;
            height: 100%;
          
            display: grid;
            place-items: center center;
            overflow: hidden;
            
            --perspective: 100px;
            perspective: var(--perspective);
            transform-style: preserve-3d;
          }
          
          #space time {
            grid-area: 1 / 1;
            width: 100px;
            height: 100px;
            transform-origin: 50% 0%;
            will-change: transform;
            background-color: white;
            box-shadow: 0 0 .5rem white, 0 0 1rem white;
            
            @supports (-moz-transition: all) {
              // Firefox can't hang...
              box-shadow: 0 0 .5rem white;
            }
          }
      `}
      </style>
    </Head>
  );
}

export default GlobalTags;
