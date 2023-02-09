/// <reference types="vite/client" />
declare module '*.vue' {
  import { defineComponent } from "vue"
  const Component: ReturnType<typeof defineComponent>
  export default defaultComponent
}

declare module '*.md' {
  const html: String
  export { html }
}