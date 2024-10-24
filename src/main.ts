import './style.css'
import viteLogo from '/vite.svg'
import tailwindLogo from './tailwind.svg'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" class="inline-block" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://tailwindcss.com/" class="inline-block" target="_blank">
      <img src="${tailwindLogo}" class="logo tailwind" alt="Tailwind logo" />
    </a>
    <a href="https://www.typescriptlang.org/" class="inline-block" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + Tailwind + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
