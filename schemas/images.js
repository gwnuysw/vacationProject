export default class images {

}
images.schema ={
    name: 'images',
    primaryKey: 'uuid',
    properties: {
        'img':  'data' ,
        'date':  'date' ,
        'latitude':  'double' ,
        'logitude': 'double' ,
        'explanation':  'string?' ,
    }
};
