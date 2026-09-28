import portrait from '../assets/minha-foto-sem-fundo.png'
import outletAward from '../assets/premio-tomada-inteilgente.jpeg'
import outletCeremony from '../assets/permio-fotos-tomada.jpeg'
import hackathon from '../assets/hackathon-universidade.jpeg'
import battery from '../assets/hion-battery.jpeg'
import code from '../assets/codigos.jpeg'

export default {
  portrait,
  hackathon,
  outletPhotos: [
    { src: outletAward, alt: 'Reconhecimento e certificados da Tomada Inteligente em Santo André', caption: 'Reconhecimento da Tomada Inteligente · Santo André, 2023' },
    { src: outletCeremony, alt: 'Equipe da Tomada Inteligente na premiação da Semana Municipal de Ciência e Tecnologia de 2023', caption: 'A equipe no palco · Semana Municipal de Ciência e Tecnologia' }
  ],
  icons: { 'C': 'c', 'JavaScript': 'javascript', 'C#': 'csharp', 'TypeScript': 'typescript', 'Python': 'python', 'Node.js': 'nodejs', 'Vue.js': 'vuejs', 'React': 'react', 'PostgreSQL': 'postgresql', 'Docker': 'docker', 'Kubernetes': 'kubernetes', 'Linux': 'linux' },
  email: 'evertonmarussi@gmail.com',
  whatsapp: { number: '5511953632306', display: '+55 (11) 95363-2306', message: 'Olá, Everton! Vim pelo seu portfólio e gostaria de conversar sobre um projeto. Podemos falar?' },
  github: '',
  linkedin: '',
  projects: [
    { id: '01', category: 'IOT / AUTOMAÇÃO INDUSTRIAL', title: 'Tomada Inteligente', subtitle: 'Tornando a energia visível.', description: 'Protótipo embarcado para telemetria de energia elétrica residencial. Desenvolvido como meu TCC de Automação Industrial na ETEC Júlio de Mesquita e apresentado na Semana Municipal de Ciência e Tecnologia de 2023.', tags: ['Sistemas embarcados', 'Telemetria', 'Hardware + software'], image: outletAward, imageLabel: 'Premiação da Tomada Inteligente em Santo André', detail: 'O projeto conecta eletrônica e software para monitorar o consumo residencial de energia elétrica. Conquistou o segundo lugar na competição de 2023 em Santo André, com reconhecimento institucional e apoio envolvendo SEBRAE, UFABC e Câmara Municipal.', visual: 'energy' },
    { id: '02', category: 'INTELIGÊNCIA ARTIFICIAL / SÉRIES TEMPORAIS', title: 'Previsão da vida útil de baterias', subtitle: 'Aprendendo com o tempo.', description: 'Aprendizado profundo aplicado à previsão da vida útil de baterias industriais, utilizando redes neurais LSTM para modelar dados sequenciais e apoiar a análise do comportamento das baterias.', tags: ['Python', 'LSTM', 'Séries temporais'], image: battery, imageLabel: 'Ambiente de desenvolvimento da HION e plataforma de gestão de baterias', detail: 'Meu trabalho inclui análise de dados e implementação de redes neurais profundas para previsão de séries temporais. Esta aplicação tem como foco a vida útil de baterias industriais. Métricas de desempenho e materiais de pesquisa serão adicionados quando estiverem disponíveis para publicação.', visual: 'battery' },
    { id: '03', category: 'ENGENHARIA DE SOFTWARE / HION', title: 'Sistemas corporativos conectados', subtitle: 'De serviços a soluções.', description: 'Desenvolvimento full stack de aplicações corporativas e industriais, conectando processos de ERP, desenvolvimento de SaaS, dispositivos IoT e monitoramento operacional por meio de serviços distribuídos.', tags: ['Node.js', 'Vue / React', 'HTTP / gRPC', 'Docker'], image: code, imageLabel: 'Ambiente de desenvolvimento de software com código e monitoramento de infraestrutura', detail: 'Na HION, contribuo com requisitos, regras de negócio, modelagem de dados, arquitetura em camadas, contratos de APIs, implementação, implantação e monitoramento em produção. Minha experiência inclui aplicações web, para computadores e dispositivos móveis. Esta apresentação reúne experiências profissionais, sem representar um único produto disponível publicamente.', visual: 'systems' }
  ],
  stack: [
    { name: 'Linguagens', note: 'A base da construção.', items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'C'] },
    { name: 'Aplicações e dados', note: 'Da interface à persistência.', items: ['Node.js', 'Vue.js', 'React', 'PostgreSQL', 'HTTP / gRPC'] },
    { name: 'Infraestrutura', note: 'Feita para operar.', items: ['Docker', 'Kubernetes', 'Linux', 'Microsserviços', 'DevOps / SecOps'] },
    { name: 'Inteligência e dispositivos', note: 'Além da tela.', items: ['LSTM', 'Análise de séries temporais', 'IoT', 'Sistemas embarcados', 'Telemetria'] }
  ]
}
