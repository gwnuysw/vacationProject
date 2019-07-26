class journal {

}
journal.schema ={
    name: 'journal',
    primaryKey: 'uuid',
    properties: {
        'title':  'string' ,
        'date': 'date' ,
        'imgs': 'images[]' ,
        'hashtags': 'string[]',
        'explanation': 'string?',
        'visibility': 'bool',
    },
};
