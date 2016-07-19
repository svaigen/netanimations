angular.module('netanimations', ['ionic', 'netanimations.controllers', 'pascalprecht.translate',
'netanimations.threewayhandshake', 'netanimations.sequencenumber', 'netanimations.purealoha',
 'netanimations.hybridmodel', 'netanimations.intraasrouting','netanimations.interasrouting',
 'netanimations.ethernet'])

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

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent' :{
        templateUrl: "templates/map.html",
        controller: 'MapCtrl'
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
        templateUrl: "templates/sequence-number.html",
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

  .state('app.ethernet',{
    url: '/ethernet',
    views: {
      'menuContent': {
        templateUrl: 'templates/ethernet.html',
        controller: 'EthernetCtrl'
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
    SAVE: 'Save',
    BACK: 'Back',
    NEXT: 'Next',
    BACK_ANIMATIONS: 'Back to Animations',
    FINISH: 'Finish',
    RESTART: 'Restart',
    ACCESSIBILITY: 'Acessibilidade audiovisual',

    MAP: 'App Map',
    MAP_DESCRIPTION: 'In this page you can find a textual map with all app\'s content. See below.',
    MAP_CONFIGS:'In Config\'s page, you can select a pattern app\'s language and allow the animations audiovisual accessibility too.',
    MAP_ABOUT: 'In \"About\'s\" page, you can find informations related to app goal, creators and developers of that project.',

    ABOUT_APP: 'About app',
    ABOUT_LEAD: 'Department of Informatics\' project - UEM',
    ABOUT_TEXT:'This app was developed to provide animations about Computer Networks. You can contribute with suggestions, corrections and ideas to new animations by e-mail: lafmartimiano@uem.br',
    ABOUT_CREATOR: 'Project\'s creator',
    ABOUT_DEVELOPER: 'Project\'s developers',
    ABOUT_ICON: 'NetAnimations Icon',
    ABOUT_ICON_INFO: "Information Icon",
    ABOUT_UEM: "UEM\'s Logo - Universidade Estadual de Maringá",
    ABOUT_DIN: "DIN\'s logo - Informatics department",


    STEP_1: 'First step',
    STEP_2: 'Second step',
    STEP_3: 'Third step',
    STEP_4: 'Fourth step',
    STEP_5: 'Fifth step',

    ENCAPSULATION: 'Encapsulation',
    DECAPSULATION: 'Decapsulation',

    SEGMENT_1: 'First segment',

    THREEWAY_HANDSHAKE: 'Three-way Handshake',
    THREEWAY_HANDSHAKE_DESC: 'The TCP connection establishment',
    THREEWAY_HANDSHAKE_PRESENTATION: 'The Three-Way Handshake is a process of agreement between the two parties wishing to establish a communication that consists of three steps.',
    TWHS_STEP_1: 'The client sends a packet (request) with flags SYN = 1 and ACK = 0',
    TWHS_STEP_2: 'The server responds with a packet containing flags SYN = 1 and ACK = 1, representing that the connection has been accepted and established',
    TWHS_STEP_3: 'The client responds with a packet with the flag ACK = 1',
    TWHS_END: 'After that, the Three-way handshake is complete and the two parts can exchange data with each other.',
    TWHS_CLIENT_SOURCE: 'Source Client',
    TWHS_IP_CLIENT: 'IP 194.153.205.36',
    TWHS_SERVER_DESTINY: 'Destination Server',
    TWHS_IP_SERVER: 'IP 130.57.20.1',
    TWHS_ICON: 'Three Way Handshake Icon animation',

    SEQUENCE_NUMBER_TITLE: 'Sequence number and acknowledgment',
    SEQUENCE_NUMBER_DESC: 'Two of the most important fields of the TCP header.',
    SEQUENCE_NUMBER_PRESENTATION_1: 'Two of the most important fields of the TCP header are the sequence number and the acknowledgment number.',
    SEQUENCE_NUMBER_PRESENTATION_2: 'These numbers are applied to the string of bytes transmitted, and not to the number of segments.',
    SEQUENCE_NUMBER_PRESENTATION_3: 'The sequence number for a segment is the number of the first byte in the payload. Ex: Suppose a process on host A wants to send a message to the process in host B over a TCP connection.',
    SEQUENCE_NUMBER_PRESENTATION_4: 'Consider that the data string is a file of 500,000 bytes, the MSS (Maximum Segment Size) is 1000 bytes and the number 0 is assigned to the first byte of the data string.',
    SEQUENCE_NUMBER_PRESENTATION_5: 'In this case, TCP creates 500 segments. The first one receives the sequence number 0, the second 1000, a third 2000 and so on.',
    SEQUENCE_NUMBER_PRESENTATION_6: 'The acknowledgment number is related to the sequence number of the next byte that the host is waiting. EX: Host B is about to send the bytes numbered 0-535 to host A. As it just received bytes 0-999 from host A, host B sends the acknowledgment number with the value of 1000 byte.',
    SEQUENCE_NUMBER_ICON: 'Sequence number and acknowledgment icon animation',

    PURE_ALOHA_TITLE: 'Pure Aloha Protocol',
    PURE_ALOHA_DESC: 'This protocol solves channel allocation problems at a wireless data link layer',
    PURE_ALOHA_PRESENTATION_1: 'The pure Aloha protocol uses random access, without explicit coordination and totally decentralized.',
    PURE_ALOHA_PRESENTATION_2: 'When a frame arrives, the host immediately transmits the entire frame to the wireless broadcast channel.',
    PURE_ALOHA_PRESENTATION_3: 'We will use an example to demonstrate the operation of the Aloha protocol. Ex: The host A wants to send a frame to host C and forwards it to the broadcast channel.',
    PURE_ALOHA_PRESENTATION_4: 'During the transmission, the sender is able to infer whether or not there was a collision.',
    PURE_ALOHA_PRESENTATION_5: 'Now, suppose host B also wants to send a frame to host C and forwards it to the broadcast channel at the same time the frame sent by host A is being transmitted, thereby causing a collision.',
    PURE_ALOHA_PRESENTATION_6: 'In this case, the host A immediately retransmits the frame to the broadcast channel.',
    PURE_ALOHA_PRESENTATION_7: 'Consider a probability p, or a number between 0 and 1.',
    PURE_ALOHA_PRESENTATION_8: 'The host B waits for a transmission time frame and then retransmits the frame with probability p, or wait for another time frame with probability 1-p.',
    PURE_ALOHA_ICON: 'Pure Aloha Protocol icon animation',

    HM_BG_CLASS: 'hm-bg-en',
    HYBRID_MODEL_TITLE: 'Hybrid Model',
    HYBRID_MODEL_DESC: 'Encapsulation/decapsulation process performed for a message dispatch',
    HYBRID_MODEL_PRESENTATION_1: 'The set of protocols of the network architecture is organized as layered model, where each layer is responsible for a task, supporting the superior layer protocols.',
    HYBRID_MODEL_PRESENTATION_2: 'The hybrid model removes the layer\'s "excess" from ISO/OSI model and improves the TCP/IP model. It\'s composed by 5 layers: Physical, Data Link, Network, Transport and Application.',
    HYBRID_MODEL_PRESENTATION_3: 'Next, it will be presented an example of model operation, where a source client will send a message to a destination server. It will be observed all the encapsulation/decapsulation message process.',
    HYBRID_MODEL_PRESENTATION_4: 'The first step of encapsulation, the message crossed the <b>Application Layer</b>, that provides an interface between user processes and network. Examples of protocols of this layer are: HTTP,  DHCP, SMTP, FTP, POP3, SSH, DNS. ',
    HYBRID_MODEL_PRESENTATION_5: 'The second step of encapsulation, the message crossed the <b>Transport Layer</b>, that can divide data into segments and ensures an end-to-end data transmission. Examples of protocols of this layer are: TCP and UDP.',
    HYBRID_MODEL_PRESENTATION_6: 'The third step of encapsulation, the message crossed the <b>Network Layer</b>, that divides the segments into packets (or datagrams); determines routes and defines logical addresses. Example of protocol of this layer are: IP, ARP, BGP.',
    HYBRID_MODEL_PRESENTATION_7: 'The fourth step of encapsulation, the message crossed the <b>Data Lynk Layer</b>, that divides the packets into frames, controls the link access and manages the transmission, detecting and correcting errors in Physical Layer. Examples of protocols of this layer are: Ethernet and WiFi.',
    HYBRID_MODEL_PRESENTATION_8: 'The fifth step of encapsulation, the message crossed the <b> Physical Layer</b>, that sends bits from one node to another and describes procedures, and mechanical, electrical and functional features.',
    HYBRID_MODEL_PRESENTATION_9: 'After completing the encapsulation process, the <b>physical device</b> will transport the message through the network to the next node.',
    HYBRID_MODEL_PRESENTATION_10: 'In this example, the next found node isn\'t the message\'s final receiver. It is a router. Then, the router must verify and pass the message to next node.',
    HYBRID_MODEL_PRESENTATION_11: 'The <b>Physical Layer</b> forwards the received message to Data Link Layer.',
    HYBRID_MODEL_PRESENTATION_12: 'The <b>Data Link Layer</b> will analyze the frame to examine if the physical address is correct and if the frame is intact, or if it is damaged. If it is damaged, the layer will demand <b>relay</b>. Otherwise, the Data Link header is decapsulated and the packet is send to <b>Network Layer</b>.',
    HYBRID_MODEL_PRESENTATION_13: 'The <b>Network Layer</b> will analyze the <b>destination IP address</b> to determine  the route that the packet will follow and it will send it to Data Link Layer.',
    HYBRID_MODEL_PRESENTATION_14: 'The <b>Data Link Layer</b> will encapsulate the packet into a frame. After, it will send the frame to Physical Layer.',
    HYBRID_MODEL_PRESENTATION_15: 'So, the <b>Physical Layer</b> will send the bits to next node.',
    HYBRID_MODEL_PRESENTATION_16: 'Upon reaching the destination server, the packet will cross all layers in a <i>bottom/up</i> direction, that will realize the decapsulation until the application can read the sender\'s message',
    HYBRID_MODEL_PRESENTATION_17: 'The <b>Network Layer</b> will analyze the <b>destination IP address</b> into the packet to determine if it recognizes it. If it recognizes it, it will decapsulation and will send the segment to <b>Transport Layer</b>',
    HYBRID_MODEL_PRESENTATION_18: 'The <b>Transport Layer</b>, upon receiving the segment, will do decapsulation and will send the message to <b>Application Layer</b>.',
    HYBRID_MODEL_PRESENTATION_19: 'So, the <b>Application Layer</b> can read the message.',
    HYBRID_MODEL_ICON: 'hYBRID Model animation',

    INTRA_AS_TITLE: 'Intra-AS Protocol: RIP',
    INTRA_AS_DESC: 'Concepts and procedures of the hierarchical routing protocol intra-AS RIP.',
    INTRA_AS_PRESENTATION_1: 'To solve problems of scale and administrative autonomy of the internet routing, routers are grouped into autonomous systems (AS).',
    INTRA_AS_PRESENTATION_2: 'Each AS is composed of a group of routers under the <b> same administrative control </b> which runs the <b> same routing protocol </b> and has information about each other.',
    INTRA_AS_PRESENTATION_3: 'The protocols that work within AS are called intra-AS protocols. The most used are <b> RIP (Routing Information Protocol) </b> and <b> OSPF (Open Shortest Path First)</b>.',
    INTRA_AS_PRESENTATION_4: 'The RIP is a distance vector protocol that uses <b> hop count as metric </b>, so, each link has cost 1. The maximum cost of a path is limited to 15.',
    INTRA_AS_PRESENTATION_5: 'Routing tables are exchanged among neighbors every 30 seconds <b> using RIP reply message. </b>.',

    INTRA_AS_PRESENTATION_6: 'These messages are known as <b>RIP advertisements</b>, and they have a list up to 25 destination subnets within AS, as well as the distances between the sender and each of these subnets.',
    INTRA_AS_PRESENTATION_7: 'Each router keeps a RIP table named <b>routing table</b>, which contains the distance vector.',
    INTRA_AS_PRESENTATION_8: 'Suppose the router <b>1b</b> wants to reach the network <b>X</b>. It can reach it via 1a or 1c, as shown in the animation.',
    INTRA_AS_PRESENTATION_9: 'For this to occur, <b>1b</b> needs to know this information. As follows, it is presented the table of router <b>1b</b>, that in principle does not have information related to router 1c.',
    INTRA_AS_PRESENTATION_10: 'In case <b>1b</b> sends data to the subnet <b>X</b>, the path taken is shown next.',
    INTRA_AS_PRESENTATION_11: 'Now, observe the routing table <b>1c</b>. Try to note that, for this router, to reach the subnet <b>X</b> only 2 hops are needed .',
    INTRA_AS_PRESENTATION_12: 'Suppose 30 seconds later, <b> 1b</b> receives from<b>1c</b> an advertisement indicating that the subnet <b>X</b> is only 2 hops from the router <b>1c</b>. Observe the changes in the table <b>1b</b>.',
    INTRA_AS_PRESENTATION_13: 'After that, when <b>1b</b> needs to communicate with the subnet <b>X</b>, it uses the way presented as follows.',
    INTRA_AS_ICON: 'Intra-A.S. Protocol icon animation',

    INTER_AS: 'Inter-AS Protocols',
    INTER_AS_TITLE: 'Inter-AS Protocol: BGP',
    INTER_AS_DESC: 'Concepts and procedures of hierarchical routing protocol inter-AS BGP.',
    INTER_AS_PRESENTATION_1: 'To solve problems of scale and administrative autonomy of the internet routing, routers are grouped into autonomous systems (AS).',
    INTER_AS_PRESENTATION_2: 'Each AS is composed of a group of routers under the <b>same administrative control</b>, which run the <b> same routing protocol</b> and have information about each other.',
    INTER_AS_PRESENTATION_3: 'The version 4 of the <b>Border Gateway Protocol</b> (BGP) is the standard for routing amongst autonomous systems in the Internet.',
    INTER_AS_PRESENTATION_4: 'The BGP provides to each AS a way of: getting information of neighboring ASs about reachability of subnets; propagating this information to internal routers in the AS; determining "good" routes to subnets based on reachability information and AS policy.',
    INTER_AS_PRESENTATION_5: 'In this animation, we have the example of autonomous systems <b>AS1</b> and <b>AS2</b>, each with its own intra-AS routing protocol',
    INTER_AS_PRESENTATION_6: '<b>Border routers </b> are routers that transmit packets to external destinations. In this example, we have as border routers: <b>1a</b> in <b>AS1</b>, which has a link with AS2; and in AS2 we have <b>2a</b>, which has a link with AS1, and <b>2d</b> which has a link with another AS, not specified in the animation.',
    INTER_AS_PRESENTATION_7: 'In the following animation, the border routers are highlighted in green, and the paths amongst ASs are highlighted in orange.',
    INTER_AS_PRESENTATION_8: 'Suppose the router <b>1c</b> needs to transmit a packet to a destination out of its AS. For that, it transmits the packet as specified by the forwarding table, configured by the routing protocol <b>INTRA-AS</b> of AS1.',
    INTER_AS_PRESENTATION_9: 'As there is only <b>one border router</b> in AS1, the problem of knowing for whom to transmit is trivial!',
    INTER_AS_PRESENTATION_10: 'Now, suppose <b>2c</b> needs to transmit out of AS2. We know that the packet must pass through <b>2a</b> or <b>2d</b>, which are the border routers. But through which one?',
    INTER_AS_PRESENTATION_11: 'For that, AS2 needs to know <b>which destinations can be reached by its neighboring ASs</b>, and propagates this information for all its internal routers. These tasks are managed by the <b>Inter-AS BGP</b> protocol.',
    INTER_AS_PRESENTATION_12: 'The routers <b>exchange information with each other</b> using <b>semi-permanent TCP connections</b>. These connections are named <b>BGP Session</b>.',
    INTER_AS_PRESENTATION_13: 'The BGP sessions are classified as <b>external (eBGP)</b>, when covers two different ASs, or <b>internal (iBGP)</b>, when covers two routers in the same AS. The following example presents eBGP sessions in orange and iBGP in blue.',
    INTER_AS_PRESENTATION_14: 'The BGP allows each AS to know <b>which destinations can be reached</b> through its neighboring ASs. In the example, using the <b>eBGP</b> sessions between <b>1a</b> and <b>2a</b>, AS2 sends <b>reachability information</b> for AS1, and vice-versa.',
    INTER_AS_PRESENTATION_15: 'When a border router receives prefixes known by BGP, it uses <b>iBGP</b> sessions to distribute the prefixes to the other routers in the AS. In the animation, in case the router <b>1a</b> receives information from <b>2a</b>, it will pass to <b>1b</b> and <b>1c</b>.',
    INTER_AS_PRESENTATION_16: 'The BGP has an important attribute named <b>AS-PATH</b>. This attribute has information of the ASs through which advertisement has passed with information about a prefix. This attribute is used to detect and avoid <b>advertisement looping</b> and also to <b>choose amongst several paths</b> to the same prefix.',
    INTER_AS_PRESENTATION_17: 'Suppose, in the example, there is a prefix <b>X</b> in another AS, reached by AS2 by the border router <b>2d</b>. In this case, AS2 will advertise the prefix <b>X</b> to AS1, and the <b>ASPATH</b> would be "AS2 AS1".',
    INTER_AS_PRESENTATION_18: 'Another attribute is the <b>NEXT-HOP</b>, that is used to the router <b>configure its forwarding table</b>. To know more about this attribute, see the extended version of this animation in animation repository, in <b>http://din.uem.br/~animanet/pages/hierarchicalRouting</b>.',
    INTER_AS_ICON: 'Inter-A.S. Protocol icon animation',

    ETHERNET_TITLE: 'Ethernet Protocol',
    ETHERNET_DESC: 'The main protocol used in wired LANs and WANs.',
    ETHERNET_PRESENTATION_1: 'The <b>Ethernet</b> is a protocol of the <b>link layer</b>, which is able to allow the access to a <i>broadcast</i> channel. It uses as a multiple access protocol the <b>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</b>.',
    ETHERNET_PRESENTATION_2: 'In a network that uses this protocol, each adapter runs the CSMA/CD protocol without explicit coordination with other Ethernet adapters.',
    ETHERNET_PRESENTATION_3: 'In this animation, it will be illustrated the use of the protocol through an example with <b>three hosts</b>. Consider that <b>host A</b> wants to send a frame to <b>host C</b> through the broadcast channel.',
    ETHERNET_PRESENTATION_4: 'The <b>host A</b> adapter will receive the datagram of the network layer, prepare an <b>Ethernet</b> frame and insert it in the <b>out buffer</b> of the adapter.',
    ETHERNET_PRESENTATION_5: 'As the CSMA/CD protocol does not use "slots", an adapter can start transmitting at any time. It is able to realize if other adapters are transmitting and can detect collisions, measuring the voltage levels before and during transmission.',
    ETHERNET_PRESENTATION_6: 'Suppose before the <b>host A</b> starts its transmission, the <b>host B</b> decides to send a frame to the <b>host C</b>. As it detects the channel is free, it sends before the <b>host A</b>.',
    ETHERNET_PRESENTATION_7: 'This way, before starting its transmission, the <b>host A</b> identifies that a host is sending a frame. Thus, it aborts its transmission.',
    ETHERNET_PRESENTATION_8: 'This process of listening before sending is named <b>carrier detection</b>. During a transmission, the adapter checks the presence of energy coming from other adapters. This process of listening while speaks is named <b>collision detection</b>.',
    ETHERNET_PRESENTATION_9: 'When the <b>host B</b> detects the channel is free, the <b>host A</b> forwards the frame to the broadcast channel.',
    ETHERNET_PRESENTATION_10: 'In case the <b>host A</b> does not detect signal coming from other adapters, it considers the frame was delivered.',
    ETHERNET_PRESENTATION_11: 'Lets consider now the <b>host A</b> is sending a frame to the <b>host C</b>.',
    ETHERNET_PRESENTATION_12: 'In this case, it is assumed that before the sent frame pass by the <b>host B</b>, this host wants to start a transmission.',
    ETHERNET_PRESENTATION_13: 'When the <b>host B</b> detects the presence of energy coming from another host, it aborts its transmission.',
    ETHERNET_PRESENTATION_14: 'To ensure that all hosts, including the <b>host A</b>, are aware of the collision, the <b>host B</b> sends a collision reinforcement signal of <b>48 bits</b>.',
    ETHERNET_PRESENTATION_15: 'After aborting the transmission, the hosts enter in an <b>exponencial backoff</b> phase. In this phase, the hosts wait a random time before trying a retransmission.',
    ETHERNET_PRESENTATION_16: 'The <b>host A</b> starts a retransmission after waiting a random time.',
    ETHERNET_PRESENTATION_17: 'Also after waiting a random time, the <b>host B</b> starts the retransmission.',
    ETHERNET_PRESENTATION_18: 'In case the frame is not sent up to <b>sixteen attempts</b>,it is discarded.',
    ETHERNET_ICON: 'Ethernet Protocol icon animation'});

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
    SAVE: 'Salvar',
    BACK: 'Voltar',
    NEXT: 'Próximo',
    BACK_ANIMATIONS: 'Voltar às animações',
    FINISH: 'Finalizar',
    RESTART: 'Reiniciar',
    ACCESSIBILITY: 'Acessibilidade audiovisual',

    MAP: 'Mapa do Aplicativo',
    MAP_DESCRIPTION: 'Nessa página é possível encontrar um mapa textual com todo o conteúdo do aplicativo, veja a seguir.',
    MAP_CONFIGS:'Na página de configurações, é possível selecionar o idioma padrão do aplicativo e também habilitar a acessibilidade audiovisual das animações',
    MAP_ABOUT: 'Na página \"Sobre\", é possível encontrar informações relacionadas ao objetivo do aplicativo, idealizadores e desenvolvedores do projeto.',

    ABOUT_APP: 'Sobre o aplicativo',
    ABOUT_LEAD: 'Um projeto do Departamento de Informática - UEM',
    ABOUT_TEXT:'Esse aplicativo foi desenvolvido com objetivo de disponibilizar animações sobre redes de computadores. Você pode contribuir com sugestões, correções, e ideias para novas animações por meio do e-mail lafmartimiano@uem.br.',
    ABOUT_CREATOR: 'Idealizadora do projeto',
    ABOUT_DEVELOPER: 'Desenvolvedores do projeto',
    ABOUT_ICON: 'Ícone do NetAnimations',
    ABOUT_ICON_INFO: "Ícone de Informação",
    ABOUT_UEM: "Logotipo da UEM - Universidade Estadual de Maringá",
    ABOUT_DIN: "Logotipo do DIN - Departamento de Informática",

    STEP_1: 'Primeiro passo',
    STEP_2: 'Segundo passo',
    STEP_3: 'Terceiro passo',
    STEP_4: 'Quarto passo',
    STEP_5: 'Quinto passo',

    ENCAPSULATION: 'Encapsulamento',
    DECAPSULATION: 'Desencapsulamento',

    SEGMENT: 'Segmento',
    SEGMENT_1: 'Primeiro segmento',
    SEGMENT_2: 'Segundo segmento',
    SEGMENT_3: 'Terceiro segmento',

    THREEWAY_HANDSHAKE: 'Three-way Handshake',
    THREEWAY_HANDSHAKE_DESC: 'Processo de estabelecimento de conexão TCP',
    THREEWAY_HANDSHAKE_PRESENTATION: 'O <span lang=\"en\">Three-way Handshake</span> é um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.',
    TWHS_STEP_1: 'O cliente envia um segmento (requisição) com as <span lang=\"en\">flags</span> SYN = 1 e ACK = 0',
    TWHS_ESP_SEG_1: 'Porta origem: TCP 1026<br/> Porta destino: TCP 524<br/> Nº de sequência: SEQ=0<br/> Tam. da janela: WIN=8192bytes<br/> <span lang=\"en\">Flag</span> SYN: SYN=1<br/> <span lang=\"en\">Flag</span> ACK: ACK=0<br/>',
    TWHS_STEP_2: 'O servidor responde com um segmento contendo as <span lang=\"en\">flags</span> SYN = 1 e ACK = 1, representando que a conexão foi aceita e estabelecida',
    TWHS_ESP_SEG_2: 'Porta origem: TCP 524<br/> Porta destino: TCP 1026<br/> Nº de sequência: SEQ=0<br/> Tam. da janela: WIN=32768bytes<br/> <span lang=\"en\">Flag</span> SYN: SYN=1<br/> <span lang=\"en\">Flag</span> ACK: ACK=1<br/>',
    TWHS_STEP_3: 'O cliente responde com um segmento com a <span lang=\"en\">flag</span> ACK = 1',
    TWHS_ESP_SEG_3: 'Porta origem: TCP 524<br/> Porta destino: TCP 1026<br/> Nº de sequência: SEQ=1<br/> Tam. da janela: WIN=32768bytes<br/> <span lang=\"en\">Flag</span> SYN: SYN=0<br/> <span lang=\"en\">Flag</span> ACK: ACK=1<br/>',
    TWHS_END: 'Após o término dos 3 passos, o <span lang=\"en\">Three-way Handshake</span> está completo e as duas partes podem trocar dados entre si.',
    TWHS_CLIENT_SOURCE: 'Cliente Origem',
    TWHS_IP_CLIENT: 'IP 194.153.205.36',
    TWHS_SERVER_DESTINY: 'Servidor de Destino',
    TWHS_IP_SERVER: 'IP 130.57.20.1',
    TWHS_ICON: 'Ícone da animação Three Way Handshake.',

    SEQUENCE_NUMBER_TITLE: 'Número de sequência e de reconhecimento',
    SEQUENCE_NUMBER_DESC: 'Dois dos mais importantes campos do cabeçalho TCP.',
    SEQUENCE_NUMBER_PRESENTATION_1: 'Dois dos mais importantes campos do cabeçalho TCP são o campo de número de sequência e o campo de número de reconhecimento.',
    SEQUENCE_NUMBER_PRESENTATION_2: 'Esses números são aplicados sobre a cadeia de <span lang=\"en\">bytes</span> transmitidos, e não sobre a série de segmentos transmitidos.',
    SEQUENCE_NUMBER_PRESENTATION_3: 'O número de sequência para um segmento é o número do primeiro <span lang=\"en\">byte</span> da cadeia de dados do segmento. Ex: Suponha que um processo no <span lang=\"en\">host</span> A deseja enviar uma mensagem ao processo no <span lang=\"en\">host</span> B por uma conexão TCP.',
    SEQUENCE_NUMBER_PRESENTATION_4: 'Considere que a cadeia de dados seja um arquivo de 500.000 <span lang=\"en\">bytes</span>, o MSS <span lang=\"en\">(maximum segment size)</span> seja de 1.000 <span lang=\"en\">bytes</span> e que seja atribuído o número 0 ao primeiro <span lang=\"en\">byte</span> da cadeia de dados.',
    SEQUENCE_NUMBER_PRESENTATION_5: 'Neste caso, o TCP constrói 500 segmentos a partir da cadeia de dados. O primeiro segmento recebe o número de sequência 0, o segundo 1000, o terceiro 2000 e assim sucessivamente.',
    SEQUENCE_NUMBER_PRESENTATION_6: 'Número de sequência: 0 <br/>',
    SEQUENCE_NUMBER_PRESENTATION_7: 'Já o número de reconhecimento que um host atribui a seu segmento é o número de sequência do próximo <span lang=\"en\">byte</span> que ele está aguardando. EX: O <span lang=\"en\">host</span> B está prestes a enviar os <span lang=\"en\">bytes</span> numerados de 0 a 535 ao <span lang=\"en\">host</span> A. Como acabou de receber os <span lang=\"en\">bytes</span> de 0 a 999, o <span lang=\"en\">host</span> B envia como número de reconhecimento o valor 1000 referente ao próximo <span lang=\"en\">byte</span>.',
    SEQUENCE_NUMBER_PRESENTATION_8: 'Número de sequência: 0<br> Número de reconhecimento: 1000',
    SEQUENCE_NUMBER_PRESENTATION_9: 'Ao receber o segmento com o número de reconhecimento 1000, o <span lang=\"en\">host</span> A encaminha os <span lang=\"en\">bytes</span> de 1000 a 1999 ao <span lang=\"en\">host</span> B. O <span lang=\"en\">host</span> A também solicita o próximo segmento ao <span lang=\"en\">host</span> B, informando o número 536 no campo número de reconhecimento.',
    SEQUENCE_NUMBER_PRESENTATION_10: 'Número de sequência: 1000<br> Número de reconhecimento: 536',
    SEQUENCE_NUMBER_PRESENTATION_11: 'Vamos considerar que logo em seguida o <span lang=\"en\">host</span> A encaminha o próximo segmento ao <span lang=\"en\">host</span> B, com número de sequência 2000. Como o <span lang=\"en\">host</span> A ainda não recebeu o segmento de sequência 536, ele informa novamente este valor no campo número de reconhecimento.',
    SEQUENCE_NUMBER_PRESENTATION_12: 'Número de sequência: 2000<br> Número de reconhecimento: 536',
    SEQUENCE_NUMBER_PRESENTATION_13: 'O <span lang=\"en\">host</span> B por sua vez envia o segmento com número de sequência 536 ao <span lang=\"en\">host</span> A. Como o <span lang=\"en\">host</span> B recebeu os segmentos de sequência 1000 e 2000 sucessivamente, ele envia no campo número de reconhecimento o valor 3000, que é o próximo segmento a ser enviado pelo <span lang=\"en\">host</span> A.',
    SEQUENCE_NUMBER_PRESENTATION_14: 'Dizemos que o TCP provê reconhecimentos cumulativos, pois ele reconhece todos os <span lang=\"en\">bytes</span> até o primeiro <span lang=\"en\">byte</span> que está faltando na cadeia.',
    SEQUENCE_NUMBER_PRESENTATION_15: 'Número de sequência: 536<br> Número de reconhecimento: 3000',
    SEQUENCE_NUMBER_ICON: 'Ícone da animação Número de Sequência e de reconhecimento.',

    PURE_ALOHA_TITLE: 'Protocolo Aloha Puro',
    PURE_ALOHA_DESC: 'Resolvendo problemas de alocação de canais na camada de enlace',
    PURE_ALOHA_PRESENTATION_1: 'O protocolo <span lang=\"en\">Aloha</span> puro é um protocolo de acesso aleatório para enlaces sem fio, sem intervalo e totalmente descentralizado.',
    PURE_ALOHA_PRESENTATION_2: 'Quando um quadro chega pela primeira vez, o <span lang=\"en\">host</span> imediatamente transmite o quadro inteiro ao canal <span lang=\"en\">broadcast</span>.',
    PURE_ALOHA_PRESENTATION_3: 'Usaremos um exemplo para demonstrar o funcionamento do protocolo <span lang=\"en\">Aloha</span>. Ex: O <span lang=\"en\">host</span> A deseja enviar um quadro para o <span lang=\"en\">host</span> C e o encaminha ao canal <span lang=\"en\">broadcast</span>.',
    PURE_ALOHA_PRESENTATION_4: 'Durante a transmissão, o transmissor retransmite o quadro se houver uma colisão',
    PURE_ALOHA_PRESENTATION_5: 'Agora, suponha que o <span lang=\"en\">host</span> B também deseja enviar um quadro para o <span lang=\"en\">host</span> C e o encaminha ao canal <span lang=\"en\">broadcast</span> no mesmo momento em que o quadro enviado pelo <span lang=\"en\">host</span> A é transmitido, ocasionando assim uma colisão.',
    PURE_ALOHA_PRESENTATION_6: 'Neste caso o <span lang=\"en\">host</span> A retransmite imediatamente o quadro através do canal <span lang=\"en\">broadcast</span>.',
    PURE_ALOHA_PRESENTATION_7: 'Considere p uma probabilidade, ou seja, um número entre 0 e 1.',
    PURE_ALOHA_PRESENTATION_8: 'O <span lang=\"en\">host</span> B aguardará por um tempo de transmissão de quadro e então retransmitirá o quadro com probabilidade p, ou aguardará por um outro tempo de quadro com probabilidade 1-p.',
    PURE_ALOHA_ICON: 'Ícone da animação Protocolo Aloha Puro.',

    HM_BG_CLASS: 'hm-bg-por',
    HYBRID_MODEL_TITLE: 'Modelo Híbrido',
    HYBRID_MODEL_DESC: 'Processo de encapsulamento e desencapsulamento realizado durante o envio de uma mensagem.',
    HYBRID_MODEL_PRESENTATION_1: 'O conjunto de protocolos da arquitetura de redes pode ser visto como um modelo de camadas, onde cada uma é responsável por um grupo de tarefas, fornecendo assim um conjunto de serviços bem definidos para o protocolo da camada superior.',
    HYBRID_MODEL_PRESENTATION_2: 'O modelo híbrido retira o "excesso" de camadas do modelo ISO/OSI e melhora o modelo TCP/IP. É composto por 5 camadas: Fisica, Enlace, Rede, Transporte e Aplicação. ',
    HYBRID_MODEL_PRESENTATION_3: 'A seguir, será apresentado um exemplo de funcionamento do modelo, onde um cliente de origem enviará uma mensagem para um servidor de destino. Será observado todo o processo de encapsulamento e desencapsulamento da mensagem.',
    HYBRID_MODEL_PRESENTATION_4: 'No primeiro passo de encapsulamento, a mensagem passa pela camada de <b>aplicação</b>, que fornece a interface entre os processos do usuário e a rede. Exemplos de protocolos dessa camada são: HTTP, DHCP, SMTP, FTP, POP3, SSH, DNS.',
    HYBRID_MODEL_PRESENTATION_5: 'No segundo passo de encapsulamento, a mensagem passa pela camada de <b>transporte</b>, que divide os dados em segmentos e assegura a transmissão segura dos dados. Exemplos de protocolos dessa camada são: TCP, UDP.',
    HYBRID_MODEL_PRESENTATION_6: 'No terceiro passo de encapsulamento, a mensagem passa pela camada de <b>rede</b>, que divide os segmentos em pacotes (datagramas); determina a rota e define endereços lógicos. Exemplos de protocolos dessa camada são: IP, ARP.',
    HYBRID_MODEL_PRESENTATION_7: 'No quarto passo de encapsulamento, a mensagem passa pela camada de <b>enlace</b>, que separa o pacote em quadros (<span lang=\"en\">frames</span>), controla o acesso ao meio e gerencia a transmissão, detectando e corrigindo erros na camada física. Um exemplo de protocolo dessa camada é o <span lang=\"en\">Ethernet</span>.',
    HYBRID_MODEL_PRESENTATION_8: 'Por fim, a mensagem passa pela camada <b>física</b>, que transmite os <i><span lang=\"en\">bits</span></i> de um ponto a outro e descreve os procedimentos e as características mecanicas, elétricas e funcionais.',
    HYBRID_MODEL_PRESENTATION_9: 'Após as camadas completarem o processo de encapsulamento, o <b> meio físico </b> transportará a mensagem pela rede, que não sabe quem é o destinatário final da mensagem. Dessa maneira, ela será transportada para a próxima máquina encontrada.',
    HYBRID_MODEL_PRESENTATION_10: 'Nesse exemplo, a próxima máquina encontrada não é o destinatário final da mensagem, e sim, um roteador. Assim, o roteador deverá verificar e repassar a mensagem para o próximo nó da rota',
    HYBRID_MODEL_PRESENTATION_11: 'A <b>camada física</b> do roteador encaminha a mensagem recebida para a camada de enlace.',
    HYBRID_MODEL_PRESENTATION_12: 'A <b>camada de enlace</b> analisará o quadro para averiguar se o endereço físico é o dela e se o mesmo está intacto ou se foi danificado. Se estiver danificado, a camada pedirá <b>retransmissão</b>. Caso contrário, o cabeçalho de enlace é desencapsulado e o restante é enviado para a <b>camada de rede</b>.',
    HYBRID_MODEL_PRESENTATION_13: 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b> contido no pacote para determinar se o mesmo pertence a ela. Caso não pertença, traçará a rota pelo qual o pacote irá seguir e o devolverá a camada de enlace. Caso pertança, o pacote é enviado ao destino.',
    HYBRID_MODEL_PRESENTATION_14: 'A <b>camada de enlace</b> novamente encapsulará informações que posteriormente serão usadas para avaliar a integridade das informações. Após, enviará o pacote à camada física.',
    HYBRID_MODEL_PRESENTATION_15: 'A <b>camada física</b> então enviará o pacote para o próximo nó.',
    HYBRID_MODEL_PRESENTATION_16: 'Ao chegar ao servidor de destino, o pacote percorrerá todas as camadas em sentido <i><span lang=\"en\">bottom/up</span></i>, que irão realizar o devido desencapsulamento até que uma aplicação possa ler a mensagem enviada pelo remetente.',
    HYBRID_MODEL_PRESENTATION_17: 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b> contido no pacote para determinar se o mesmo pertence a ela. Se pertencer, realizará o desencapsulamento e enviará o restante para a <b>camada de transporte</b>.',
    HYBRID_MODEL_PRESENTATION_18: 'A <b>camada de transporte</b> ao receber o segmento, realizará o desencapsulamento e enviará o restante à <b> camada de aplicação </b>.',
    HYBRID_MODEL_PRESENTATION_19: 'A <b>camada de aplicação</b> então realizará o desencapsulamento e, finalmente, poderá enviar a mensagem do remetente para a aplicação requisitada. </b>.',
    HYBRID_MODEL_ICON: 'Ícone da animação Modelo Híbrido.',

    INTRA_AS: 'Protocolo Intra-AS',
    INTRA_AS_TITLE: 'Protocolo Intra-AS: RIP',
    INTRA_AS_DESC: 'Apresentação de conceitos e procedimentos do protocolo de roteamento hierárquico intra-AS RIP.',
    INTRA_AS_PRESENTATION_1: 'Para resolver problemas de escala e autonomia administrativa do roteamento na internet, realiza-se o agrupamento de roteadores em sistemas autônomos (<span lang=\"en\">autonomous systems</span> - AS).',
    INTRA_AS_PRESENTATION_2: 'Cada AS é composto de um grupo de roteadores sob o <b>mesmo controle administrativo</b>, que rodam o <b>mesmo protocolo de roteamento</b> e dispõem de informações sobre cada um dos outros.',
    INTRA_AS_PRESENTATION_3: 'Os protocolos que trabalham dentro do AS são denominados protocolos intra-AS. Os mais utilizados são o <b>RIP (<span lang=\"en\">Routing Information Protocol</span>)</b> e o OSPF (<span lang=\"en\">Open Shortest Path First</span>).',
    INTRA_AS_PRESENTATION_4: 'O RIP é um protocolo de vetor de distâncias que usa <b>contagem de saltos como métrica de custo</b>, assim, cada enlace tem um custo 1. O custo máximo de um caminho é limitado a 15.',
    INTRA_AS_PRESENTATION_5: 'Tabelas de roteamento são trocadas entre vizinhos a cada 30 segundos aproximadamente, <b>usando mensagem de resposta RIP.</b>',
    INTRA_AS_PRESENTATION_6: 'Essas mensagens são conhecidas como <b>anúncios RIP</b>, contendo uma lista de até 25 sub-redes de destino dentro do AS, bem como as distâncias entre o remetente e cada uma dessas sub-redes.',
    INTRA_AS_PRESENTATION_7: 'Cada roteador mantém uma tabela RIP denominada <b>tabela de roteamento</b>, que contém o vetor de distâncias.',
    INTRA_AS_PRESENTATION_8: 'Suponha que o roteador <b>1b</b> deseja alcançar a rede <b>X</b>. Ele pode chegar nela por meio de 1a ou 1c, conforme mostra a animação.',
    INTRA_AS_PRESENTATION_9: 'Para que isso ocorra, <b>1b</b> precisa saber dessa informação. A seguir é apresentada a tabela desse roteador, que a princípio não possui informações referentes ao roteador 1c.',
    INTRA_AS_PRESENTATION_10: 'Caso <b>1b</b> envie dados para a sub-rede <b>X</b>, o caminho realizado é o exibido a seguir.',
    INTRA_AS_PRESENTATION_11: 'Agora, observe na sequência a tabela de roteamento de <b>1c</b>. Procure notar que, para esse roteador, alcançar a sub-rede <b>X</b> são necessários apenas 2 saltos.',
    INTRA_AS_PRESENTATION_12: 'Suponha que 30 segundos mais tarde, <b> 1b </b> recebe de <b>1c</b> um anúncio que indica que a sub-rede <b>x</b> está apenas 2 saltos do roteador <b>1c</b>. Observe as alterações na tabela de <b>1b</b>.',
    INTRA_AS_PRESENTATION_13: 'Dessa maneira, quando <b>1b</b> necessitar se comunicar com a sub-rede <b>X</b>, o caminho é o apresentado a seguir.',
    INTRA_AS_ICON: 'Ícone da animação Protocolo Intra-A.S.',

    INTER_AS: 'Protocolos Inter-AS',
    INTER_AS_TITLE: 'Protocolo Inter-AS: BGP',
    INTER_AS_DESC: 'Apresentação de conceitos e procedimentos do protocolo de roteamento hierárquico inter-AS BGP.',
    INTER_AS_PRESENTATION_1: 'Para resolver problemas de escala e autonomia administrativa do roteamento na internet, realiza-se o agrupamento de roteadores em sistemas autônomos (<span lang=\"en\">autonomous systems</span> - AS).',
    INTER_AS_PRESENTATION_2: 'Cada AS é composto de um grupo de roteadores sob o <b>mesmo controle administrativo</b>, que rodam o <b>mesmo protocolo de roteamento</b> e dispõem de informações sobre cada um dos outros.',
    INTER_AS_PRESENTATION_3: 'A versão 4 do <b>Protocolo de Roteador de Borda</b> (<span lang=\"en\">Border Gateway Protocol</span> - BGP) é o padrão para roteamento entre sistemas autônomos na Internet.',
    INTER_AS_PRESENTATION_4: 'O BGP provê a cada AS meio de: obter de ASs vizinhos informações de atingibilidade de sub-redes; propagar essas informação aos roteadores internos ao AS; determinar rotas "boas" para sub-redes com base na informação de atingibilidade e na política do AS',
    INTER_AS_PRESENTATION_5: 'Nessa animação, temos como exemplo os sistemas autônomos <b>AS1</b> e <b>AS2</b>, cada qual com seu próprio protocolo de roteamento INTRA-AS, ou seja, eles podem ser diferentes em cada AS.',
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
    INTER_AS_PRESENTATION_16: 'O BGP ainda possui outros atributos importantes, como o <b><span lang=\"en\">AS-PATH</span></b>. Este atributo contém informações dos ASs pelos quais passou o anúncio para o prefixo. Esse atributo é utilizado para detectar e evitar <b><span lang=\"en\">looping</span> de anúncios</b> e também ao <b>escolher entre vários caminhos</b> para o mesmo prefixo.',
    INTER_AS_PRESENTATION_17: 'Suponha, no exemplo tratado, que há um prefixo <b>X</b> de outro AS, alcançado por AS2 pelo roteador de borda <b>2d</b>. Desse modo, AS2 anunciará o prefixo <b>X</b> para AS1, onde dessa maneira, seu <b>ASPATH</b> seria AS2.',
    INTER_AS_PRESENTATION_18: 'Outro atributo é o <b><span lang=\"en\">NEXT-HOP</span></b>, que é utilizado para o roteador poder <b>configurar sua tabela de repasse</b> adequadamente. Para conhecer mais sobre esse atributo, veja a versão extendida dessa animação no repositório de animações, em <b>http://din.uem.br/~animanet/pages/hierarchicalRouting</b>.',
    INTER_AS_ICON: 'Ícone da animação Protocolo Inter-A.S.',

    ETHERNET_TITLE: 'Protocolo Ethernet',
    ETHERNET_DESC: 'Funcionamento do protocolo útilizado em LANs com fio.',
    ETHERNET_PRESENTATION_1: 'O <b><span lang=\"en\">Ethernet</span></b> é um protocolo da <b>camada de enlace</b>, que é capaz de permitir o acesso a um canal <i><span lang=\"en\">broadcast</span></i>. Ele necessita de protocolo de acesso múltiplo, sendo o mais comum o <b>CSMA/CD (<span lang=\"en\">Carrier Sense Multiple Access with Collision Detection</span>)</b>.',
    ETHERNET_PRESENTATION_2: 'Numa rede que utiliza este protocolo, cada adaptador executa o protocolo CSMA/CD sem coordenação explícita com os demais adaptadores <span lang=\"en\">Ethernet</span>.',
    ETHERNET_PRESENTATION_3: 'Nesta animação será ilustrado o funcionamento do protocolo por meio de um exemplo com <b>três <span lang=\"en\">hosts</span></b>. Considere que o <b><span lang=\"en\">host A</span></b> deseja enviar um quadro para o <b><span lang=\"en\">host</span> C</b> através do canal broadcast.',
    ETHERNET_PRESENTATION_4: 'O adaptador do <b><span lang=\"en\">host</span> A</b> receberá o datagrama da camada de rede e prepara um quadro <b><span lang=\"en\">Ethernet</span></b> e o insere no <b><span lang=\"en\">buffer de saída</span></b> do adaptador.',
    ETHERNET_PRESENTATION_5: 'Como o protocolo CSMA/CD não utiliza "compartimentos", um adaptador pode começar a transmitir a qualquer momento, no qual é capaz de perceber se outros adaptadores estão transmitindo e detectar colisões, medindo os níveis de tensão antes e durante a transmissão.',
    ETHERNET_PRESENTATION_6: 'Suponha que antes do <b><span lang=\"en\">host</span> A</b> iniciar sua transmissão, o <b><span lang=\"en\">host</span> B</b> decide enviar um quadro para o <b><span lang=\"en\">host</span> C</b>. Como ele detecta o meio livre, envia "na frente" do <b><span lang=\"en\">host</span> A</b>.',
    ETHERNET_PRESENTATION_7: 'Dessa maneira, antes de iniciar sua transmissão, o <b><span lang=\"en\">host</span> A</b> identifica que o <b><span lang=\"en\">Host</span> B</b> está enviando um quadro. Assim, o <b><span lang=\"en\">Host</span> A</b> aborta sua transmissão.',
    ETHERNET_PRESENTATION_8: 'Este processo de "ouvir" antes de enviar é denominado <b>detecção de portadora</b>. Durante uma transmissão, o adaptador monitora a presença de energia vinda de outros adaptadores. Este processo de "ouvir" enquanto "fala" é denominado <b>detecção de colisão</b>.',
    ETHERNET_PRESENTATION_9: 'Dando continuidade ao exemplo, ao detectar que o canal está livre, o <b><span lang=\"en\">host</span> A</b> encaminha o quadro ao canal <span lang=\"en\">broadcast</span>.',
    ETHERNET_PRESENTATION_10: 'Caso o <b><span lang=\"en\">Host</span> A</b> não detecte nenhuma sinal vindo de outros adaptadores, ele considera que o quadro foi entregue.',
    ETHERNET_PRESENTATION_11: 'Vamos considerar agora que o <b><span lang=\"en\">Host</span> A</b> esteja enviando um quadro para o <b><span lang=\"en\">host</span> C</b>.',
    ETHERNET_PRESENTATION_12: 'Nesse caso, assuma que antes do quadro enviado passar pelo <b><span lang=\"en\">host</span> B</b>, esse <span lang=\"en\">host</span> deseja iniciar uma transmissão.',
    ETHERNET_PRESENTATION_13: 'Ao detectar a presença de energia vinda de outro <span lang=\"en\">host</span>, o <b><span lang=\"en\">host</span> B</b> aborta a sua transmissão.',
    ETHERNET_PRESENTATION_14: 'Para garantir que todos os <span lang=\"en\">hosts</span>, inclusive o <b><span lang=\"en\">host</span> A</b>, estejam cientes da colisão, o <b><span lang=\"en\">host</span> B</b> envia um sinal de reforço de colisão de <b>48 <span lang=\"en\">bits</span></b>.',
    ETHERNET_PRESENTATION_15: 'Após abortar a transmissão, os <span lang=\"en\">hosts</span> entram em fase de <b><span lang=\"en\">backoff</span> exponencial</b>. Nesta fase, os <span lang=\"en\">hosts</span> aguardam um tempo aleatório, antes de tentar uma retransmissão.',
    ETHERNET_PRESENTATION_16: 'Dando sequencia ao exemplo, o <b><span lang=\"en\">host</span> A</b> inicia a retransmissão ao aguardar um tempo aleatório.',
    ETHERNET_PRESENTATION_17: 'Também após aguardar um tempo aleatório, o <b><span lang=\"en\">host</span> B</b> inicia a retransmissão.',
    ETHERNET_PRESENTATION_18: 'Caso o quadro não seja enviado em no máximo <b>dezesseis tentativas</b>, ele é descartado.',
    ETHERNET_ICON: 'Ícone da animação Protocolo Ethernet.',
  });

  $translateProvider.preferredLanguage('pt-br');

  //$translateProvider.useCookieStorage();

});
