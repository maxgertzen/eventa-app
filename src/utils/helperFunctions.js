export const formatDate = (mysqlTimestamp) => {

    let date = new Date(mysqlTimestamp).toDateString();
    let time = new Date(mysqlTimestamp).toLocaleTimeString();

    return [
        date,
        time
    ]
}