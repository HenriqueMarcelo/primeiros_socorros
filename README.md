# Socorro na Escola

Guia rápido de primeiros socorros pensado para professores e outros profissionais do ambiente escolar. O site reúne situações comuns em uma interface simples, responsiva e fácil de consultar pelo celular.

> **Importante:** este projeto oferece conteúdo educativo para os primeiros minutos de uma ocorrência. Ele não substitui treinamento prático, avaliação médica ou as orientações dos serviços de emergência. Em situações graves, ligue para o **SAMU pelo número 192**.

## Funcionalidades

- Interface desenvolvida primeiro para celulares;
- busca por nome ou palavra-chave;
- filtros por categoria;
- oito situações comuns de primeiros socorros;
- orientações curtas e alertas de gravidade;
- vídeos demonstrativos no YouTube;
- botão de acesso rápido ao SAMU 192;
- suporte a navegação por teclado e redução de animações;
- publicação automática no GitHub Pages.

## Situações disponíveis

- Engasgo em crianças;
- convulsão;
- torção ou entorse;
- suspeita de fratura;
- engasgo em adultos;
- hemorragia;
- sangramento nasal;
- quedas.

## Tecnologias

- HTML5;
- Tailwind CSS carregado por CDN;
- CSS personalizado;
- JavaScript puro, sem frameworks ou dependências de produção.

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── .gitignore
├── .nojekyll
├── index.html
├── styles.css
├── script.js
└── server.js
```

O arquivo `server.js` é utilizado somente para testes na rede local e está ignorado pelo Git.

## Executar localmente

É possível abrir o arquivo `index.html` diretamente no navegador. Para testar em outros dispositivos conectados à mesma rede Wi-Fi, use o servidor local:

```bash
node server.js
```

O terminal mostrará os endereços disponíveis. No celular, abra o endereço iniciado pelo IP da rede local, por exemplo:

```text
http://192.168.1.7:4173
```

O endereço pode mudar conforme a rede utilizada. Mantenha o terminal aberto durante o teste e pressione `Ctrl+C` para encerrar o servidor.

## Publicar no GitHub Pages

O projeto possui um workflow que publica o site automaticamente após cada `push` para a branch `main`.

1. Crie um repositório no GitHub;
2. envie os arquivos deste projeto para a branch `main`;
3. no repositório, abra **Settings → Pages**;
4. em **Build and deployment**, selecione **GitHub Actions** como fonte;
5. acompanhe a publicação pela aba **Actions**.

Ao concluir, o endereço publicado aparecerá na execução do workflow e na seção **Pages** do repositório.

## Referências de saúde

As orientações foram redigidas com base em referências como:

- [SAMU 192 — Ministério da Saúde](https://www.gov.br/saude/pt-br/composicao/saes/samu-192);
- [Primeiros Socorros — SAMU Ceará](https://www.samu.ce.gov.br/primeiros-socorros/);
- [Biblioteca Virtual em Saúde — Ministério da Saúde](https://bvsms.saude.gov.br/sangramento-nasal/);
- [Diretrizes de RCP e cuidados cardiovasculares de emergência — American Heart Association](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines);
- [Primeiros socorros para convulsões — Epilepsy Foundation](https://www.epilepsy.com/recognition/first-aid-resources).

Protocolos de saúde podem ser atualizados. Antes de utilizar o projeto institucionalmente, o conteúdo deve ser revisado por um profissional de saúde responsável e alinhado ao plano de emergência da escola.

## Contribuição

Sugestões e correções podem ser enviadas por meio de issues ou pull requests. Alterações nas orientações médicas devem indicar uma fonte oficial ou diretriz clínica atualizada.
