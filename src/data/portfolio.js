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
    { src: outletAward, alt: 'Smart Outlet award recognition and certificates in Santo André', caption: 'Recognition for Smart Outlet · Santo André, 2023' },
    { src: outletCeremony, alt: 'Smart Outlet team at the 2023 Municipal Science and Technology Week awards ceremony', caption: 'The team on stage · Municipal Science and Technology Week' }
  ],
  icons: { 'C': 'c', 'JavaScript': 'javascript', 'C#': 'csharp', 'TypeScript': 'typescript', 'Python': 'python', 'Node.js': 'nodejs', 'Vue.js': 'vuejs', 'React': 'react', 'PostgreSQL': 'postgresql', 'Docker': 'docker', 'Kubernetes': 'kubernetes', 'Linux': 'linux' },
  email: 'evertonmarussi@gmail.com',
  github: '',
  linkedin: '',
  projects: [
    { id: '01', category: 'IOT / INDUSTRIAL AUTOMATION', title: 'Smart Outlet', subtitle: 'Making energy visible.', description: 'An embedded prototype for residential electricity telemetry. Developed as my Industrial Automation capstone at ETEC Júlio de Mesquita and presented at the 2023 Municipal Science and Technology Week.', tags: ['Embedded systems', 'Telemetry', 'Hardware + software'], image: outletAward, imageLabel: 'Smart Outlet award recognition in Santo André', detail: 'The project connects electronics and software to monitor residential electricity use. It earned second place at the 2023 competition in Santo André, with institutional recognition and support involving SEBRAE, UFABC and the City Council.', visual: 'energy' },
    { id: '02', category: 'ARTIFICIAL INTELLIGENCE / TIME SERIES', title: 'Battery life prediction', subtitle: 'Learning from time.', description: 'Deep Learning applied to industrial battery life prediction, using LSTM neural networks to model sequential data and support analysis of battery behavior.', tags: ['Python', 'LSTM', 'Time series'], image: battery, imageLabel: 'HION development workspace and battery management platform', detail: 'My work includes data analysis and the implementation of deep neural networks for time-series prediction. This application focuses on industrial battery life. Performance metrics and research artifacts will be added when available for publication.', visual: 'battery' },
    { id: '03', category: 'SOFTWARE ENGINEERING / HION', title: 'Connected business systems', subtitle: 'From services to solutions.', description: 'Full-stack development across corporate and industrial applications, connecting ERP workflows, IoT devices and operational monitoring through distributed services.', tags: ['Node.js', 'Vue / React', 'HTTP / gRPC', 'Docker'], image: code, imageLabel: 'Software development workspace with code and infrastructure monitoring', detail: 'At HION, I contribute across requirements, business rules, data modeling, layered architecture, API contracts, implementation, deployment and production monitoring. My experience includes web, desktop and mobile applications. This overview groups professional experience; it does not imply a single publicly available product.', visual: 'systems' }
  ],
  stack: [
    { name: 'Languages', note: 'The building blocks.', items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'C'] },
    { name: 'Applications & data', note: 'From interface to persistence.', items: ['Node.js', 'Vue.js', 'React', 'PostgreSQL', 'HTTP / gRPC'] },
    { name: 'Infrastructure', note: 'Built to run.', items: ['Docker', 'Kubernetes', 'Linux', 'Microservices', 'DevOps / SecOps'] },
    { name: 'Intelligence & devices', note: 'Beyond the screen.', items: ['LSTM', 'Time-series analysis', 'IoT', 'Embedded systems', 'Telemetry'] }
  ]
}
