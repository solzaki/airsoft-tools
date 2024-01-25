export var convertDynamoDB = function(arr: Array<any>) {
    
    const rest:any[] = [];

    arr.forEach(item => {
        const record: srtKeyObject = {};
        const keys = Object.keys(item);
        keys.forEach((key: any) => {
            record[key] = item[key][Object.keys(item[key])[0]];
        });
        rest.push(record);
    });
    return rest;
}

interface srtKeyObject {
    [key: string]: string;
}