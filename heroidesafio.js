// Declaração das variáveis
const nome = "Drako";
const xp = 8000;

// Estrutura de decisão
switch (xp) {
  case (xp < 1000):
    console.log(`O Herói de nome ${nome} está no nível de **Ferro**.`);
    break;
  case (xp >= 1001 && xp <= 2000):
    console.log(`O Herói de nome ${nome} está no nível de **Bronze**.`);
    break;
  case (xp >= 2001 && xp <= 5000):
    console.log(`O Herói de nome ${nome} está no nível de **Prata**.`);
    break;
  case (xp >= 6001 && xp <= 7000):
    console.log(`O Herói de nome ${nome} está no nível de **Ouro**.`);
    break;
  case (xp >= 7001 && xp <= 8000):
    console.log(`O Herói de nome ${nome} está no nível de **Platina**.`);
    break;
  case (xp >= 8001 && xp <= 9000):
    console.log(`O Herói de nome ${nome} está no nível de **Ascendente**.`);
    break;
  case (xp >= 9001 && xp <= 10000):
    console.log(`O Herói de nome ${nome} está no nível de **Imortal**.`);
    break;
  default:
    console.log(`O Herói de nome ${nome} está no nível de **Radiante**.`);
}