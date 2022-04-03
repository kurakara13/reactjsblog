export const convertToSlug = (Text) => {

    return Text.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
}

export const limitTitle = (Text) => {
    
    return Text.substring(0,15)+'...';
}

export const limitDecription = (Text) => {
    
    return Text.substring(0,30)+'..';
}