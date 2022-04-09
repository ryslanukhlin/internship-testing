function checkDate(timestamp) {
    const timestamp_Date = new Date(timestamp);
    const current_Date = new Date(Date.now());
    //убрал лишние экземпляры класса

    let isSameDate = timestamp_Date.getTime() === current_Date.getTime();
    //создал проверку на точное совпадение 2 дат

    const hour = timestamp_Date.getHours();
    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am',
    };
}
