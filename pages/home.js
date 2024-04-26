import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import { useFonts, ShadowsIntoLight_400Regular } from '@expo-google-fonts/shadows-into-light';
import { Aboreto_400Regular } from '@expo-google-fonts/aboreto';
import { Audio } from 'expo-av';
import React, { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
    async function playBackgroundAudio() {
      try {
        const backgroundSound = new Audio.Sound();
        await backgroundSound.loadAsync(require('../assets/musica.mp3'));
        await backgroundSound.setIsLoopingAsync(true);
        await backgroundSound.playAsync();
      } catch (error) {
        console.log('Erro ao reproduzir áudio de fundo:', error);
      }
    }

    playBackgroundAudio();

    return () => {

    };
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    ShadowsIntoLight_400Regular, Aboreto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>


      <View style={styles.containerTitulo}>
      <Image
          source={require('../assets/deathnote.png')}
          style={styles.principal}
        />
      </View>

  <ScrollView>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}I
          </Text>

            <Text style={styles.regras}>
            • O humano cujo nome é escrito neste caderno morrerá.
            {'\n'}{'\n'}
            • Este caderno não terá efeito a menos que o escritor tenha o rosto da pessoa na sua mente quando se escreve o nome dele. Portanto, as pessoas que compartilham o mesmo nome não serão afetadas.
            {'\n'}{'\n'}
            • Se a causa da morte for escrita dentro dos próximos 40 segundos depois de escrever o nome da pessoa, isso vai acontecer.
            {'\n'}{'\n'}
            • Se a causa da morte não for especificada, a pessoa vai simplesmente morrer de um ataque cardíaco.
            {'\n'}{'\n'}
            • Depois de escrever a causa da morte, detalhes da morte devem ser escritos nos próximos 6 minutos e 40 segundos.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}II
          </Text>

            <Text style={styles.regras}>
            • O caderno passa a ser propriedade do mundo humano, uma vez que toca o chão do mundo humano.
            {'\n'}{'\n'}
            • O dono do caderno pode reconhecer a imagem e voz do dono original, ou seja, um shinigami.
            {'\n'}{'\n'}
            • O humano que usa o caderno não pode ir para o céu nem inferno.
          </Text>
      </View>


        <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}III
          </Text>

            <Text style={styles.regras}>
            • Se a hora da morte for escrita dentro de 40 segundos após escrever a causa da morte como um ataque cardíaco, o tempo da morte pode ser manipulado, e o tempo pode entrar em vigor dentro de 40 segundos após escrever o nome.
            {'\n'}{'\n'}
            • O ser humano que toca o caderno pode reconhecer a imagem e de voz do seu proprietário original, uma shinigami, mesmo que o ser humano não é o dono do caderno.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}IV
          </Text>

            <Text style={styles.regras}>
            • A pessoa em posse do Death Note é possuído por um shinigami, seu proprietário original, até que eles morram.
            {'\n'}{'\n'}
            • Se um ser humano usa o caderno, um shinigami geralmente aparece na frente dele dentro de 39 dias após ele usar o caderno.
            {'\n'}{'\n'}
            • Shinigamis, os proprietários originais do Death Note, não fazem, em princípio, qualquer coisa que vai ajudar ou impedir as mortes no caderno.
            {'\n'}{'\n'}
            • Um shinigami não tem obrigação de explicar completamente como usar o Death Note ou regras que se aplicam ao ser humano que o detém a menos que solicitado.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}V
          </Text>

            <Text style={styles.regras}>
            • Um shinigami pode estender sua própria vida, colocando um nome no seu próprio caderno, mas os seres humanos não podem.
            {'\n'}{'\n'}
            • Uma pessoa pode encurtar sua própria vida usando o caderno.
            {'\n'}{'\n'}
            • O ser humano que se torna o proprietário do Death Note pode, em troca de metade de sua vida restante, obter olhos de shinigami que permitirão a ele ver o nome e o resto do tempo de vida de um humano.
            {'\n'}{'\n'}
            • Um shinigami não pode ser morto, mesmo esfaqueado no coração com uma faca ou tiro na cabeça com uma arma. No entanto, existem maneiras de matar um shinigami, que geralmente não são conhecidas pelo shinigami.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}VI
          </Text>

            <Text style={styles.regras}>
            • As condições para a morte não serão realizadas se forem fisicamente impossíveis para que um ser humano realize-a.
            {'\n'}{'\n'}
            • O âmbito específico da condição da morte não é conhecido pelo shinigami, também. Então, você deve examinar e descobrir.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}VII
          </Text>

            <Text style={styles.regras}>
            • Uma página tirada do Death Note, ou mesmo um fragmento da página, terá todos os efeitos do caderno.
            {'\n'}{'\n'}
            • O instrumento para escrever pode ser qualquer coisa, (por exemplo, cosméticos, sangue, etc), desde que ele possa escrever de modo legível no caderno.
            {'\n'}{'\n'}
            • Mesmo os proprietários originais do Death Note, os shinigamis, não sabem muito sobre o caderno.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}VIII
          </Text>

            <Text style={styles.regras}>
            • Pode também se escrever a causa ou detalhes da morte antes de se escrever o nome do indivíduo.
            {'\n'}{'\n'}
            • Certifique-se de inserir o nome na frente da causa de morte por escrito. Você tem cerca de 19 dias (de acordo com o calendário humano) para colocar um nome.
            {'\n'}{'\n'}
            • Mesmo se você realmente não possuir o Death Note, o efeito será o mesmo se você puder reconhecer a pessoa e o nome dela para colocar no espaço em branco.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}IX
          </Text>

            <Text style={styles.regras}>
            • O Death Note não irá afetar criaturas com menos de 780 dias de idade.
            {'\n'}{'\n'}
            • O Death Note não funcionará se o nome da vítima for escrito incorretamente depois de quatro vezes.
            {'\n'}{'\n'}
            • Se o nome da vítima foi escrito errado de propósito quatro ou mais vezes, o usuário juntamente com a vítima morrerão.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}X
          </Text>

            <Text style={styles.regras}>
            • “Suicídio” é uma causa de morte válida. Basicamente, todos os seres humanos são pensados ​​para ter a possibilidade de cometer suicídio. Não é, portanto, algo “inacreditável para se pensar.”
            {'\n'}{'\n'}
            • Se a causa da morte do indivíduo é um suicídio ou acidente, ou se a morte leva à morte de mais do que a que se destina, a pessoa vai simplesmente morrer de um ataque cardíaco. Isto é para assegurar que outras vidas não sejam influenciadas.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XI
          </Text>

          <Text style={styles.regras}>
            • Mesmo após o nome da pessoa, o momento da morte, e a condição da morte foram preenchidas, o tempo e a condição da morte podem ser alteradas quantas vezes você quiser, contanto que sejam alteradas dentro de 6 minutos e 40 segundos. Mas, é claro, isso só é possível antes que a vítima morra.
            {'\n'}{'\n'}
            • Sempre que você quiser mudar alguma coisa escrita no Death Note dentro de 6 minutos e 40 segundos depois que você escreveu, você deve primeiro descartar os caracteres que você deseja apagar com duas linhas retas.
            {'\n'}{'\n'}
            • Como você pode ver acima, o tempo e as condições da morte podem ser mudados, mas uma vez que o nome da vítima foi escrito, a morte do indivíduo não pode ser evitada.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XII
          </Text>

          <Text style={styles.regras}>
            • Se você perder o Death Note ou tê-lo roubado, você vai perder a sua propriedade a não ser que você possa recuperá-la no prazo de 490 dias.
            {'\n'}{'\n'}
            • Se você trocou sua vida pelo poder do olho de shinigami, você vai perder o poder do olho, bem como a memória do Death Note, uma vez que você perde a sua posse. Ao mesmo tempo, a metade restante da sua vida não será restaurada.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XIII
          </Text>

            <Text style={styles.regras}>
            • Você pode emprestar o Death Note para outra pessoa, mantendo a sua propriedade. Desistir da posse para outra pessoa, também é possível. Isso também permite que a pessoa em posse atual do caderno troque sua vida por olhos de shinigami.
            {'\n'}{'\n'}
            • O indivíduo com um Death Note emprestado não será seguido por um shinigami. O shinigami sempre permanece com o proprietário do Death Note (embora não seja obrigado).
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XIV
          </Text>

          <Text style={styles.regras}>
            • Se o proprietário do Death Note morrer enquanto o caderno está com outro pessoa, sua posse será transferida para a pessoa que está segurando-o naquele momento.
            {'\n'}{'\n'}
            • Se o Death Note é roubado e o proprietário é assassinado pelo ladrão, sua posse será automaticamente transferida para o ladrão.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XV
          </Text>

          <Text style={styles.regras}>
            • Quando o mesmo nome é escrito em mais de um Death Note, o que foi escrito primeiro será o único a valer, independentemente da hora da morte.
            {'\n'}{'\n'}
            • Se escrever o mesmo nome em mais de um Death Note com um intervalo de 0,06 segundos, é considerado como simultâneo, o Death Note não terá efeito e o indivíduo cujo nome foi escrito não morrerá.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XVI
          </Text>

          <Text style={styles.regras}>
            • O shinigami deve pelo menos possuir um Death Note. O Death Note nunca deve ser emprestado ou escrito por um ser humano.
            {'\n'}{'\n'}
            • Trocar e escrever Death Notes de outros shinigamis não será problema.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XVII
          </Text>

          <Text style={styles.regras}>
            • Se o shinigami decide usar o Death Note para matar o assassino de um indivíduo que ele favorece, a vida do indivíduo será estendida, mas o shinigami irá morrer.
            {'\n'}{'\n'}
            • O shinigami desaparecerá, mas o Death Note permanecerá. A posse deste Death Note é normalmente dada para o próximo shinigami que o toca, ou continua sendo posse do proprietário humano.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XVIII
          </Text>

            <Text style={styles.regras}>
            • Apenas tocando em outro Death Note possuído por outro ser humano, um humano pode ver e ouvir outro shinigami.
            {'\n'}{'\n'}
            • Um indivíduo com o poder do olho de shinigami pode dizer o nome e a expectativa de vida de outros seres humanos, olhando para o rosto da pessoa. Por possuir o Death Note, um indivíduo ganha a habilidade de matar, e deixa de ser uma vítima. A partir deste ponto, uma pessoa com o Death Note não pode ver a vida de outro proprietário de Death Note, então eles não serão capazes de ver o quanto resta de suas próprias vidas.
            {'\n'}{'\n'}
            • O shinigami não deve dizer a seres humanos os nomes ou expectativa de vida de pessoas que ele vê. Isso é para evitar confusão no mundo humano.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XIX
          </Text>

            <Text style={styles.regras}>
            • É pré-requisito para que um Death Note usado no mundo humano venha de um shinigami.
            {'\n'}{'\n'}
            • É muito difícil considerar que um shinigami, que acompanhe um ser humano possa morrer, mas se ele morrer, o Death Note que ele trouxe ao mundo humano não perderá seu poder.
            </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XX
          </Text>

            <Text style={styles.regras}>
            • Para ver os nomes e as expectativas de vida dos seres humanos usando o poder do olho de shinigami, o proprietário deve conseguir enxergar mais da metade do rosto da pessoa.
            {'\n'}{'\n'}
            • Ao olhar de cima para baixo, ele deve procurar enxergar, no mínimo, desde a cabeça até ao nariz. Se ele olha só os olhos para baixo, ele não será capaz de ver o nome da pessoa e vida. Além disso, embora algumas partes do rosto, por exemplo, os olhos, nariz ou boca estejam escondidos, se ele pode, basicamente, ver toda a face, ele será capaz de ver o nome da pessoa e vida. Ainda não está claro o quanto é necessária a exposição a dizer o nome de uma pessoa e vida, pois isso precisa ser verificado. Se verificarem as condições acima, nomes e expectativa de vida podem ser vistos através de fotos e imagens, não importa o quanto sejam velhas. Mas esta é por vezes influenciada pela intensidade e tamanho. Também, os nomes e os períodos de vida não podem ser vistos por meio de desenhos ou retratos falados mesmo que sejam realistas.
            {'\n'}{'\n'}
            • Quando um humano morre dono de um Death Note com o olho de um shinigami, ele não pode mais ver a vida útil do humano falecido, nem nome em fotos e vídeos.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXI
          </Text>

            <Text style={styles.regras}>
            • O humano que possui o olho do Shinigami passa a ter acuidade visual igual ou superior a 3,6 segundo a escala de Landolt usada no Mundo dos Humanos, independentemente da acuidade visual que ele possuía anteriormente.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXII
          </Text>

            <Text style={styles.regras}>
            • Os indivíduos que perdem a posse do Death Note também perderão a memória do uso do Death Note. Isso não significa que ele perderá toda a memória desde o dia em que ele era o dono até o dia em que ele perdeu a posse, mas significa que ele só vai perder a memória envolvendo o Death Note.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXIII
          </Text>

            <Text style={styles.regras}>
            • Os indivíduos que perdem a posse do Death Note também perderão a memória do uso do Death Note. Isso não significa que ele perderá toda a memória desde o dia em que ele era o dono até o dia em que ele perdeu a posse, mas significa que ele só vai perder a memória envolvendo o Death Note.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXIV
          </Text>

            <Text style={styles.regras}>
            • O shinigami não deve permanecer no mundo humano sem uma razão particular. Condições para ficar no mundo humano são as seguintes:
            {'\n'}{'\n'}
            • Quando o shinigami entrega o Death Note a um ser humano.
            {'\n'}{'\n'}
            • Essencialmente, encontrar um humano para passar o Death Note deve ser feito a partir do mundo dos shinigami, mas se for a 82 horas, este também pode ser feito no mundo humano.
            {'\n'}{'\n'}
            • Quando um shinigami persegue um indivíduo com a intenção de matá-los, contanto que seja à 82 horas de assombra-los, o shinigami pode ficar no mundo humano.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXV
          </Text>

            <Text style={styles.regras}>
            • O shinigami não deve entregar o Death Note diretamente a uma criança com menos de 6 anos de idade (com base no calendário humano).
            {'\n'}{'\n'}
            • O Death Note não pode ser entregue a uma criança com menos de 6 anos de idade, mas cadernos que foram lançados para o mundo humano, e fazem parte do mundo humano, pode ser usado por seres humanos de qualquer idade com o mesmo efeito.
            </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXVI
          </Text>

            <Text style={styles.regras}>
            • Se você acabou de escrever, “morrer de acidente” para a causa da morte, a vítima morrerá de um acidente natural 6 minutos e 40 segundos após ter seu nome escrito.
            {'\n'}{'\n'}
            • Mesmo que apenas um nome esteja escrito no Death Note, se ele influencia e provoca a morte de outros seres humanos que não são escritos nele para morrer, a causa da morte da vítima será um ataque cardíaco.
            </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXVII
          </Text>

            <Text style={styles.regras}>
            • Se você escrever, “morrer de doença”, com o nome de uma doença específica e o tempo da morte da pessoa, deve haver uma quantidade suficiente de tempo para que a doença progrida. Se o tempo é muito curto, a vítima vai morrer de um ataque cardíaco após 6 minutos e 40 segundos.
            {'\n'}{'\n'}
            • Se você escrever, “morrer de doença” para a causa da morte, mas apenas escrever uma época específica da morte sem o nome real da doença, o ser humano morrerá de uma doença aleatória de acordo com o tempo descrito. Mas o Death Note só pode operar dentro de 23 dias (no calendário humano). Essa é a chamada regra dos 23 dias.
            </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXVIII
          </Text>

            <Text style={styles.regras}>
            • Se você escrever, “morrer de doença”, como antes, com o nome de uma doença específica, mas sem um horário específico, se leva mais do que 24 dias para o ser humano morrer a regra de 23 dias não terá efeito e o humano irá morrer um tempo adequado, dependendo da doença.
            {'\n'}{'\n'}
            • A reescrita da causa ou dos detalhes da morte deve ser feita dentro de 6 minutos e 40 segundos. Você não pode mudar o tempo de morte da vítima.
            </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXIX
          </Text>

            <Text style={styles.regras}>
            • Você não pode matar criaturas com mais de 124 anos ou mais de existência com o Death Note.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XXX
          </Text>

            <Text style={styles.regras}>
            • O nome da pessoa que o olho do Shinigami possibilita enxergar é aquele necessário para matar e, portanto, não precisa necessariamente estar registrado em certidões.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXI
          </Text>

            <Text style={styles.regras}>
            • O número de páginas do Death Note nunca vai acabar.
            {'\n'}{'\n'}
            • Isso é para que o usuário não se restrinja em suas mortes e, portanto, fazendo com que o caderno não se torne inútil por falta de páginas.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXII
          </Text>

            <Text style={styles.regras}>
            • Se alguém possuir mais de um Death Note, visualizando a vítima e, em seguida, escrevendo o nome em um dos cadernos e a causa de morte no outro, terá efeito. No entanto, a ordem não é importante; se você escrever a causa da morte em um Death Note e, depois, escrever o nome em outro, isso terá efeito.
            {'\n'}{'\n'}
            • Isso também pode ser realizado por dois proprietários trabalhando juntos. Neste caso, é necessário que ambos toquem um no caderno do outro.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXIII
          </Text>

            <Text style={styles.regras}>
            • Se uma pessoa perde a posse de um Death Note, ela não reconhecerá mais os shinigamis pela visão ou voz. No entanto, se o proprietário atual permitir que alguém toque em seu Death Note, a partir desse momento, essa pessoa reconhecerá o shinigami.
            {'\n'}{'\n'}
            • De acordo com o exposto, o ser humano que tocou no Death Note e começou a reconhecer os shinigamis continuará a fazê-lo até realmente possuir o Death Note e, posteriormente, perder a posse do mesmo.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXIV
          </Text>

            <Text style={styles.regras}>
            • O proprietário do Death Note não pode ser morto por um shinigami que reside no mundo dos shinigamis.
            {'\n'}{'\n'}
            • Além disso, um shinigami que venha ao mundo humano com o objetivo de matar o proprietário de um Death Note não conseguirá.
            {'\n'}{'\n'}
            • Apenas um shinigami que passou seu Death Note para um ser humano é capaz de matar o proprietário desse Death Note.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXV
          </Text>

            <Text style={styles.regras}>
            • Se um proprietário do caderno escrever acidentalmente um nome incorreto quatro vezes, essa pessoa estará livre de ser morta pelo Death Note. No entanto, se intencionalmente errar o nome quatro vezes, a pessoa cujo nome foi escrito morrerá.
            {'\n'}{'\n'}
            • A pessoa cujo nome foi escrito incorretamente quatro vezes de propósito não estará livre da morte por um Death Note.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXVI
          </Text>

            <Text style={styles.regras}>
            • Existem shinigamis masculinos e femininos, mas também não é permitido, nem possível, que eles tenham relações sexuais com seres humanos. Os shinigamis também não podem ter relações sexuais entre si.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXVII
          </Text>

            <Text style={styles.regras}>
            • Ao recuperar a posse do Death Note, as memórias associadas a ele também retornarão. Nos casos em que estiverem envolvidos com outros Death Notes, as lembranças de todos os Death Notes envolvidos voltarão.
            {'\n'}{'\n'}
            • Mesmo sem recuperar a posse, as memórias retornarão apenas tocando no Death Note. O Death Note deve estar intacto e não pode ser uma peça ou uma página.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXVIII
          </Text>

            <Text style={styles.regras}>
            • Você perderá a memória do Death Note ao perder sua posse. Mas você pode recuperar as memórias ao obter a posse novamente ou tocando em um Death Note. Isso pode ser feito até 6 vezes por Death Note.
            {'\n'}{'\n'}
            • Se as 6 vezes forem ultrapassadas, a memória da pessoa do Death Note não voltará e eles terão que usá-lo sem nenhuma memória anterior dele.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XXXIX
          </Text>

            <Text style={styles.regras}>
            • Os seres humanos que negociam o olho de shinigami verão a vida restante de uma pessoa, e não serão influenciados pelo Death Note. Se a vítima é morta usando o Death Note, a vida restante dessa vítima será dada ao shinigami.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}XL
          </Text>

            <Text style={styles.regras}>
            • Sempre que um shinigami que estava no mundo humano morre, e o Death Note é deixado para trás, e este é pego por um ser humano, essa pessoa torna-se o proprietário.
            {'\n'}{'\n'}
            • No entanto, neste caso, apenas o humano que possa reconhecer o shinigami e sua voz é capaz de ver e tocar o Death Note.
            {'\n'}{'\n'}
            • É muito improvável, mas se por acaso um shinigami pega o Death Note, este shinigami torna-se o novo proprietário.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XLI
          </Text>

            <Text style={styles.regras}>
            • A utilização do Death Note no mundo humano às vezes afeta a vida de outro ser humano ou reduz a sua vida original, apesar de seus nomes não estarem realmente escritos no Death Note. Nestes casos, não importa a causa, o shinigami vê apenas o tempo original de vida, e não o reduzido.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XLII
          </Text>

            <Text style={styles.regras}>
            • É inútil tentar apagar nomes escritos no Death Note com borrachas ou corretivos.
            {'\n'}{'\n'}
            • Se um Death Note virou propriedade do mundo humano contra a vontade de um shinigami, o shinigami é permitido estar no mundo humano para recuperá-lo.
            {'\n'}{'\n'}
            • Nesse caso, se houver outros Death Notes no mundo dos humanos, os shinigamis não estão autorizados a revelar aos seres humanos as suas localizações.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XLIII
          </Text>

            <Text style={styles.regras}>
            • Se o Death Note que o shinigami possui é por ter enganado outro shinigami a entregá-lo, ele só pode recuperá-lo a partir do shinigami que o possui no momento. Se não for um shinigami, mas um ser humano a possuí-lo, a única maneira que o shinigami tem para recuperá-lo será tocando no Death Note e assombrar o ser humano. E então esperar até que o ser humano morra para tirá-lo antes de qualquer outro o toque, ou se o humano desejar entregá-lo de bom grado.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XLIV
          </Text>

            <Text style={styles.regras}>
            • Se o shinigami ver o humano pelo menos uma vez na vida, ele poderá observá-lo a partir de um buraco no mundo dos shinigamis.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'    '}XLV
          </Text>

            <Text style={styles.regras}>
            • Existem leis no mundo dos shinigamis. Se um shinigami quebrar a lei, existem nove níveis de gravidade numerados de Nível 1 até o Nível 8 e o extremo. Para níveis de gravidade acima de 3 o shinigami será morto depois de ser punido.
            {'\n'}{'\n'}
            • Por exemplo, matar um ser humano sem usar o Death Note é considerado um crime de nível extremo.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XLVI
          </Text>

            <Text style={styles.regras}>
            • Perder a memória do Death Note passando sua posse para outro, ou por abandono de sua posse, só irá ocorrer se alguém tiver realmente morrido usando o Death Note. Você não vai perder a memória do Death Note, por exemplo, se você simplesmente o possuir e não escrever o nome de ninguém. Neste caso, você não será capaz de ouvir a voz ou ver a figura do shinigami. Você também vai perder o poder do olho de shinigami.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XLVII
          </Text>

            <Text style={styles.regras}>
            • O shinigami não vai morrer por falta de sono. Além disso, os shinigami realmente não precisam dormir. O significado de sono para os shinigami é essencialmente diferente dos seres humanos, como apenas preguiça.
            {'\n'}{'\n'}
            • Especialmente shinigamis que vivem no mundo humano e que passaram seu Death Note, não devem ser preguiçosos, pois eles são obrigados a ver a morte do ser humano, mas não é que eles não estejam autorizados a dormir.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XLVIII
          </Text>

            <Text style={styles.regras}>
            • A fim de fazer o Death Note funcionar, o nome da vítima deve ser escrito na mesma página, mas a causa da morte e a situação em torno da morte podem ser descritas em outras páginas do Death Note. Isso vai funcionar enquanto a pessoa que escreve no Death Note mantiver o nome das vítimas em específico em mente quando escrever a causa e a situação da morte.
          </Text>
      </View>

      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'   '}XLIX
          </Text>

            <Text style={styles.regras}>
            • É permitido que um shinigami passe seu Death Note apenas para 3 seres humanos ao mesmo tempo.
            {'\n'}{'\n'}
            • Apenas 6 Death Note podem existir ao mesmo tempo no mundo humano. Claro, o Death Note que o shinigami possui não conta. Isso significa que apenas 6 shinigamis que passaram seu Death Note para seres humanos podem permanecer no mundo humano.
            {'\n'}{'\n'}
            • É possível para um único shinigami entregar até 6 Death Notes, por exemplo, entregando a três seres humanos 2 Death Notes cada um.
            {'\n'}{'\n'}
            • Em outras palavras, um humano poderia possuir todos os 6 Death Notes.
            {'\n'}{'\n'}
            • No entanto, se um sétimo Death Note é possuído por um humano no mundo humano, nada vai acontecer mesmo se usado. A menos que um dos outros seis Death Notes seja entregue ao shinigami, só então o sétimo poderá ser usado.
            {'\n'}{'\n'}
            • O sétimo Death Note não ficará ativo até que um dos outros seis seja queimado, ou um shinigami leve um deles de volta para o mundo dos shinigamis.
          </Text>
      </View>


      <View style={styles.containerTexto}>
          <Text style={styles.titulo}>
            How to Use It{'\n'}{'     '}L
          </Text>

            <Text style={styles.regras}>
            • O Death Note não terá efeito se você escrever um nome específico usando várias páginas diferentes.
            {'\n'}{'\n'}
            • Porém, a frente e o verso de uma página são considerados uma página. Por exemplo, o Death Note ainda terá efeito se você escrever o sobrenome da vítima na primeira página e o nome nas costas.
          </Text>
      </View>



  </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 45,
    zIndex: 1,
    width: 360
  },
  principal: {
    width: 350,
    height: 100,
    borderRadius: 220,
    zIndex: 1,
  },
  containerTexto:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 15,
    paddingTop: 10,
    color: 'Black',
    fontSize: 42,
    fontFamily: 'ShadowsIntoLight_400Regular',
  },
  regras :{
    alignItems: 'center',
    textAlign: 'justify',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 15,
    padding: 25,
    color: 'Black',
    fontSize: 17,
    fontFamily: 'Aboreto_400Regular',
  },
});