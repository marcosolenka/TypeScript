//Dados três números inteiros, que representam a data de validade de um produto (dia, mês e ano,
//respectivamente), retorne se ele já está vencido. A data atual deve estar fixada no código. Não
//utilize biblioteca com funcionalidades predefinidas para datas.

export default class Exercicio2{
    private currentDay = 6;
    private currentMonth = 9;
    private currentYear = 2026;
    public isExpired(day: number, month: number, year: number): boolean{
        const actualDate = this.currentDay + (this.currentMonth * 30) + (this.currentYear * 360);
        const dateToValidate = day + (month * 30) + ((year * 12) * 30);

        if(actualDate > dateToValidate) {
            return true;
        }
        return false;
    }
}