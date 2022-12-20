export function dailyPaid(indebteedness: number, rate: number): number {
    return (indebteedness * rate) / 365;
}

export function bindCurrentValue() {
    const indebteedness = Number((<HTMLSelectElement>document.getElementById('indebteedness')).value);
    const rate = Number((<HTMLSelectElement>document.getElementById('rate')).value);

    return (<HTMLSelectElement>document.getElementById('result')).value = String(dailyPaid(indebteedness, rate));
}

export function applyUrlParameter() {
    const params = (new URL(window.location.href)).searchParams;

    const indebteedness = params.get('indebteedness');
    if(indebteedness !== undefined){
        (<HTMLSelectElement>document.getElementById('indebteedness')).value = indebteedness;
    }

    const rate = params.get('rate');
    if(rate){
        (<HTMLSelectElement>document.getElementById('rate')).value = rate;
    }
}
