import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'アストロ学習者 | Blog',
        description: 'アストロを学ぶ旅',
        site: 'https://astro-tutorials-0705.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja</language>`,
    });
}