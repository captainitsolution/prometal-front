# Prometal Abrasivos e Metais — site institucional

## Sobre o projeto

Site estático, de página única, da **Prometal Abrasivos e Metais** (Guaraná, Aracruz - ES; Instagram [@prometalguarana](https://www.instagram.com/prometalguarana/)).

O objetivo é apresentar a loja e levar o cliente ao **WhatsApp** para pedir orçamento. Não é e-commerce: não há carrinho, pagamento nem login.

Seções: barra fixa, banner principal, categorias de produtos (com diálogo de exemplos e mensagem pronta de WhatsApp), como comprar, horário, localização com mapa, contato, rodapé e botão flutuante de WhatsApp.

> **Atenção:** a lista de categorias e de exemplos é de **demonstração**, montada a partir do Instagram e dos materiais de divulgação. Veja [Pendências](#pendências).

## Tecnologias

- Angular 19 (componentes standalone, signals, `OnPush`) e TypeScript estrito
- SCSS com variáveis CSS e BEM simplificado
- Fontes self-hosted via `@fontsource` (Barlow Condensed e Inter)
- Karma + Jasmine para testes unitários
- GitHub Actions + Cloudflare Pages para publicação

## Como rodar

Requisitos: Node 22 (veja `.nvmrc`) e Google Chrome (para os testes).

```bash
npm ci
npm start
```

O site abre em `http://localhost:4200`.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm start` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/prometal/browser` |
| `npm run watch` | Build contínuo em modo desenvolvimento |
| `npm test` | Testes em modo observação |
| `npm run test:ci` | Testes uma única vez, com `ChromeHeadlessCI` |

## Estrutura

```
public/                 arquivos estáticos (imagens, ícones, _headers, robots.txt)
  icons/sprite.svg      sprite de ícones
  images/brand/         logo, favicon e imagem de compartilhamento
  images/loja/          fotos da loja
src/app/
  data/                 conteúdo do site (textos, horário, categorias, contatos)
  models/               interfaces TypeScript
  shared/               ícone (sprite SVG) e cabeçalho de seção
  utils/                links de WhatsApp
  components/           um componente por pasta (.ts, .html, .scss)
src/styles.scss         variáveis (--color-*), base e botões globais
```

## Como alterar o conteúdo

Todo o conteúdo fica em `src/app/data`, separado da apresentação:

- `site.config.ts`: nome, telefone, endereço, coordenadas, Instagram, dados da empresa. Campos `null` estão **pendentes** e não aparecem no site.
- `product-categories.ts`: categorias e exemplos. Para trocar o ícone, use um nome de `shared/icon/icon-name.ts`.
- `business-hours.ts`: horário de funcionamento (`hours: null` mostra "Fechado").
- `how-to-buy.ts`, `navigation.ts`, `contact-channels.ts`: passos, menu e canais de contato.

Para adicionar um ícone: inclua um `<symbol>` em `public/icons/sprite.svg` e o nome em `icon-name.ts`.

Imagens: use WebP, com até ~300 KB cada, e informe `width`, `height` e `alt`.

## Identidade visual

Cores extraídas da logo e definidas em `src/styles.scss`:

| Variável | Valor | Uso |
| --- | --- | --- |
| `--color-black` / `--color-graphite` | `#0b0b0b` / `#1a1b1d` | Fundos escuros |
| `--color-silver` | `#c4c8cd` | Textos secundários em fundo escuro |
| `--color-amber` | `#f6b815` | Destaques (amarelo do capacete) |
| `--color-amber-text` | `#7a5600` | Amarelo escuro para texto sobre fundo claro (contraste AA) |
| `--color-whatsapp` | `#128c4a` | Botões de WhatsApp |

Tipografia: Barlow Condensed (títulos) e Inter (textos). O padrão de chapa perfurada (`--perforated`) lembra o fundo da logo.

A logo (`prometal-logo.webp`) tem fundo transparente e **funciona em fundo escuro**. Não há versão para fundo claro: use sempre sobre preto/grafite. O ideal é pedir o arquivo vetorial original (AI, SVG ou PDF) ao designer.

## Convenções

- Componentes standalone com `ChangeDetectionStrategy.OnPush` e signals.
- Um componente por pasta, com `.ts`, `.html` e `.scss`.
- Estilos em BEM simplificado (`bloco__elemento--modificador`).
- Acessibilidade: HTML semântico, `alt` nas imagens, rótulos em botões de ícone, foco visível, `prefers-reduced-motion` e `<dialog>` nativo.
- Commits em português, em branches e PRs; branch de produção: `master`.

## CI/CD

O workflow `.github/workflows/ci-cd.yml`:

- **Pull request e push na `master`:** `npm ci`, `npm run test:ci` e `npm run build`.
- **Push na `master`:** publica no Cloudflare Pages com `wrangler-action`, usando `--branch=master`.

Configure em GitHub > Settings > Secrets and variables > Actions:

- Secrets: `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`
- Variable: `CLOUDFLARE_PAGES_PROJECT` (sugestão: `prometal`)

**Importante:** o projeto no Cloudflare Pages deve ser criado por **Direct Upload** (pasta `dist/prometal/browser`). Nesse tipo de projeto a branch de produção nasce como `main` e só pode ser mudada pela API:

`PATCH /accounts/{account_id}/pages/projects/{project}` com `{"production_branch":"master"}`

Sem esse ajuste, o deploy sai como *Preview* e o endereço principal não atualiza. Nunca exiba tokens em prints ou mensagens.

## Notas para suporte

- O link de WhatsApp usa o número com código do país (`5527999433456`) e mensagem pré-preenchida.
- O mapa é um iframe do Google Maps nas coordenadas da loja; "Como chegar" abre a rota no Google Maps.
- A loja **não faz entregas** e **não abre aos sábados** (informado pelo cliente).
- Sem preços, prazos ou estoque no site, de propósito: tudo é tratado no atendimento.

## Pendências

- [ ] **Categorias e exemplos:** o cliente deve revisar a lista real (hoje é de demonstração).
- [ ] **E-mail de contato:** não informado; a seção de contato fica sem ele.
- [ ] **Formas de pagamento:** não confirmadas; não são exibidas.
- [ ] **CNPJ e razão social do rodapé:** vieram de consulta pública; confirmar com o cliente.
- [ ] **Fotos:** o site usa a fachada (`images/loja/fachada.webp`) e uma foto de atendente na entrada (`images/loja/equipe-na-entrada.webp`, no banner). Confirmar com a loja a autorização de uso da imagem da pessoa. A etiqueta na máscara de solda aparece pequena na foto e mostra um preço: se a loja não quiser isso, trocar a foto. Faltam fotos do interior e dos produtos (não usar imagens do Instagram sem autorização).
- [ ] **Logo vetorial** (para versão em fundo claro e SVG).
- [ ] **Domínio .com.br** (a configurar depois), com:
  - `<link rel="canonical">` e `og:url` no `src/index.html`
  - `og:image` com URL absoluta (hoje é relativa: `images/brand/og-image.jpg`)
  - `sitemap.xml` e a linha `Sitemap:` no `robots.txt`
  - cadastro no Google Search Console
