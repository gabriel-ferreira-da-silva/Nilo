
export const emptyAlert = {
    message:'',
    class:''
}
export const empytProduct={
    name: '',
    description: '',
    category: '',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&s',
    rate: '',
    price: '',
};



export function formatDate (date_created){
    const date = new Date(date_created)
    const offset = -3 * 60 * 60 * 1000; 
    const convertedDate = new Date(date.getTime() + offset);

    let formatedDate = convertedDate.toISOString().replace('.000Z','').replace('T',' ');
    return formatedDate;
}
    