const ADD_TO_BOOK='ADD_TO_BOOK';

export const addToBook=(content,author)=>{
    return {
        type:ADD_TO_BOOK,
        payLoad:{
            new:{
                content:content,
                author:author
            }
        }
    }
}