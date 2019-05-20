export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce32d9e59a196b37f63d158',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sghje2w1',
                  apiId: 'db8e4cae-66eb-401a-ac88-050e91624a90'
                },
                {
                  buildHookId: '5ce32d9e8d75b2039ffc1598',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jfjjkchd',
                  apiId: '9b273b4b-2bb7-4316-a945-5690a617a6ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kwkistler/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jfjjkchd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
