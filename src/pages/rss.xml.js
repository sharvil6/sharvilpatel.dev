import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      description: project.data.summary,
      pubDate: project.data.date,
      link: `/projects/${project.id}`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Sharvil Patel',
    description: 'Project writeups and articles on software engineering.',
    site: context.site,
    items,
  });
}
