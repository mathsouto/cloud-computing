//Header sticky
window.addEventListener("scroll",() => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 70)
})

//Menu mobile
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    // const body = document.body;
    nav.classList.toggle('active'); //Adiciona caso não tenha, remova caso tenha
    // body.classList.toggle('no-scroll'); //Alterna o menu e bloqueia/desbloqueia o scroll
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Accordion click
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

//Scroll reveal
ScrollReveal().reveal('.titleOne, .subtitleOne, .imgTwo, .textsTwo, .leftBox, .rightBox, .accordion-container, .cloud-content-one h1, .cloud-paragraph-one, .cloud-paragraph-three, .cloud-paragraph-two, .teamTitle, .container-team, .formLeft, .formRight', {
    duration: 2000,
    distance: '12.6%'
});
ScrollReveal().reveal('.titleOne, .imgTwo, .leftBox, .formLeft, .cloud-content-one h1, .cloud-paragraph-one, .cloud-paragraph-three', {
    origin: 'left'
});
ScrollReveal().reveal('.subtitleOne, .textsTwo, .rightBox, .formRight, .cloud-paragraph-two', {
    origin: 'right'
});
ScrollReveal().reveal('.accordion-container, .teamTitle', {
    origin: 'top'
});
ScrollReveal().reveal('.container-team', {
    origin: 'bottom'
});

// Tradutor
const translations = {
    "pt-BR": {
      home: "Início",
      cloud: "Cloud",
      team: "Equipe",
      titleOne: "O que é",
      subtitleOne: "Descubra tudo sobre",
      labelImg: "O que é essa tecnologia?",
      titleTwo: "O que é Cloud Computing?",
      pTwoOne: "A computação em nuvem é a entrega de serviços de computação, como armazenamento, servidores, bancos de dados, redes e software, pela Internet. Em vez de gerenciar e manter data centers físicos, as empresas usam grandes provedores de serviços em nuvem, como AWS, Azure e Google Cloud, para acessar recursos essenciais sob demanda e pagar apenas pelo que realmente usam de forma eficiente e eficaz.",
      pTwoTwo: "Os principais modelos de serviço são IaaS (Infraestrutura como Serviço), PaaS (Plataforma como Serviço) e SaaS (Software como Serviço). Segurança, backup e recuperação de dados são responsabilidades compartilhadas entre o provedor e o usuário. Esses modelos oferecem vários níveis de controle, customização e gerenciamento, permitindo que as empresas escolham o que melhor se adapta às suas necessidades.",
      buttonTwo: "Leia Mais",
      cardOne: "A AWS é o maior provedor de nuvem, oferecendo soluções escaláveis ​​de computação, armazenamento e IA para empresas em todo o mundo.",
      cardTwo: "O Google Cloud Platform (GCP) é um importante provedor de nuvem, que oferece soluções escalonáveis ​​de computação, armazenamento e análise de dados.",
      cardThree: "O Microsoft Azure é uma plataforma de nuvem líder, que fornece serviços escalonáveis ​​de computação, armazenamento e IA para empresas em todo o mundo.",
      cardLearnMore: "Leia Mais",
      titleFour: "Tópicos",
      textFour: "Alguns tópicos sobre Cloud Computing",
      cloudTextOne: "Cloud Computing é uma tecnologia que permite o acesso e a utilização de recursos computacionais, como servidores, armazenamento, redes e aplicações, pela internet. Diferentemente do modelo tradicional, que exige investimentos em hardware e manutenção local, a computação em nuvem permite o acesso remoto a esses recursos de forma rápida, flexível e escalável. Isto significa que qualquer pessoa ou organização com ligação à Internet pode aceder a serviços que vão desde o simples armazenamento até soluções avançadas como inteligência artificial e análise de dados, sem necessidade de instalar ou manter sistemas localmente. A essência da computação em nuvem é usar uma rede de servidores mantida por provedores especializados, como Amazon Web Services (AWS), Google Cloud Platform (GCP) e Microsoft Azure. Esses provedores possuem data centers em diversas regiões do mundo, equipados com servidores robustos e sistemas avançados de segurança, monitoramento e manutenção. Esses centros funcionam como uma infraestrutura centralizada, oferecendo serviços de alto desempenho e disponíveis globalmente.<br><br>Os serviços em nuvem são divididos em três categorias principais: infraestrutura, plataforma e software. Esses modelos permitem que empresas e usuários acessem recursos pela internet sem a necessidade de adquirir e gerenciar hardware. Um modelo oferece infraestrutura de TI completa, incluindo servidores e armazenamento, com pagamento baseado no uso. Outro modelo fornece plataformas de desenvolvimento para criar, executar e gerenciar aplicações sem lidar com a infraestrutura subjacente. O modelo de software oferece acesso a aplicativos prontos para uso, como e-mail e ferramentas de edição de documentos, por meio de um navegador, sem necessidade de instalação ou manutenção. Esses modelos proporcionam flexibilidade, permitindo que as organizações ajustem suas operações de acordo com as necessidades.",
      cloudTextTwo: "Os modelos de implementação incluem nuvens públicas, privadas e híbridas. Na nuvem pública, a infraestrutura é compartilhada entre os clientes e acessível via internet, com segurança e gerenciamento fornecidos pelo provedor; é econômico e escalonável, mas oferece menos controle sobre os dados. A nuvem privada é exclusiva de uma organização, proporcionando total controle e segurança, ideal para dados sensíveis. A nuvem híbrida combina os dois modelos, utilizando a nuvem privada para dados críticos e a nuvem pública para outras tarefas, equilibrando segurança e economia.<br><br>Os benefícios da nuvem incluem escalabilidade, permitindo que as empresas ajustem os recursos com base na demanda, e redução de custos, já que os recursos são pagos de acordo com o uso, sem necessidade de infraestrutura física. Ele também fornece mobilidade, acesso remoto e atualizações automáticas de software. No entanto, a computação em nuvem também apresenta desafios, como a necessidade de confiar na segurança do fornecedor, especialmente para dados sensíveis. A dependência de uma ligação estável à Internet e o controlo limitado sobre a infraestrutura também podem ser desvantagens, especialmente na nuvem pública.",
      cloudTextThree: "O futuro da computação em nuvem é promissor, à medida que mais empresas reconhecem seu potencial para transformar os cenários tecnológicos. Com o avanço acelerado da digitalização e a crescente necessidade de flexibilidade e eficiência, a computação em nuvem se torna central em diversos setores, incluindo saúde, educação, indústria e comércio. Tecnologias emergentes como a Internet das Coisas (IoT), Inteligência Artificial (IA) e Machine Learning (ML) dependem cada vez mais da infraestrutura de nuvem para processar e analisar grandes volumes de dados em tempo real, permitindo a criação de serviços inteligentes que respondem proativamente às necessidades dos usuários. Além disso, a computação de borda ganha relevância, possibilitando o processamento de dados mais próximo da fonte, o que reduz a latência e melhora a eficiência, integrando-se perfeitamente à nuvem. Isso torna a nuvem ainda mais poderosa, pois permite que dispositivos conectados, como sensores e veículos autônomos, processem e compartilhem dados de maneira rápida e segura.<br><br>A segurança na nuvem continua a evoluir, com novos recursos em criptografia, autenticação e monitoramento em tempo real, oferecendo maior proteção contra ameaças cibernéticas e acessos não autorizados. Como resultado, as empresas estão cada vez mais confiantes em migrar até mesmo dados sensíveis para a nuvem, consolidando-a como um ambiente seguro e confiável. Paralelamente, com a evolução das legislações de proteção de dados, como o GDPR na Europa e a LGPD no Brasil, os provedores de nuvem estão aprimorando medidas de conformidade para atender aos requisitos regulatórios globais. Por fim, a computação em nuvem não só transforma a forma como as empresas operam, mas também democratiza o acesso à tecnologia avançada, permitindo que organizações de todos os tamanhos, desde startups até grandes corporações, compitam em condições iguais. Espera-se que essa tendência de crescimento e inovação continue nos próximos anos, com novas soluções sendo desenvolvidas e adotadas rapidamente. Assim, a nuvem permanece uma tecnologia revolucionária, moldando o futuro digital e possibilitando que indivíduos e empresas aproveitem o poder computacional sem os custos e desafios de gerenciar sua própria infraestrutura.",
      iaasTitle: "O que é IaaS? (Infraestrutura como serviço)",
      iaasText: "IaaS (Infraestrutura como Serviço) é um modelo de computação em nuvem que fornece recursos de infraestrutura de TI sob demanda, incluindo servidores, armazenamento, redes e outros componentes fundamentais para a execução de aplicativos e serviços. Em vez de investir em hardware físico, os usuários podem alugar esses recursos em tempo real de provedores de nuvem, permitindo flexibilidade e economia de custos.",
      paasTitle: "O que é PaaS? (Plataforma como serviço)",
      paasText: "PaaS (Platform as a Service) é um modelo de computação em nuvem que oferece uma plataforma completa para desenvolver, executar e gerenciar aplicativos sem a necessidade de lidar com a infraestrutura subjacente. Com o PaaS, os desenvolvedores podem criar aplicativos usando ferramentas, bibliotecas, estruturas e linguagens de programação fornecidas pelo provedor de nuvem, simplificando o processo de desenvolvimento.",
      saasTitle: "O que é SaaS? (Software como serviço)",
      saasText: "SaaS (Software as a Service) é um modelo de computação em nuvem que fornece aplicativos de software pela Internet por meio de assinatura. Com o SaaS, os usuários acessam o software por meio de um navegador web, eliminando a necessidade de instalações ou manutenção. O provedor de nuvem gerencia a infraestrutura, as atualizações e a segurança, permitindo que as empresas reduzam custos e se concentrem nas atividades principais.",
      teamTitle: "Nossa equipe",
      teamText: "Nossos especialistas estão orgulhosos.<br>Essas pessoas criam designs impressionantes e têm ideias malucas.",
      formTitle: "Você tem alguma sugestão, crítica ou elogio?<br><br>Mande para nós!",
      userOne: "Desenvolvedor Full-Stack",
      userTwo: "Analista",
      userThree: "Analista",
      userFour: "Analista Segurança Informação",
      userFive: "Analista",
      formName: "Nome *",
      formLastName: "Sobrenome *",
      formEmail: "Email *",
      formMessage: "Mensagem *",
      formSubmit: "Enviar",
      textFooter: "Este site é um projeto desenvolvido na Universidade Anhembi Morumbi, com o objetivo de explicar de forma didática o conceito de Cloud Computing.",
    }
  };

  let currentLanguage = "en"; // Idioma inicial

  function switchLanguage() {
    currentLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR";
    updateContent();
  }
  
  function updateContent() {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {
      const translationKey = element.getAttribute("data-translate");
  
      if (currentLanguage === "pt-BR" && translations["pt-BR"][translationKey]) {
        element.innerHTML = translations["pt-BR"][translationKey];
      } else {
        element.innerHTML = element.getAttribute("data-original") || element.innerHTML;
      }
    });
  }
  
  // Armazene o texto original na primeira execução
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
      element.setAttribute("data-original", element.innerHTML);
    });
  });
  document.getElementById("language-toggle").addEventListener("click", switchLanguage);