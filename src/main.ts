export function dailyPaid(indebteedness: number, rate: number): number {
    return (indebteedness * rate) / 365;
}

export function bindCurrentValue() {
    const indebteedness = Number((<HTMLSelectElement>document.getElementById('indebteedness')).value);
    const rate = Number((<HTMLSelectElement>document.getElementById('rate')).value);

    return (<HTMLSelectElement>document.getElementById('result')).value = dailyPaid(indebteedness, rate);
}
