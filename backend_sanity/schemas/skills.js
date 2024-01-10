export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            
        },
        {    name:'company',
            title:'Company',
            type:'string',

        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ],
    orderings: [
        {
        title: 'Sort by company',
        name: 'company',
        by: [
            {field: 'company', direction: 'desc'}
        ]
        }
    ]
}