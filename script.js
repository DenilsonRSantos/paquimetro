class Parquimetro {
  constructor(valor) {
    this.valor = parseFloat(valor);
  }

  calcular() {
    if (this.valor < 1) {
      return {
        mensagem: 'Valor insuficiente. Insira no mínimo R$1,00.',
        tipo: 'alerta'
      };
    }

    let tempo = 0;
    let valorUsado = 0;

    if (this.valor >= 3.00) {
      tempo = 120;
      valorUsado = 3.00;
    } else if (this.valor >= 1.75) {
      tempo = 60;
      valorUsado = 1.75;
    } else if (this.valor >= 1.00) {
      tempo = 30;
      valorUsado = 1.00;
    }

    const troco = (this.valor - valorUsado).toFixed(2);
    let mensagem = `Tempo: ${tempo} minutos.`;
    if (troco > 0) {
      mensagem += ` Troco: R$ ${troco}`;
    }

    return { mensagem, tipo: 'sucesso' };
  }
}

function simular() {
  const valor = document.getElementById('valor').value;
  const resultado = new Parquimetro(valor).calcular();

  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerText = resultado.mensagem;
  resultadoElemento.className = resultado.tipo;
}