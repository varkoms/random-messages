const messages = [
  "Sólo hay una persona que puede decidir lo que voy a hacer, y soy yo mismo - Ciudadano Kane",
  "Sólo los soñadores mueven montañas - Fitzcarraldo",
  "Oh, sí... El pasado puede doler, pero tal como yo lo veo puedes huir de él o aprender - El Rey Leon",
  "Las causas perdidas son las únicas por las que vale la pena luchar - Caballero sin Espada",
  "Llamar a alguien gorda no te hace estar más delgada, llamar a alguien estúpida no te hace más lista y arruinarle la vida a Regina George no me hizo más feliz, todo lo que puedes hacer en la vida es intentar resolver el problema que tienes delante - Chicas Malas",
  "Pensamos demasiado y sentimos muy poco… - El Gran Dictador",
  "El odio me llevó a la cárcel, el amor me dará la libertad - Huracan Carter",
  "Sigue nadando - Buscando a Nemo",
  "Sólo tú puedes decidir qué hacer con el tiempo que se te ha dado - El Señor de los Anillos",
  "Mi conclusión es que el odio es un lastre. La vida es demasiado corta para estar siempre cabreado - American History X",
  "Nunca dejes que nadie te diga que no puedes hacer algo. Ni siquiera yo. Si tienes un sueño, tienes que protegerlo. Las personas que no son capaces de hacer algo por ellos mismos, te dirán que tú tampoco puedes hacerlo. ¿Quieres algo? Ve por ello y punto - En Busca de la Felicidad",
  "No son las habilidades lo que demuestra lo que somos, son nuestras decisiones - Harry Potter y la Camara Secreta",
  "Todos morimos, lo que importa es el cómo y el cuándo - Corazon de Dragon"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

// randomMsg();

module.exports = { randomMsg };