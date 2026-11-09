//Parenteses -> colchetes -> chaves

class Exercicio1 {
    private mathExpression;

    constructor(mathExpression: string){
        this.mathExpression = mathExpression;
        this.sort();
    }

    isBalanced(): boolean{
        
        for(let i = 0; i <= this.mathExpression.length; i += 2 ){
            for(let i = this.mathExpression.length; i >= 0 ; i -=2){
                
            }
        }
       return true;
    }
    

    private sort(){
        let keys = ['(', ')', '{', '}', '[', ']'];
        let aux = '';

        for(let i = 0; i <= this.mathExpression.length; i++){
            if(keys.includes(this.mathExpression[i])){
                aux += this.mathExpression[i];
            }
        }
        this.mathExpression = aux;
    }
}

let a = new Exercicio1('([{}])');
a.isBalanced();