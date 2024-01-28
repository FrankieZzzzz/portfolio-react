export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
          name:'year',
          title:'Year',
          type:'string'
        },
        {
          name:'works',
          title:'Works',
          type:'array',
          of:[{ type:'workExperience'}]
        },
    ],
     orderings: [
    {
      title: 'Sort by year',
      name: 'year',
      by: [
        {field: 'year', direction: 'desc'}
      ]
    }
  ]
}