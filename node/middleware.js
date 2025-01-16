//middleware pattern (chain of  responsibility)

const passo1 = (contexto, next) => {
  contexto.valor1 = "mid1";
  next()
};

const passo2 = (contexto, next) =>  {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto) => contexto.valor3 = "mid3";

const exec = (contexto, ...middlewares){
    const execPasso = (indice) => {
        
    }
}
