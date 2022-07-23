# 🧑‍💻 Sistema de Gerenciamento para Comércios 🧑‍💻

## 📍 Escopo:

Este sistema tem como objetivos principais gerenciar o fluxo de um comércio, como adegas, bares, lounges, restaurantes ou qualquer estabelecimento com modelos de negócios parecidos. 

Os principais focos desta aplicação são:

* Vendas;
* Marketing;
* Marketplace;
* Publicidade;
* Delivery;

## 📍 Estrutura do projeto e aplicação:

* **💻 Client**: Um cliente web com o **framework ``NextJS``**, que tem como objetivo mostrar os produtos, serviços e também fornece ao vendedor a possibilidade de vender on-line.

* **🔨 API**: Um painel administrativo/gerenciador de conteúdo com o **headless CMS ``Strapi``**.

## 📍 Pré-requisitos:

### NodeJS & Yarn:
 
**⚠️ Certifique que você tenha o NodeJS e o Yarn instalados na sua máquina com a última versão LTS. ⚠️** 

- **NodeJS**: Preferencialmente a última versão.
- **Yarn**: Preferencialmente a última versão.

### 📍 Váriáveis de ambiente:

**⚠️ Certifique-se de ter as variáveis env corretas para cada parte ⚠️:**

- Strapi (example: `./api/.env.example`):
  - `STRAPI_ADMIN_CLIENT_URL=<url-of-nextjs>`
  - `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<a-random-token>`

- Next.js (está na: `./client/.env.development`):
  - `NEXT_PUBLIC_API_URL=<url-of-strapi>`
  - `PREVIEW_SECRET=<the-same-random-token-as-for-strapi>`

## 📍 Inicie o Strapi (API):

 1. Navegue até a pasta `../foodadvisor/api` executando `cd api` no seu terminal.
 2. Em seguida, execute o seguinte comando na pasta `./foodadvisor/api`:
 3. Digite: ``` yarn && yarn seed && yarn develop ``` 
 
**⚠️ Isso instalará as dependências, preencherá seu aplicativo com dados e executará seu servidor. Você pode executar esses comandos separadamente ⚠️**.

## 📍 Inicie o NextJS (Client):

 1. Navegue até a pasta `../foodadvisor/client` executando ``cd client`` no seu terminal.
 2. Em seguida, execute o seguinte comando na pasta `../foodadvisor/client`:
 3. Digite: ``` yarn && yarn dev ``` 
 
**⚠️ Isso instalará as dependências, preencherá seu aplicativo com dados e executará seu servidor. Você pode executar esses comandos separadamente ⚠️**.

## 📍 Visão geral dos recursos do Strapi:

### Para o comerciante as principais funcionalidades do CMS são:

**Um editor intuitivo e mínimo** O editor permite que você insira blocos dinâmicos de conteúdo. É 100% de código aberto e totalmente extensível.
<br />
**Biblioteca de mídia** Faça upload de imagens, vídeos ou qualquer arquivo e corte e otimize seus tamanhos, sem perda de qualidade.
<br />
**Gerenciamento de conteúdo flexível** Crie qualquer tipo de categoria, seção, formato ou fluxo para se adaptar às suas necessidades.
<br />
**Classificar e filtrar** Classificação e filtragem integradas: você pode gerenciar milhares de entradas sem esforço.
<br />
**Interface amigável** A interface de código aberto mais amigável do mercado.
<br />
**Otimizado para SEO** Gerencie facilmente seus metadados de SEO com um campo repetível e use nossa Biblioteca de mídia para adicionar legendas, notas e nomes de arquivo personalizados para otimizar o SEO de ativos de mídia.
<br />

### Global:

[API personalizável](https://strapi.io/features/customizable-api): crie automaticamente o esquema, modelos e controladores para sua API a partir do editor. Obtenha a API REST ou GraphQL pronta para uso sem escrever uma única linha de código.<br />
[Biblioteca de mídia](https://strapi.io/features/media-library): A biblioteca de mídia permite que você armazene suas imagens, vídeos e arquivos no painel de administração do Strapi com várias maneiras de visualizá-los e gerenciá-los.<br / >
[Controle de acesso baseado em função (RBAC)](https://strapi.io/features/custom-roles-and-permissions): o controle de acesso baseado em função é um recurso disponível nas configurações do Painel de administração que permite que os membros de sua equipe tenham direitos de acesso apenas às informações de que precisam.<br />
[Internacionalização (i18n)](https://strapi.io/features/internationalization): A internacionalização (i18n) permite criar várias versões de conteúdo, também chamadas de localidades, em diferentes idiomas e para diferentes países.<br />


## 📍 URL e Recursos:

[Docs](https://docs.strapi.io) • [Demo](https://strapi.io/demo) • [Starters](https://strapi.io/starters) • [Forum](https://forum.strapi.io/) • [Discord](https://discord.strapi.io) • [Youtube](https://www.youtube.com/c/Strapi/featured) • [Try Enterprise Edition](https://strapi.io/enterprise) • [Strapi Design System](https://design-system.strapi.io/) • [Marketplace](https://market.strapi.io/)
