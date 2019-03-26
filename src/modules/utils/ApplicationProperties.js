let packagejson = require('./../../../package.json');

export class ApplicationProperties {
    static appInfo = [
        {
            "key": "Application",
            "value": "Smoker2"
        },
        {
            "key": "Version",
            "value": determineVersion()
        },
        {
            "key": "Build",
            "value": "kein plan"
        },
        {
            "key": "Developer",
            "value": "tom"
        },
    ];
}

export function determineBuild(){
    //@TODO provide cover me
    return "1234";
}

export function determineVersion(){
    return packagejson.version;
}