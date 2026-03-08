# Agência ALFA

Site institucional da Agência ALFA criado para apresentação de serviços e captação de clientes.

O projeto foi desenvolvido como uma landing page moderna, responsiva e instalável como PWA, permitindo acesso fácil em diferentes dispositivos.

## 🌐 Projeto online
https://agenciaalfaassessoria.netlify.app/

## 📌 Visão geral
O site apresenta a empresa, seus serviços e canais de contato, com foco em conversão comercial e compatibilidade com diferentes navegadores e dispositivos.

## 🚀 Recursos
- Interface bilíngue (Português e Inglês)
- Tema claro e escuro com persistência local
- Botões de WhatsApp com mensagem geral e mensagens específicas por serviço
- Layout responsivo (desktop, tablet e mobile)
- Progressive Web App (PWA) instalável
- Manifesto, service worker e ícones do aplicativo
- Suporte a instalação com fallback para iOS e navegadores sem suporte

## 🛠 Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- Progressive Web App (PWA)
- Netlify (deploy)

## 📂 Estrutura do projeto

index.html  
Estrutura principal do site.

styles.css  
Layout, responsividade, temas e componentes visuais.

script.js  
Controle de idioma, tema, serviços, links do WhatsApp e instalação do aplicativo.

manifest.webmanifest  
Configuração do Progressive Web App.

service-worker.js  
Cache offline e estratégia de carregamento.

serve-local.ps1  
Servidor local simples para testes via HTTP.

icons/  
Ícones utilizados pelo PWA e atalhos do dispositivo.

## ▶ Execução local

Para testar o projeto localmente com recursos de PWA ativos:

```powershell
.\serve-local.ps1
