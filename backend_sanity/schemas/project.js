export default{
    name:'project',
    title:'Project',
    type: 'document',
    fields:[
        {
            name:'project',
            title:'Project',
            type:'string'
        },
        {
            name:'projectImage',
            title:'Project Image',
            type:'array',
            of:[{ type:'projectDetail'}]
        },
    ]
}