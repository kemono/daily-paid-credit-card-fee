export function dailyPaid(indebteedness: number, rate: number): number {
    return (indebteedness * rate) / 365;
}
