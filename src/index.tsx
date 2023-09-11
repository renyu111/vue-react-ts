import { createRoot } from 'react-dom/client'

import Demo1 from './react/demo1'

declare global {
  interface Window {
    mount: (id: string) => void
  }
}

window.mount = (elementId: string) => {
  const el = document.getElementById(elementId)
  if (el) {
    createRoot(el).render(<Demo1 />)
  }
}
