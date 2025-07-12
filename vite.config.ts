import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        "/Users/shuoxueli/.slidev_global/node_modules/katex/dist/fonts/",
        "/Users/shuoxueli/.slidev_global/node_modules/@shikijs/langs/",
        "/Users/shuoxueli/.slidev_global/node_modules/@shikijs/themes/dist/",
        "/Users/shuoxueli/.slidev_global/node_modules/mermaid/dist/chunks/mermaid.esm/"
      ],
    },
  },
})
