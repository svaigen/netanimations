angular.module('netanimations', ['ionic', 'netanimations.controllers', 'pascalprecht.translate',
'netanimations.threewayhandshake', 'netanimations.sequencenumber', 'netanimations.purealoha',
 'netanimations.hybridmodel', 'netanimations.intraasrouting','netanimations.interasrouting'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent' :{
        templateUrl: "templates/about.html",
        controller: 'AboutCtrl'
      }
    }
  })

  .state('app.config', {
    url: "/config",
    views: {
      'menuContent' :{
        templateUrl: "templates/config.html",
        controller: 'ConfigCtrl'
      }
    }
  })

  .state('app.animations', {
    url: "/animations",
    views: {
      'menuContent' :{
        templateUrl: "templates/animations.html",
        controller: 'AnimationsCtrl'
      }
    }
  })

  .state('app.three-way-handshake', {
    url: "/three-way-handshake",
    views: {
      'menuContent': {
        templateUrl: "templates/three-way-handshake.html",
        controller: 'ThreeWayHandshakeCtrl'
      }
    }
  })

  .state('app.sequence-number',{
    url: '/sequence-number',
    views: {
      'menuContent': {
        templateUrl: 'templates/sequence-number.html',
        controller: 'SequenceNumberCtrl'
      }
    }
  })

  .state('app.pure-aloha',{
    url: '/pure-aloha',
    views: {
      'menuContent': {
        templateUrl: 'templates/pure-aloha.html',
        controller: 'PureAlohaCtrl'
      }
    }
  })

  .state('app.hybrid-model',{
    url: '/hybrid-model',
    views: {
      'menuContent': {
        templateUrl: 'templates/hybrid-model.html',
        controller: 'HybridModelCtrl'
      }
    }
  })

  .state('app.intra-as-routing',{
    url: '/intra-as-routing',
    views: {
      'menuContent': {
        templateUrl: 'templates/intra-as-routing.html',
        controller: 'IntraAsRoutingCtrl'
      }
    }
  })

  .state('app.inter-as-routing',{
    url: '/inter-as-routing',
    views: {
      'menuContent': {
        templateUrl: 'templates/inter-as-routing.html',
        controller: 'InterAsRoutingCtrl'
      }
    }
  })
  ;

  $urlRouterProvider.otherwise('/app/animations');

  $translateProvider.translations('en', {
    LANGUAGE: 'Language',
    PORTUGUESE: 'Portuguese',
    ENGLISH: 'English',
    CONFIGS: 'Config',
    ANIMATIONS: 'Animations',
    ABOUT: 'About',
    CONTINUE: 'Continue',
    INFO: 'Information',
    EXAMPLE: 'Example',
    ANIMATION_END: 'End of animation.',
    END: 'End',

    STEP_1: 'First step',
    STEP_2: 'Second step',
    STEP_3: 'Third step',
    STEP_4: 'Fourth step',
    STEP_5: 'Fifth step',

    ENCAPSULATION: 'Encapsulation',
    DECAPSULATION: 'Decapsulation',

    SEGMENT_1: 'First segment',

    THREEWAY_HANDSHAKE: 'Three-way Handshake',
    THREEWAY_HANDSHAKE_DESC: 'Process of TCP connection establishment',
    THREEWAY_HANDSHAKE_PRESENTATION: 'The Three-Way Handshake is a process of agreement between the two parties wishing to establish a communication that consists of three steps.',
    TWHS_STEP_1: 'O cliente envia um pacote (requisição) com as flags SYN = 1 e ACK = 0',
    TWHS_STEP_2: 'The server responds with a packet containing the SYN = 1 and ACK = 1 flags, representing that the connection is accepted and established',
    TWHS_STEP_3: 'The client responds with a packet with the ACK flag = 1',
    TWHS_END: 'After the end of the 3 steps, the Three-way handshake is complete and the two parties can exchange data with each other.',
    TWHS_CLIENT_SOURCE: 'Source Client',
    TWHS_IP_CLIENT: 'IP 194.153.205.36',
    TWHS_SERVER_DESTINY: 'Destiny Server',
    TWHS_IP_SERVER: 'IP 130.57.20.1',

    SEQUENCE_NUMBER_TITLE: 'Sequence number and acknowledgment',
    SEQUENCE_NUMBER_DESC: 'Two of the most important fields of the TCP header.',
    SEQUENCE_NUMBER_PRESENTATION_1: 'Two of the most important fields of the TCP header is the field sequence number and the acknowledgment number field.',
    SEQUENCE_NUMBER_PRESENTATION_2: 'These numbers are applied to the string of bytes transmitted, and not on the number of segments transmitted.',
    SEQUENCE_NUMBER_PRESENTATION_3: 'The sequence number for a segment is the number of the first byte of the segment. Ex: Suppose a process on host A wants to send a message to the process in host B over a TCP connection.',
    SEQUENCE_NUMBER_PRESENTATION_4: 'Consider that the data string is a file of 500,000 bytes, the MSS (maximum segment size) is 1000 bytes and the number 0 is assigned to the first byte of the data string.',
    SEQUENCE_NUMBER_PRESENTATION_5: 'In this case, TCP segments 500 builds from the data string. The first segment receives the sequence number 0, the second 1000, a third 2000 and so on.',
    SEQUENCE_NUMBER_PRESENTATION_6: 'The number of recognition that a host assigns its segment is the sequence number of the next byte that it is waiting. EX: Host B is about to send the bytes numbered 0-535 to host A. As just get the bytes 0-999, host B sends acknowledgment number as the value for the upcoming 1000 byte.',

    PURE_ALOHA_TITLE: 'Pure Aloha Protocol',
    PURE_ALOHA_DESC: 'Solving channel allocation problems at the data link layer',
    PURE_ALOHA_PRESENTATION_1: 'The pure Aloha protocol is random access, without intermission and totally decentralized.',
    PURE_ALOHA_PRESENTATION_2: 'When a frame arrives first, the host immediately transmits the entire frame to the broadcast channel.',
    PURE_ALOHA_PRESENTATION_3: 'We will use an example to demonstrate the operation of the Aloha protocol. Ex: The host A wants to send a frame to host C and forwards the broadcast channel.',
    PURE_ALOHA_PRESENTATION_4: 'During transmission, the transmitter is able to infer whether or not there was a collision of frame sent.',
    PURE_ALOHA_PRESENTATION_5: 'Now, suppose host B also wants to send a frame to host C and forwards the broadcast channel at the same time the frame sent by host A is transmitted, thereby causing a collision.',
    PURE_ALOHA_PRESENTATION_6: 'In this case the host immediately retransmits the frame via the broadcast channel.',
    PURE_ALOHA_PRESENTATION_7: 'Consider a probability p, or a number between 0 and 1.',
    PURE_ALOHA_PRESENTATION_8: 'The host B waits for a transmission time frame and then retransmit the frame with probability p, or wait for another time frame with probability 1-p.',

    HM_BG_CLASS: 'hm-bg-en',
    HYBRID_MODEL_TITLE: 'Hybrid Model',
    HYBRID_MODEL_DESC: 'Encapsulation/decapsulation process performed for a message dispatch',
    HYBRID_MODEL_PRESENTATION_1: 'The set protocols of network architecture can be understood like a layered model, where each one is responsible by a task group, supporting a well-marked service\'s group to the superior layer protocol.',
    HYBRID_MODEL_PRESENTATION_2: 'The hybrid model removes the layer\'s "excess" from ISO/OSI model and improves the TCP/IP model. It\'s composed by 5 layers: Physical, Data Link, Network, Transport and Application.',
    HYBRID_MODEL_PRESENTATION_3: 'Next, it will be presented an example of model operation, where a source client will send a message to a destiny server. It will be observed all encapsulation/decapsulation message process.',
    HYBRID_MODEL_PRESENTATION_4: 'The first step of encapsulation, the message crossed the <b>Application Layer</b>, that provides an interface between user processes and network. Protocol examples of this layer are: HTTP,  DHCP, SMTP, FTP, POP3, SSH, DNS. ',
    HYBRID_MODEL_PRESENTATION_5: 'The second step of encapsulation, the message crossed the <b>Transport Layer</b>, that divides data into segments and ensures an secure data transmission. Protocol examples of this layer are: TCP and UDP.',
    HYBRID_MODEL_PRESENTATION_6: 'The third step of encapsulation, the message crossed the <b>Network Layer</b>, that divides the segments into packages (datagrams); determines route and defines logical addresses. Protocol examples of this layer are: IP, ARP.',
    HYBRID_MODEL_PRESENTATION_7: 'The fourth step of encapsulation, the message crossed the <b>Data Lynk Layer</b>, that divides the package into frames, controls the device acess and manages the transmission, detecting and fixing errors in Physical Layer. Protocol examples of this layer is Ethernet.',
    HYBRID_MODEL_PRESENTATION_8: 'Lastly, the message crossed the <b> Physical Layer</b>, that sends bits from one node to another and describes procedures and mechanical, electrical and functional features.',
    HYBRID_MODEL_PRESENTATION_9: 'After the encapsulation process have been completed, the <b>physical device</b> will transport the message across the network that don\'t know who is the message\'s final receiver. That way, it will be transported to the next found node.',
    HYBRID_MODEL_PRESENTATION_10: 'In this example, the next found node isn\'t the message\'s final receiver. It is a router. Then, the router must verify and pass the message to next route\'s node.',
    HYBRID_MODEL_PRESENTATION_11: 'The <b>Physical Layer</b> of router forwards the received message to Data Link Layer.',
    HYBRID_MODEL_PRESENTATION_12: 'The <b>Data Link Layer</b> of router will analyze the frame to examine if the physical address is its and if the frame is intact, or if it is damaged. If it is damaged, the layer will demand <b>relay</b>. Otherwise, the Data Link header is decapsulated and the remainder is send to <b>Network Layer</b>.',
    HYBRID_MODEL_PRESENTATION_13: 'The <b>Network Layer</b> will analyze the <b>destiny IP address</b> into the packet to determine if the same is its. If it don\'t belongs, it will trace the route that the package will follow and it will give back to Data Link Layer. If it belongs, the package is send to destiny.',
    HYBRID_MODEL_PRESENTATION_14: 'The <b>Data Link Layer</b> will encapsulate data again that will be used to evaluate the data\'s integrity posteriorly. After, it will send the package to Physical Layer.',
    HYBRID_MODEL_PRESENTATION_15: 'So, The <b>Physical Layer</b> will send the package to next node.',
    HYBRID_MODEL_PRESENTATION_16: 'Upon reaching the destination server, the package will cross all layers in <i>bottom/up</i> direction, that will realize the decapsulation until an application can read the sender\'s message',
    HYBRID_MODEL_PRESENTATION_17: 'The <b>Network Layer</b> will analyze the <b>destiny IP address</b> into the packet to determine if the same is its. If it belongs, it will do decapsulation and will send the remainder to <b>Transport Layer</b>',
    HYBRID_MODEL_PRESENTATION_18: 'The <b>Transport Layer</b>, upon receiving the segment, will do decapsulation and will send the remainder to <b>Application Layer</b>.',
    HYBRID_MODEL_PRESENTATION_19: 'So, the <b>Application Layer</b> will do decapsulation and, finally, can send the sender\'s message to the required application.'
  });

  $translateProvider.translations('pt-br', {
    LANGUAGE: 'Idioma',
    PORTUGUESE: 'Português',
    ENGLISH: 'Inglês',
    CONFIGS: 'Configurações',
    ANIMATIONS: 'Animações',
    ABOUT: 'Sobre',
    CONTINUE: 'Continuar',
    INFO: 'Informação',
    EXAMPLE: 'Exemplo',
    ANIMATION_END: 'Fim da animação.',
    END: 'Fim',

    STEP_1: 'Primeiro passo',
    STEP_2: 'Segundo passo',
    STEP_3: 'Terceiro passo',
    STEP_4: 'Quarto passo',
    STEP_5: 'Quinto passo',

    ENCAPSULATION: 'Encapsulamento',
    DECAPSULATION: 'Desencapsulamento',

    SEGMENT_1: 'Primeiro segmento',

    THREEWAY_HANDSHAKE: 'Three-way Handshake',
    THREEWAY_HANDSHAKE_DESC: 'Processo de estabelecimento de conexão TCP',
    THREEWAY_HANDSHAKE_PRESENTATION: 'O Three-way Handshake é um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.',
    TWHS_STEP_1: 'O cliente envia um segmento (requisição) com as flags SYN = 1 e ACK = 0',
    TWHS_STEP_2: 'O servidor responde com um segmento contendo as flags SYN = 1 e ACK = 1, representando que a conexão foi aceita e estabelecida',
    TWHS_STEP_3: 'O cliente responde com um segmento com a flag ACK = 1',
    TWHS_END: 'Após o término dos 3 passos, o Three-way Handshake está completo e as duas partes podem trocar dados entre si.',
    TWHS_CLIENT_SOURCE: 'Cliente Origem',
    TWHS_IP_CLIENT: 'IP 194.153.205.36',
    TWHS_SERVER_DESTINY: 'Servidor de Destino',
    TWHS_IP_SERVER: 'IP 130.57.20.1',

    SEQUENCE_NUMBER_TITLE: 'Número de sequência e de reconhecimento',
    SEQUENCE_NUMBER_DESC: 'Dois dos mais importantes campos do cabeçalho TCP.',
    SEQUENCE_NUMBER_PRESENTATION_1: 'Dois dos mais importantes campos do cabeçalho TCP são o campo de número de sequência e o campo de número de reconhecimento.',
    SEQUENCE_NUMBER_PRESENTATION_2: 'Esses números são aplicados sobre a cadeia de bytes transmitidos, e não sobre a série de segmentos transmitidos.',
    SEQUENCE_NUMBER_PRESENTATION_3: 'O número de sequência para um segmento é o número do primeiro byte do segmento. Ex: Suponha que um processo no host A deseja enviar uma mensagem ao processo no host B por uma conexão TCP.',
    SEQUENCE_NUMBER_PRESENTATION_4: 'Considere que a cadeia de dados seja um arquivo de 500.000 bytes, o MSS (maximum segment size) seja de 1.000 bytes e que seja atribuído o número 0 ao primeiro byte da cadeia de dados.',
    SEQUENCE_NUMBER_PRESENTATION_5: 'Neste caso, o TCP constrói 500 segmentos a partir da cadeia de dados. O primeiro segmento recebe o número de sequência 0, o segundo 1000, o terceiro 2000 e assim sucessivamente.',
    SEQUENCE_NUMBER_PRESENTATION_6: 'Já o número de reconhecimento que um host atribui a seu segmento é o número de sequência do próximo byte que ele está aguardando. EX: O host B está prestes a enviar os bytes numerados de 0 a 535 ao host A. Como acabou de receber os bytes de 0 a 999, o host B envia como número de reconhecimento o valor 1000 referente ao próximo byte.',

    PURE_ALOHA_TITLE: 'Protocolo Aloha Puro',
    PURE_ALOHA_DESC: 'Resolvendo problemas de alocação de canais na camada de enlace',
    PURE_ALOHA_PRESENTATION_1: 'O protocolo Aloha puro é um protocolo de acesso aleatório para enlaces sem fio, sem intervalo e totalmente descentralizado.',
    PURE_ALOHA_PRESENTATION_2: 'Quando um quadro chega pela primeira vez, o host imediatamente transmite o quadro inteiro ao canal broadcast.',
    PURE_ALOHA_PRESENTATION_3: 'Usaremos um exemplo para demonstrar o funcionamento do protocolo Aloha. Ex: O host A deseja enviar um quadro para o host C e o encaminha ao canal broadcast.',
    PURE_ALOHA_PRESENTATION_4: 'Durante a transmissão, o transmissor retransmite o quadro se houver uma colisão',
    PURE_ALOHA_PRESENTATION_5: 'Agora, suponha que o host B também deseja enviar um quadro para o host C e o encaminha ao canal broadcast no mesmo momento em que o quadro enviado pelo host A é transmitido, ocasionando assim uma colisão.',
    PURE_ALOHA_PRESENTATION_6: 'Neste caso o host A retransmite imediatamente o quadro através do canal broadcast.',
    PURE_ALOHA_PRESENTATION_7: 'Considere p uma probabilidade, ou seja, um número entre 0 e 1.',
    PURE_ALOHA_PRESENTATION_8: 'O host B aguardará por um tempo de transmissão de quadro e então retransmitirá o quadro com probabilidade p, ou aguardará por um outro tempo de quadro com probabilidade 1-p.',

    HM_BG_CLASS: 'hm-bg-por',
    HYBRID_MODEL_TITLE: 'Modelo Híbrido',
    HYBRID_MODEL_DESC: 'Processo de encapsulamento e desencapsulamento realizado durante o envio de uma mensagem.',
    HYBRID_MODEL_PRESENTATION_1: 'O conjunto de protocolos da arquitetura de redes pode ser visto como um modelo de camadas, onde cada uma é responsável por um grupo de tarefas, fornecendo assim um conjunto de serviços bem definidos para o protocolo da camada superior.',
    HYBRID_MODEL_PRESENTATION_2: 'O modelo híbrido retira o "excesso" de camadas do modelo ISO/OSI e melhora o modelo TCP/IP. É composto por 5 camadas: Fisica, Enlace, Rede, Transporte e Aplicação. ',
    HYBRID_MODEL_PRESENTATION_3: 'A seguir, será apresentado um exemplo de funcionamento do modelo, onde um cliente de origem enviará uma mensagem para um servidor de destino. Será observado todo o processo de encapsulamento e desencapsulamento da mensagem.',
    HYBRID_MODEL_PRESENTATION_4: 'No primeiro passo de encapsulamento, a mensagem passa pela camada de <b>aplicação</b>, que fornece a interface entre os processos do usuário e a rede. Exemplos de protocolos dessa camada são: HTTP, DHCP, SMTP, FTP, POP3, SSH, DNS.',
    HYBRID_MODEL_PRESENTATION_5: 'No segundo passo de encapsulamento, a mensagem passa pela camada de <b>transporte</b>, que divide os dados em segmentos e assegura a transmissão segura dos dados. Exemplos de protocolos dessa camada são: TCP, UDP.',
    HYBRID_MODEL_PRESENTATION_6: 'No terceiro passo de encapsulamento, a mensagem passa pela camada de <b>rede</b>, que divide os segmentos em pacotes (datagramas); determina a rota e define endereços lógicos. Exemplos de protocolos dessa camada são: IP, ARP.',
    HYBRID_MODEL_PRESENTATION_7: 'No quarto passo de encapsulamento, a mensagem passa pela camada de <b>enlace</b>, que separa o pacote em quadros (frames), controla o acesso ao meio e gerencia a transmissão, detectando e corrigindo erros na camada física. Um exemplo de protocolo dessa camada é o Ethernet.',
    HYBRID_MODEL_PRESENTATION_8: 'Por fim, a mensagem passa pela camada <b>física</b>, que transmite os <i>bits</i> de um ponto a outro e descreve os procedimentos e as características mecanicas, elétricas e funcionais.',
    HYBRID_MODEL_PRESENTATION_9: 'Após as camadas completarem o processo de encapsulamento, o <b> meio físico </b> transportará a mensagem pela rede, que não sabe quem é o destinatário final da mensagem. Dessa maneira, ela será transportada para a próxima máquina encontrada.',
    HYBRID_MODEL_PRESENTATION_10: 'Nesse exemplo, a próxima máquina encontrada não é o destinatário final da mensagem, e sim, um roteador. Assim, o roteador deverá verificar e repassar a mensagem para o próximo nó da rota',
    HYBRID_MODEL_PRESENTATION_11: 'A <b>camada física</b> do roteador encaminha a mensagem recebida para a camada de enlace.',
    HYBRID_MODEL_PRESENTATION_12: 'A <b>camada de enlace</b> analisará o quadro para averiguar se o endereço físico é o dela e se o mesmo está intacto ou se foi danificado. Se estiver danificado, a camada pedirá <b>retransmissão</b>. Caso contrário, o cabeçalho de enlace é desencapsulado e o restante é enviado para a <b>camada de rede</b>.',
    HYBRID_MODEL_PRESENTATION_13: 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b> contido no pacote para determinar se o mesmo pertence a ela. Caso não pertença, traçará a rota pelo qual o pacote irá seguir e o devolverá a camada de enlace. Caso pertança, o pacote é enviado ao destino.',
    HYBRID_MODEL_PRESENTATION_14: 'A <b>camada de enlace</b> novamente encapsulará informações que posteriormente serão usadas para avaliar a integridade das informações. Após, enviará o pacote à camada física.',
    HYBRID_MODEL_PRESENTATION_15: 'A <b>camada física</b> então enviará o pacote para o próximo nó.',
    HYBRID_MODEL_PRESENTATION_16: 'Ao chegar ao servidor de destino, o pacote percorrerá todas as camadas em sentido <i>bottom/up</i>, que irão realizar o devido desencapsulamento até que uma aplicação possa ler a mensagem enviada pelo remetente.',
    HYBRID_MODEL_PRESENTATION_17: 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b> contido no pacote para determinar se o mesmo pertence a ela. Se pertencer, realizará o desencapsulamento e enviará o restante para a <b>camada de transporte</b>.',
    HYBRID_MODEL_PRESENTATION_18: 'A <b>camada de transporte</b> ao receber o segmento, realizará o desencapsulamento e enviará o restante à <b> camada de aplicação </b>.',
    HYBRID_MODEL_PRESENTATION_19: 'A <b>camada de aplicação</b> então realizará o desencapsulamento e, finalmente, poderá enviar a mensagem do remetente para a aplicação requisitada. </b>.',

    INTRA_AS: 'Protocolo Intra-AS',
    INTRA_AS_TITLE: 'Protocolo Intra-AS: RIP',
    INTRA_AS_DESC: 'Apresentação de conceitos e procedimentos do protocolo de roteamento hierárquico intra-AS RIP.',
    INTRA_AS_PRESENTATION_1: 'Para resolver problemas de escala e autonomia administrativa do roteamento na internet, realiza-se o agrupamento de roteadores em sistemas autônomos (autonomous systems - AS).',
    INTRA_AS_PRESENTATION_2: 'Cada AS é composto de um grupo de roteadores sob o <b>mesmo controle administrativo</b>, que rodam o <b>mesmo protocolo de roteamento</b> e dispõem de informações sobre cada um dos outros.',
    INTRA_AS_PRESENTATION_3: 'Os protocolos que trabalham dentro do AS são denominados protocolos intra-AS. Os mais utilizados são o <b>RIP (Routing Information Protocol)</b> e o OSPF (Open Shortest Path First).',
    INTRA_AS_PRESENTATION_4: 'O RIP é um protocolo de vetor de distâncias que usa <b>contagem de saltos como métrica de custo</b>, assim, cada enlace tem um custo 1. O custo máximo de um caminho é limitado a 15.',
    INTRA_AS_PRESENTATION_5: 'Tabelas de roteamento são trocadas entre vizinhos a cada 30 segundos aproximadamente, <b>usando mensagem de resposta RIP.</b>',
    INTRA_AS_PRESENTATION_6: 'Essas mensagens são conhecidas como <b>anúncios RIP</b>, contendo uma lista de até 25 sub-redes de destino dentro do AS, bem como as distâncias entre o remetente e cada uma dessas sub-redes.',
    INTRA_AS_PRESENTATION_7: 'Cada roteador mantém uma tabela RIP denominada <b>tabela e roteamento</b>, que contém o vetor de distâncias.',
    INTRA_AS_PRESENTATION_8: 'Suponha que o roteador <b>1b</b> deseja alcançar a rede <b>X</b>. Ele pode chegar nela por meio de 1a ou 1c, conforme mostra a animação.',
    INTRA_AS_PRESENTATION_9: 'Para que isso ocorra, <b>1b</b> precisa saber dessa informação. A seguir é apresentada a tabela desse roteador, que a princípio não possui informações referentes ao roteador 1c.',
    INTRA_AS_PRESENTATION_10: 'Agora, observe na sequência a tabela de roteamento de <b>1c</b>. Procure notar que, para esse roteador, alcançar a sub-rede <b>X</b> são necessários apenas 2 saltos.',
    INTRA_AS_PRESENTATION_11: 'Suponha que 30 segundos mais tarde, <b> 1b </b> recebe de <b>1c</b> um anúncio que indica que a sub-rede <b>x</b> está apenas 2 saltos do roteador <b>1c</b>. Observe as alterações na tabela de <b>1b</b>.',
    INTRA_AS_PRESENTATION_12: 'Dessa maneira, quando <b>1b</b> necessitar se comunicar com a sub-rede <b>X</b>, o caminho é o apresentado a seguir.',
    INTRA_AS_PRESENTATION_13: 'Caso <b>1b</b> envie dados para a sub-rede <b>X</b>, o caminho realizado é o exibido a seguir.',

    INTER_AS: 'Protocolos Inter-AS',
    INTER_AS_TITLE: 'Protocolos Inter-AS: i-BGP e e-BGP',
    INTER_AS_DESC: 'Apresentação de conceitos e procedimentos dos protocolos de roteamento hierárquico inter-AS.',
    INTER_AS_PRESENTATION_1: 'Para resolver problemas de escala e autonomia administrativa do roteamento na internet, realiza-se o agrupamento de roteadores em sistemas autônomos (autonomous systems - AS).',
    INTER_AS_PRESENTATION_2: 'Cada AS é composto de um grupo de roteadores sob o <b>mesmo controle administrativo</b>, que rodam o <b>mesmo protocolo de roteamento</b> e dispõem de informações sobre cada um dos outros.',
    INTER_AS_PRESENTATION_3: 'A versão 4 do <b>Protocolo de Roteador de Borda</b> (Border Gateway Protocol - BGP) é o padrão para roteamento entre sistemas autônomos na Internet.',
    INTER_AS_PRESENTATION_4: 'O BGP provê a cada AS meio de: obter de ASs vizinhos informações de atingibilidade de sub-redes; propagar essas informação aos roteadores internos ao AS; determinar rotas "boas" para sub-redes com base na informação de atingibilidade e na política do AS',
    INTER_AS_PRESENTATION_5: 'Nessa animação, temos como exemplo os sistemas autônomos <b>AS1</b> e <b>AS2</b>, cada qual com seu próprio protocolo de roteamento, ou seja, eles podem ser diferentes em cada AS.',
    INTER_AS_PRESENTATION_6: '<b>Roteadores de borda</b> são roteadores que transmitem pacotes a destinos externos ao seu AS. Nesse exemplo, temos como roteadores de borda: <b>1a</b> em <b>AS1</b>, que possui uma "ligação" com AS2; e em AS2 temos <b>2a</b>, que possui ligação com AS1, e <b>2d</b>, que possui ligação com outro AS, não especificado na animação.',
    INTER_AS_PRESENTATION_7: 'No quadro de animação a seguir, os roteadores de borda são destacados na cor verde, e os caminhos entre ASs são destacados na cor laranja.',
    INTER_AS_PRESENTATION_8: 'Suponha que o roteador <b>1c</b> necessite transmitir um pacote para um destino fora do seu AS. Para isso, ele transmite o pacote conforme foi especificado pela tabela de repasse, configurada pelo próprio protocolo de roteamento <b>INTRA-AS</b> de AS1.',
    INTER_AS_PRESENTATION_9: 'Como há apenas <b> um roteador de borda </b> em AS1, o problema de saber para quem transmitir é trivial!',
    INTER_AS_PRESENTATION_10: 'Agora, suponha que <b>2c</b> necessite transmitir para fora de AS2. Sabemos que o pacote deve ser repassado para <b>2a</b> ou <b>2d</b>, que são os roteadores de borda. Mas para qual?',
    INTER_AS_PRESENTATION_11: 'Para isso, AS2 precisa saber <b>quais destinos podem ser alcançados pelos ASs vizinhos</b>, e propagar essa informação para todos os seus roteadores. Essas tarefas são gerenciadas pelo protocolo <b>inter-as BGP</b>.',
    INTER_AS_PRESENTATION_12: 'Isso faz com que os roteadores <b>troquem informações entre si</b> por meio de <b>conexões TCP semipermanentes</b> para cada par de enlace que conecte roteadores entre dois ASs diferentes. Essas conexões, juntamente com todas as mensagens BGP enviadas pela conexão, é denominada <b>Sessão BGP</b>.',
    INTER_AS_PRESENTATION_13: 'As sessões BGP são classificadas como <b>externas (eBGP)</b>, quando abrange dois ASs diferentes, ou <b>internas (iBGP)</b>, quando abrange dois roteadores no mesmo AS. A seguir são apresentadas no exemplo as sessões eBGP em laranja e iBGP em azul.',
    INTER_AS_PRESENTATION_14: 'O BGP permite que cada AS conheça <b>quais destinos podem ser alcançados</b> via seus ASs vizinhos. No exemplo, usando então sessões <b>eBGP</b> entre <b>1a</b> e <b>2a</b>, AS2 envia <b>informações de atingibilidade</b> de prefixos para AS1, e vice-versa.',
    INTER_AS_PRESENTATION_15: 'Quando um roteador de borda recebe prefixos conhecidos pelo BGP, ele usa suas sessões <b>iBGP</b> para distribuir os prefixos aos outros roteadores no AS. No exemplo da animação, caso o roteador <b>1a</b> receba informações de <b>2a</b>, ele repassará a <b>1b</b> e <b>1c</b>.',
    INTER_AS_PRESENTATION_16: 'O BGP ainda possui outros atributos importantes, como o <b>AS-PATH</b> e o <b>NEXT-HOP</b>. Para conhecer mais sobre esses atributos e ver essa animação mais detalhada, visite o repositório online das animações, pelo endereço: <b>http://din.uem.br/~animanet/pages/hierarchicalRouting</b>.'
  });

  $translateProvider.preferredLanguage('pt-br');

  //$translateProvider.useCookieStorage();

});
