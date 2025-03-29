const dateParserHandler = (dateInitial: string | Date | number | null) => {
    if (!dateInitial) {
        return "";
    }

    const date = new Date(dateInitial);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const numberCheck = (number: number) =>
        number < 10 ? `0${number}` : number;

    const numberDay = numberCheck(day);
    const numberMonth = numberCheck(month + 1);
    const numberYear = numberCheck(year);

    return `${numberDay}.${numberMonth}.${numberYear}`;
};

export default dateParserHandler;
