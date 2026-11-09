import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'White Tee / IS117',
  description: 'An evidence-led competitive landscape research hub. Research first; brand and storefront later.',
  base: '/is117-white-tee-research/',
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: 'Research', link: '/research/methodology' }, { text: 'Compare', link: '/research/comparison' }, { text: 'Evidence', link: '/research/evidence' }],
    sidebar: [
      { text: 'Start here', items: [{ text: 'Research hub', link: '/' }, { text: 'Methodology', link: '/research/methodology' }, { text: 'Comparison matrix', link: '/research/comparison' }, { text: 'Evidence register', link: '/research/evidence' }] },
      { text: 'Competitor profiles', items: [{ text: 'UNIQLO AIRism', link: '/competitors/uniqlo' }, { text: 'Buck Mason Field-Spec', link: '/competitors/buck-mason' }, { text: 'ASKET Lightweight', link: '/competitors/asket' }, { text: 'Profile template', link: '/competitors/template' }] },
      { text: 'Synthesis', items: [{ text: 'Design and persuasion', link: '/research/synthesis' }, { text: 'Next steps', link: '/research/next-steps' }] }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/rajveer-r-sharma/is117-white-tee-research' }],
    footer: { message: 'IS117 · Phase 1: research only · No store or checkout' }
  }
})
