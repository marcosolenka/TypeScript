class MathExpression {
    private expression: string;

    constructor(exp: string) {
        this.expression = this.shellSort(exp);
    }

    isBalanced(): boolean {
        return true;
    }

    public toString(): string {
        return this.expression;
    }

    private shellSort(str: string): string {
        const array = str.split('');
        const n = array.length;

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                const temp = array[i];
                let j = i;

                while (j >= gap && array[j - gap] > temp) {
                    array[j] = array[j - gap];
                    j -= gap;
                }

                array[j] = temp;
            }
        }

        return array.join('');
    }
}

let arr = new MathExpression('{a * [c – b * (e + f)]} – 2');
console.log(arr.toString());