import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        "~/.slidev_global/node_modules/katex/dist/fonts/",
        "~/.slidev_global/node_modules/@shikijs/langs/",
        "~/.slidev_global/node_modules/@shikijs/themes/dist/",
        "~/.slidev_global/node_modules/mermaid/dist/chunks/mermaid.esm/"
      ],
    },
  },
})
