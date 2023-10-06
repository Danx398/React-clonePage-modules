import React from "react";
import { SuperMain } from "../Super/SuperMain";
import { BuscadorAvanzado } from "./BuscadorAvanzado/BuscadorAvanzado";
import { CardEmision } from "./CardEmision/CardEmision";
import { Paginador } from "./Paginador/Paginador";

export const EnEmision = () => {
  const imagenesEmision = [
    {
      imageUrl: "./images/UltimasSeries/anime1.jpg",
      title: "Kyoukai Senki: Kyokko no Souki",
      sinopsis:
        "La vida se ha ido de esta isla. Pero surge la esperanza de una nueva vida.",
    },
    {
      imageUrl: "./images/UltimasSeries/anime2.jpg",
      title: "Tian Guan Ci Fu 2nd Season",
      sinopsis:"Segunda temporada de Heaven Official's Blessing"
    },
    {
      imageUrl: "./images/UltimasSeries/anime3.jpg",
      title: "Sasaki to Miyano Movie: Sotsugyou-hen",
      sinopsis:"La graduación de Sasaki se acerca, ¿qué significará eso para su relación con Miya? Nuevos sentimientos, nuevos temores, pero el amor de siempre."
    },
    {
      imageUrl: "./images/UltimasSeries/anime4.jpg",
      title: "Tensei Shitara Slime Datta Ken: Coleus no Yume",
      sinopsis:"La historia tiene lugar entre la primera y la segunda temporada, donde Rimuru se enfrenta a las conspiraciones en el reino de Coleus."
    },
    {
      imageUrl: "./images/UltimasSeries/anime5.jpg",
      title: "PLUTO",
      sinopsis:"En un mundo ideal donde conviven hombres y robots, alguien o algo ha destruido al poderoso robot suizo Mont Blanc. En otro lugar es asesinada una figura clave de un grupo de defensa de los derechos de los robots."
    },
    {
      imageUrl: "./images/UltimasSeries/anime6.jpg",
      title: "Dr. STONE Season 3 2 Cour",
      sinopsis:"Segunda parte de la tercera temporada del médico piedra"
    },
    {
      imageUrl: "./images/UltimasSeries/anime7.jpg",
      title: "Good Night World",
      sinopsis:"En el juego online \"Planet\" hay un poderoso equipo de cuatro jugadores. Este equipo se llama \"La Familia Akabane\" y sus miembros son una pseudofamilia que sólo existe en el juego. Aunque no lo saben, estos cuatro jugadores son en realidad una familia rota en la vida real. Un hermano mayor encerrado "
    },
    {
      imageUrl: "./images/UltimasSeries/anime8.jpg",
      title: "Houkago Shounen Hanako-kun",
      sinopsis:"​El fantasmal Hanako-kun y su asistente mortal, Nene Yashiro, generalmente están ocupados resolviendo varios incidentes sobrenaturales en la Academia Kamome, pero ¿cómo pasan su tiempo cuando tienen un descanso de todo eso? ¡Ven y mira a los personajes de Hanako-kun, atado al baño, jugar, enfermarse, cambiar de género y descubrir secretos que sacuden el mundo durante sus relajadas horas después de la escuela!"
    },
    {
      imageUrl: "./images/UltimasSeries/anime9.jpg",
      title: "Dead Mount Death Play 2nd Cour",
      sinopsis:"Segunda parte de Dead Mount Death Play"
    },
    {
      imageUrl: "./images/UltimasSeries/anime10.jpg",
      title: "Hoshikuzu Telepath",
      sinopsis:"Umika es una chica de secundaria dulce pero tímida. Tiene problemas para hablar con los demás y sueña con tener un amigo de otro planeta. Pero su solitaria vida escolar da un giro cósmico cuando conoce al estudiante transferido Yu, ¡un extraterrestre con poderes telepáticos! Los dos se vuelven cercanos y prometen ir al espacio algún día. Entonces, deciden construir un cohete y disparar hacia las estrellas, haciendo nuevos amigos en el camino."
    },
    {
      imageUrl: "./images/UltimasSeries/anime11.jpg",
      title: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
      sinopsis:"Aijo Rentaro ha invitado a salir a cien chicas y siempre se ha ponchado. Desesperado, ora pidiendo guía, ¡solo para que un dios le diga que sus rechazos se debieron a un percance cósmico! Ahora este dios arreglará las cosas asegurándose de que Aijo obtenga cien citas. Excepto que, como suelen ir las cosas con los dioses, hay un problema: ¡cada una de sus cien citas es el alma gemela destinada a Aijo! Peor aún, si él no corresponde a sus sentimientos, ¡todos morirán en accidentes horribles y divertidos!"
    },
    {
      imageUrl: "./images/UltimasSeries/anime12.jpg",
      title: "Mokushiroku no Yonkishi",
      sinopsis:"Percival siempre ha vivido con su abuelo en God's Finger, un refugio remoto que se encuentra muy por encima de las nubes. Y aunque ama la vida sencilla, secretamente anhela la aventura. Pero la vida de Percival cambia para siempre cuando un intruso, que comparte una impactante conexión con él, le arranca todo lo que ha conocido. Sin nada más que hacer más que perseguir a quien le quitó todo, Percival emprende su propio viaje. Durante su viaje, el niño protegido descubre que hay muchas cosas que desconoce sobre la vida normal. Afortunadamente, en el camino se encuentra con amigos que pueden ayudarlo a salir adelante, pero ¿cómo reaccionarán cuando descubran el destino de Percival... y cómo está conectado con el fin del mundo?"
    },
    {
      imageUrl: "./images/UltimasSeries/anime13.jpg",
      title: "Arknights [Fuyukomori Kaerimichi]",
      sinopsis:"Oripatía, una enfermedad incurable que poco a poco cristaliza los cuerpos de los infectados hasta la muerte. Rhodes Island es una empresa farmacéutica que se esfuerza por encontrar una cura y resolver los problemas que surgen tras la enfermedad. y en un intento de poner fin a la revuelta de la organización terrorista conocida como Movimiento Reunión cuyo objetivo final es la salvación de los infectados, La isla de Rodas ha firmado un contrato con la ciudad yanese de Lungmen y continúa su misión allí. Sin embargo, Amiya se ha sentido abatida desde su batalla contra Skullshatterer, incapaz de aceptar el hecho de que no pudieron salvar a Misha. Mientras tanto, la isla de Rodas despliega un escuadrón de reconocimiento en una ciudad abandonada descubierta en la campiña de Lungmen. Allí, el escuadrón nota un extraño fenómeno que se desarrolla ante ellos..."
    },
    {
      imageUrl: "./images/UltimasSeries/anime14.jpg",
      title: "Hypnosis Mic: Division Rap Battle- Rhyme Anima",
      sinopsis:"El legendario grupo de rap The Dirty Dawg podría haber conquistado Japón, pero luego se separaron. Ahora cada integrante pelea en uno de los cuatro grupos rivales. Las batallas por el territorio se libran con rap y Hypnosis Mic, un micrófono que puede afectar el espíritu humano."
    },
    {
      imageUrl: "./images/UltimasSeries/anime15.jpg",
      title:"Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.",
      sinopsis:"Kashima Ryuto es un estudiante de secundaria sombrío que pasa tranquilamente sus días observando desde lejos a la persona que le gusta, la hermosa Shirakawa Runa. Ella dirige la escuela y no le han faltado novios. Aunque Ryuto está completamente convencido de que ella nunca lo aceptará, el destino lo lleva a confesarle sus sentimientos de todos modos. Para su sorpresa, ella acepta, simplemente porque está “disponible” en ese momento, pero las sorpresas no terminan ahí. ¡Ella inmediatamente lo invita como si fuera la cosa más natural del mundo! Esta extraña pareja es diferente en casi todos los sentidos: los amigos que mantienen, sus pasatiempos, su vida amorosa, pero cada día que pasa, se vuelven un poco más cercanos. Puede que esta no sea la primera relación de Runa, ¡pero su historia de citas estará llena de novedades para ambos!"
    },
    { 
      imageUrl: "./images/UltimasSeries/anime16.jpg", 
      title: "BIKKURI-MEN", 
      sinopsis:"La historia se desarrolla en un mundo donde el valor de las pegatinas de Bikkuri-Man es tan alto que hay que transportarlas en un vehículo de transporte de efectivo. También estuvo el famoso caso de robo de hace un año, llamado \"el caso de los 300 millones de pegatinas de Bikkuri-Man\". Un día, un repartidor a tiempo parcial de la escuela secundaria llamado Yamato se ve involucrado en una batalla por calcomanías entre dos tiendas de conveniencia que compiten. El Angel Mart, propiedad del gerente de la tienda de Phoenix, es famoso por sus pegatinas brillantes fáciles de usar. La Devil Store al otro lado de la calle también intenta atraer fanáticos de Bikkuri-Man a su tienda. Los antiguos camaradas se dividen en aliados y enemigos y comienza la batalla del destino."
    },
    {
      imageUrl: "./images/UltimasSeries/anime17.jpg",
      title: "Mahou Tsukai no Yome Season 2 Cour 2",
      sinopsis:"Segunda parte de la segunda temporada de Mahou Tsukai no Yome Season"
    },
    { 
      imageUrl: "./images/UltimasSeries/anime18.jpg", 
      title: "KamiErabi", 
      sinopsis:"Goro, un estudiante de primer año de secundaria en una escuela secundaria privada en Tokio, no tiene esperanzas, sueños ni ambiciones. El mundo le es indiferente y siente un leve anhelo por Honoka, una compañera de clase de la misma escuela. Él y su mejor amigo Akitsu viven una vida aburrida e inmutable. Un día, Goro recibe una extraña notificación en su smartphone: “Has sido elegido. Insufla en mí tu deseo"
    },
    {
      imageUrl: "./images/UltimasSeries/anime19.jpg",
      title: "16bit Sensation: Another Layer",
      sinopsis:"El año: 1992. La estudiante universitaria: Meiko Uehara. El trabajo a tiempo parcial: empleado de una tienda de informática. O eso pensó ella. Mientras explora el segundo piso de la tienda, Meiko encuentra a Alcohol Soft, un desarrollador de juegos de PC para adultos. Ella reemplaza a un artista en un giro del destino. Fuera de su elemento y con una fecha límite acercándose, Meiko se apresura para completar el juego y demostrar su valía. ¡El destino de su carrera depende de ello!"
    },
    {
      imageUrl: "./images/UltimasSeries/anime20.jpg",
      title: "Uma Musume: Pretty Derby Season 3",
      sinopsis:"Tercera temporada de Umamusume: Pretty Derby"
    },
  ];
  return (
    <SuperMain>
      <BuscadorAvanzado />
      <div className="container">
        <div className="row row-cols-4 mt-5">
          {imagenesEmision.map((img) => (
            <CardEmision
              imageUrl={img.imageUrl}
              title={img.title}
              textoOculto={img.sinopsis}
            />
          ))}
        </div>
      </div>
      <Paginador />
    </SuperMain>
  );
};
