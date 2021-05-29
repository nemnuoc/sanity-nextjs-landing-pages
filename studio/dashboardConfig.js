export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60b21b53bd34e449234844cf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cizp1gr4',
                  apiId: 'c49c5fd2-f4c2-4f99-b92e-049535735955'
                },
                {
                  buildHookId: '60b21b5337549555f6cc1c33',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jdocztjj',
                  apiId: 'ce843402-4ad3-4d5d-8ee6-ab450d289a1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nemnuoc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jdocztjj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
