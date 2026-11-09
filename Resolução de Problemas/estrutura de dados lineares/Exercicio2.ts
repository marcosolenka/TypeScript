class Exercicio2 {
    private randomArr;
    constructor(){
        this.randomArr = this.generateRandomArr();
    }

    private generateRandomArr(): number[]{
        let n = Math.round(Math.random() * 10);
        let arr = [];

        if (n < 5)
            n *= 7;

        for(let i = 0; i <= n; i++)
            arr[i] = (Math.round(Math.random() * 100))

    return arr;
    }

    public toString(): string{
        let aux = '';

        for (let i = 0; i <= this.randomArr.length; i++){
            aux += this.randomArr[i];
        }
        return aux;
    }
}