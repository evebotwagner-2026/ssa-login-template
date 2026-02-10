# Guia de Estilo Visual - SSA-BR

## 📋 Documento de Identidade Visual

**Projeto:** Template de Login SSA-BR  
**Data de Análise:** 10/02/2026  
**Analista:** Eve (AI Design Specialist)

---

## 🎨 Paleta de Cores

### Cores Principais

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Azul Primário** | `#0066CC` | rgb(0, 102, 204) | Botões primários, links, destaques |
| **Azul Secundário** | `#00A3E0` | rgb(0, 163, 224) | Gradientes, elementos decorativos |
| **Azul Claro** | `#E6F0FA` | rgb(230, 240, 250) | Fundos, estados de foco |

### Cores de Destaque

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Laranja/Coral** | `#FF6B35` | rgb(255, 107, 53) | Acentos, CTAs secundários, ícones |

### Cores de Interface

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Texto Escuro** | `#1A1A2E` | rgb(26, 26, 46) | Títulos, texto principal |
| **Texto Médio** | `#4A4A68` | rgb(74, 74, 104) | Subtítulos, labels |
| **Texto Claro** | `#6B6B8A` | rgb(107, 107, 138) | Placeholders, texto secundário |
| **Fundo** | `#F8FAFC` | rgb(248, 250, 252) | Background da página |
| **Superfície** | `#FFFFFF` | rgb(255, 255, 255) | Cards, inputs, containers |
| **Borda** | `#E2E8F0` | rgb(226, 232, 240) | Divisores, bordas de inputs |

### Gradientes

```css
/* Gradiente Principal (Azul) */
background: linear-gradient(135deg, #0066CC 0%, #00A3E0 100%);

/* Gradiente Laranja (Acento) */
background: linear-gradient(135deg, #FF6B35 0%, #FF8F5C 100%);
```

---

## 🔤 Tipografia

### Fontes Utilizadas

| Função | Fonte | Peso | Uso |
|--------|-------|------|-----|
| **Títulos** | Space Grotesk | 700 (Bold) | H1, H2, marca |
| **Subtítulos** | Space Grotesk | 600 (Semi-bold) | H3, destaques |
| **Corpo** | Plus Jakarta Sans | 400 (Regular) | Texto, descrições |
| **Labels** | Plus Jakarta Sans | 600 (Semi-bold) | Labels de formulário |
| **Botões** | Plus Jakarta Sans | 600 (Semi-bold) | CTAs |

### Importação (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### Escala Tipográfica

| Elemento | Tamanho | Peso | Altura da Linha |
|----------|---------|------|-----------------|
| H1 | 2.5rem (40px) | 700 | 1.2 |
| H2 | 2rem (32px) | 700 | 1.2 |
| H3 | 1.5rem (24px) | 600 | 1.3 |
| Corpo | 1rem (16px) | 400 | 1.6 |
| Pequeno | 0.875rem (14px) | 500 | 1.5 |
| Muito Pequeno | 0.75rem (12px) | 500 | 1.4 |

---

## 🖼️ Logo

### Arquivo Original
- **Nome:** `ssa-logo-2x-300x87.png`
- **Dimensões:** 300x87 pixels
- **Formato:** PNG com transparência
- **URL:** https://ssa-br.com/wp-content/uploads/2022/08/ssa-logo-2x-300x87.png

### Versões Utilizadas

| Contexto | Tratamento | Arquivo |
|----------|------------|---------|
| Fundo Escuro | Branco (filter: brightness(0) invert(1)) | ssa-logo-original.png |
| Fundo Claro | Original | ssa-logo-original.png |

### Diretrizes de Uso

- **Tamanho mínimo:** 120px de largura
- **Espaçamento:** Manter área de respeito proporcional à altura do logo
- **Não fazer:** 
  - Esticar ou distorcer
  - Alterar cores (exceto inversão para fundos escuros)
  - Aplicar sombras excessivas
  - Rotacionar

---

## 📐 Espaçamento e Layout

### Sistema de Espaçamento

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-xs` | 4px | Ícones, elementos muito próximos |
| `--space-sm` | 8px | Padding interno pequeno |
| `--space-md` | 16px | Padding padrão, gap entre elementos |
| `--space-lg` | 24px | Seções, grupos de elementos |
| `--space-xl` | 32px | Blocos principais |
| `--space-2xl` | 48px | Seções grandes |
| `--space-3xl` | 64px | Hero sections |

### Bordas e Raios

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 8px | Botões pequenos, tags |
| `--radius-md` | 12px | Inputs, cards |
| `--radius-lg` | 16px | Modais, containers |
| `--radius-xl` | 24px | Página principal |

---

## ✨ Elementos Visuais

### Botões

**Primário:**
- Background: Gradiente azul
- Texto: Branco (#FFFFFF)
- Padding: 16px 24px
- Border-radius: 12px
- Sombra: `0 4px 14px 0 rgba(0, 102, 204, 0.39)`
- Hover: Elevação + sombra mais intensa

**Secundário/Social:**
- Background: Branco
- Borda: 2px solid #E2E8F0
- Texto: #1A1A2E
- Padding: 14px 24px

### Inputs

- Background: #FFFFFF
- Borda: 2px solid #E2E8F0
- Border-radius: 12px
- Padding: 14px 16px 14px 48px (com ícone)
- Focus: Border #0066CC + shadow 0 0 0 4px #E6F0FA

### Cards

- Background: #FFFFFF
- Border-radius: 12px
- Sombra: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- Padding: 20px 24px

---

## 🎭 Estilo Visual

### Características
- **Estilo:** Moderno, corporativo, tecnológico
- **Sensação:** Profissional, confiável, inovador
- **Densidade:** Clean, com espaçamento generoso
- **Contraste:** Alto (texto escuro em fundos claros)

### Elementos Decorativos
- Formas circulares com opacidade reduzida
- Gradientes suaves
- Sombras sutis para profundidade
- Animações suaves (300-400ms)

---

## 📱 Responsividade

### Breakpoints

| Breakpoint | Largura | Ajustes |
|------------|---------|---------|
| Mobile | < 480px | Single column, padding reduzido |
| Tablet | 480px - 900px | Layout adaptativo |
| Desktop | > 900px | Split-screen completo |

### Adaptações
- **Mobile:** Lado esquerdo (marca) em cima, formulário embaixo
- **Desktop:** Split-screen 50/50

---

## ♿ Acessibilidade

### Contraste
- Texto principal: WCAG AA (4.5:1)
- Texto grande: WCAG AAA (3:1)
- Elementos interativos: Foco visível

### Interações
- Estados de hover claros
- Focus rings visíveis
- Estados de erro/validação

---

## 📁 Arquivos Relacionados

- `ssa-logo-original.png` - Logo original baixado
- `index.html` - Estrutura HTML do template
- `styles.css` - Estilos CSS com variáveis
- `script.js` - Interatividade

---

**Documento gerado em:** 10/02/2026  
**Status:** ✅ Aprovado para uso no projeto
