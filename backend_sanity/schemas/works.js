
export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'netlify',
        title: 'Netlify',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
       {
        name: 'imgUrl_description',
        title: 'ImageUrl Description',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imgUrl_1',
        title: 'ImageUrl_1',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imgUrl_2',
        title: 'ImageUrl_2',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imgUrl_3',
        title: 'ImageUrl_3',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imgUrl_4',
        title: 'ImageUrl_4',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imgUrl_5',
        title: 'ImageUrl_5',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'videoFile1',
        title: 'Video_File1',
        type: 'file',
      },
      {
        name: 'videoFile2',
        title: 'Video_File2',
        type: 'file',
      },
      {
        name: 'tags',
        title: 'Tags',
        type:'array',
        of: [
          {
            name:'tag',
            title:'Tag',
            type:'string'
          }
        ]
      },
      {
        name: 'label',
        title: 'Label',
        type: 'string',
      }
     
    ],
    orderings: [
        {
        title: 'Sort by label',
        name: 'label',
        by: [
            {field: 'label', direction: 'asc'}
        ]
        }
    ]
  };