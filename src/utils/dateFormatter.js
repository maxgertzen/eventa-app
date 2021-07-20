export const dateFormatter = (dateString) => {
    // MySQL YYYY-MM-DD
    const date = new Date(dateString);
    let year = date.getFullYear();
    let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    let day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    return `${year}-${month}-${day}`
}