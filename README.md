# 🚗 Anotação de Viagem

Um aplicativo mobile desenvolvido em **React Native** com **Expo** para registro detalhado de anotações durante viagens pessoais. Perfeito para quem gosta de documentar suas jornadas com informações como consumo de combustível, velocidades, pontos de referência e gastos.

---

## 📋 Sobre o Projeto

Este aplicativo foi desenvolvido com o objetivo de auxiliar pessoas com o hábito de anotar detalhes de viagens, permitindo o registro completo de jornadas com múltiplas anotações durante o trajeto.

### Funcionalidades Principais

- **Dois tipos de viagens:**
  - **Viagens Avulsas**: Registro rápido de uma única jornada sem divisão de trajetos
  - **Viagens Completas (Coleção)**: Viagens divididas em ida e volta, com múltiplas anotações por trajeto

- **Registro detalhado de anotações:**
  - Ponto de referência (local onde a anotação foi feita)
  - Quilometragem percorrida
  - Velocidade atingida
  - Velocidade da via
  - Consumo de combustível
  - Status do ar-condicionado
  - Descrição adicional (campo opcional)
  - Timestamp (hora e data)

- **Rastreamento de jornadas:**
  - Data e hora de partida
  - Data e hora de chegada
  - Descrições extras para partida e chegada
  - Gastos durante a jornada

- **Revisão e validação:**
  - Telas de revisão antes de finalizar viagens
  - Status de progresso (Não iniciado → Iniciado, ida → Ida finalizado, volta não → Iniciado, volta → Finalizado)

- **Tema claro e escuro:**
  - Suporte completo a dois temas com persistência de preferência do usuário

- **Notificações Toast:**
  - Sistema de feedback visual com animações suaves

- **Autenticação anônima:**
  - Sincronização automática com Firebase para acesso sem criar conta

---

## 🛠️ Tecnologias Utilizadas

### Framework e Plataforma

- **React Native** `0.73.6` - Framework para desenvolvimento mobile cross-platform
- **Expo** `~50.0.17` - Plataforma que simplifica o desenvolvimento com React Native
- **TypeScript** `^5.3.0` - Superset do JavaScript com tipagem estática

### Navegação

- **React Navigation** `^6.1.9` - Biblioteca principal de navegação
  - `@react-navigation/native-stack` `^6.9.16` - Stack navigation
  - `@react-navigation/bottom-tabs` `^6.5.11` - Navegação por abas na base
  - `@react-navigation/stack` `^6.3.20` - Stack adicional para modais

### Estado Global

- **Zustand** `^4.4.5` - Gerenciamento de estado minimalista e otimizado (alternativa ao Context API)
  - Store centralizado (`dadosStore.ts`) para usuário, temas, viagens completas e coleções

### Backend e Autenticação

- **Firebase** (via React Native Firebase)
  - `@react-native-firebase/app` `^18.6.1` - Base do Firebase
  - `@react-native-firebase/auth` `^18.6.1` - Autenticação (suporte a anônimo)
  - `@react-native-firebase/firestore` `^18.6.1` - Banco de dados em nuvem
- **Google Sign-In** `@react-native-google-signin/google-signin` `^10.1.0` - Integração com Google para autenticação

### Estilização e Tema

- **Styled Components** `^6.1.1` - CSS-in-JS para React Native com tipagem de tema automática
- **Sistema de temas**: Arquivos `light.ts` e `dark.ts` com paleta de cores personalizada

### Persistência de Dados

- **MMKV** `react-native-mmkv` `^2.11.0` - Storage rápido e eficiente para dados sensíveis (tema, preços de combustível)

### Formulários e Validação

- **React Hook Form** `^7.47.0` - Gerenciamento de formulários com baixo overhead
- **Zod** `^3.22.4` - Validação de schema TypeScript-first
- **@hookform/resolvers** `^3.3.2` - Integração entre React Hook Form e validadores

### Animações e Gestos

- **React Native Reanimated** `~3.6.2` - Animações de alto desempenho (usadas no Toast)
- **React Native Gesture Handler** `~2.14.0` - Tratamento avançado de gestos
- **React Native Screens** `~3.29.0` - Otimização de performance de navegação

### Utilitários

- **UUID** `^10.0.0` - Geração de IDs únicos para viagens e anotações
- **React Native Safe Area Context** `4.8.2` - Tratamento de áreas seguras em diferentes dispositivos
- **Expo Status Bar** `~1.11.1` - Customização da barra de status
- **Expo Splash Screen** `~0.26.5` - Tela de splash personalizada
- **Expo Updates** `~0.24.13` - Atualizações over-the-air
- **Material Icons** (via @expo/vector-icons) - Ícones para Toast e interface

### Build e Deploy

- **EAS Build** - Serviço de build da Expo para gerar APKs e certificados (configurado em `eas.json`)
- **Babel** `^7.20.0` - Transpilador de JavaScript
- **Metro** - Bundler padrão do React Native

### Desenvolvimento

- **@appnest/readme** `^1.2.7` - Ferramenta para geração de documentação

---

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── ColecaoViagem/      # Componentes para viagens em coleção
│   │   ├── AddAnotacao/    # Adicionar anotação durante viagem
│   │   ├── Chegada/        # Registrar chegada
│   │   ├── CriaColecao/    # Criar nova coleção de viagem
│   │   ├── ItemAnotacao/   # Exibir anotação individual
│   │   ├── ItemInicial/    # Item na lista inicial
│   │   └── ItemViagem/     # Item de viagem na coleção
│   ├── ViagemAvulsa/       # Componentes para viagens avulsas
│   │   ├── AddViagemAvulsa/
│   │   └── ItemViagem/
│   ├── ViagemCompleta/     # Componentes para viagens completas (ida/volta)
│   │   ├── AddAnotacao/
│   │   ├── AddViagemCompleta/
│   │   ├── ComecaTermina/
│   │   ├── ItemAnotacao/
│   │   └── ItemViagem/
│   ├── Input/              # Input customizado com estilos
│   ├── ItemRevisao/        # Componente para revisão de anotações
│   ├── ModalConfirmaDeleta/# Modal de confirmação de exclusão
│   └── Toast/              # Sistema de notificações com animações
│
├── context/                 # Gerenciamento de estado (Zustand)
│   ├── dadosStore.ts       # Store principal com usuário, viagens, tema
│   ├── index.ts
│   ├── mmkv.ts             # Configuração do storage MMKV
│   └── Toast/              # Context específico para Toast
│       ├── index.ts
│       ├── useToast.tsx    # Hook para exibir toast
│       ├── useToastConfig.ts
│       └── useToastDispatch.ts
│
├── hooks/                   # Hooks customizados
│   ├── useAnonymosSignIn.tsx    # Autenticação anônima com Firebase
│   ├── useAtualizaAnotacao.tsx  # Atualizar anotação em tempo real
│   ├── useAtualizaDadosViagem.tsx # Atualizar dados da viagem
│   ├── useHoraData.tsx          # Formatação de hora e data
│   ├── useInitializeTheme.tsx   # Inicializar tema
│   └── useShowModal.tsx         # Controle de modais
│
├── Router/                  # Configuração de navegação
│   ├── stackNav.tsx        # Stack Navigator (telas principais)
│   ├── bottonNav.tsx       # Bottom Tab Navigator
│   ├── index.ts
│   ├── hooks/
│   │   └── useMapIcons.ts  # Mapeamento de ícones para rotas
│   └── types/
│       ├── stack.ts        # Tipos das rotas do Stack
│       ├── booton.ts       # Tipos das rotas das abas
│       ├── icon.ts         # Tipos de ícones
│       └── screenProps.ts  # Props das telas
│
├── screens/                # Telas da aplicação
│   ├── Home/               # Tela inicial
│   ├── Viagens/            # Lista de viagens (avulsas e coleções)
│   ├── Perfil/             # Tela de perfil do usuário
│   ├── AnotacaoAvulsa/     # Detalhes de viagem avulsa
│   ├── AnotacaoColecaoViagem/ # Anotações em coleção
│   ├── AnotacaoViagem/     # Anotações em viagem completa
│   ├── ColecaoViagem/      # Detalhes de coleção
│   ├── RevisaoViagemAvulsa/# Revisão antes de finalizar (avulsa)
│   ├── RevisaoViagemCompleta/ # Revisão antes de finalizar (coleção)
│   └── IdaVoltaColecao/    # Controle de ida/volta em coleção
│
├── types/                  # Tipos TypeScript
│   ├── colecaoViagem.ts    # Tipos de viagens em coleção
│   ├── viagemCompleta.ts   # Tipos de viagens completas
│   ├── viagemAvulsa.ts     # Tipos de viagens avulsas
│   ├── user.ts             # Tipo do usuário
│   ├── toast.ts            # Tipos de notificações
│   └── index.ts
│
├── theme/                  # Configuração de temas
│   ├── light.ts            # Paleta de cores tema claro
│   ├── dark.ts             # Paleta de cores tema escuro
│   └── styled.d.ts         # Tipagem para Styled Components
│
├── globalStyles/           # Estilos globais
│   ├── style.ts            # Estilos principais
│   ├── item.ts             # Estilos de itens
│   └── modal.ts            # Estilos de modais
│
└── utils/                  # Utilitários
    ├── index.ts
    └── Share/              # Funcionalidades de compartilhamento
```

---

## 🏗️ Arquitetura e Padrões

### Gerenciamento de Estado (Zustand)

Em vez de usar Context API tradicional, o projeto utiliza **Zustand** para gerenciamento de estado global:

```typescript
// Exemplo do store principal (dadosStore.ts)
type State = {
  user: User | null;
  anonymousId: string;
  viagemCompletaStore: ViagemCompleta;
  theme: "light" | "dark";
  colecaoStatusStore: Status;
  dadosColecaoViagemStore: NovaViagem;
};

type Action = {
  setUser: (user: User) => void;
  setAnonymousId: (anonymousId: string) => void;
  // ... mais actions
};
```

**Vantagens:**

- Menos boilerplate em comparação com Context API
- Melhor performance (renderizações seletivas)
- API mais intuitiva
- Tamanho de bundle menor

### Tipagem TypeScript

O projeto utiliza TypeScript rigorosamente para garantir type safety:

- **Types centralizados** em `src/types/`
- **Props tipadas** em todos os componentes
- **Tipos para rotas** de navegação
- **Tipagem de tema** com Styled Components (tipo seguro para cores)

### Estilização com Styled Components

```typescript
// Exemplo de uso com tema tipado
import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
  flex: 1;
`;
```

**Benefícios:**

- CSS-in-JS com suporte a tema automático
- Tipo-seguro para cores e tokens de design
- Fácil manutenção de temas (light/dark)

### Autenticação e Persistência

#### Firebase Anonymous Auth

- Autenticação automática ao abrir o app
- Fallback para sign-in anônimo se necessário
- UID armazenado no Zustand store

#### MMKV Storage

- Armazenamento rápido de dados sensíveis
- Usado para tema do usuário e preços de combustível
- Mais eficiente que AsyncStorage

#### Firestore

- Sincronização de viagens e anotações
- Banco de dados em nuvem associado ao UID do usuário

### Validação de Dados

Combina **React Hook Form** com **Zod**:

```typescript
// Validação type-safe
const schema = z.object({
  PontoReferencia: z.string().min(1),
  KmPercorrido: z.string(),
  // ...
});

// Integração com formulários
const { control, handleSubmit } = useForm({
  resolver: zodResolver(schema),
});
```

### Animações

Usa **React Native Reanimated** para animações de alto desempenho:

- **Toast com deslizar**: Entra do topo e sai com delay
- **Gestos customizados**: Via `react-native-gesture-handler`

```typescript
// Exemplo de animação de Toast
const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateY: translationY.value }],
}));
```

---

## 🎨 Sistema de Temas

### Estrutura de Cores

#### Tema Claro (light.ts)

```typescript
{
  BACKGROUND: "#19b2e1",      // Azul turquesa
  BTN: "#7ec3fc",             // Azul claro
  BTN_CONFIRMA: "#19e158",    // Verde
  BTN_CANCELA: "#ff7575",     // Vermelho
  TEXT_COLOR: "#000000",      // Preto
  PRIMARY_900: "#5087f7",     // Azul escuro
  // ... mais cores
}
```

#### Tema Escuro (dark.ts)

```typescript
// Versão invertida com cores mais escuras
```

### Persistência de Tema

O tema é armazenado no MMKV e recuperado ao iniciar:

```typescript
// Em useInitializeTheme
const { setTheme } = useDadosStore();
const savedTheme = storage.getString(themeStorage);
```

---

## 📱 Navegação

### Estrutura de Rotas

```
TabNavigator (Bottom Tabs)
├── Home
├── Viagens
└── Perfil

Stack Navigator
├── Tela (referencia TabNavigator)
├── RevisãoAvulsa
├── AnotaçãoViagem
├── RevisãoAnotação
├── ColecaoViagem
├── AnotacaoColecaoViagem
└── IdaVoltaColecao
```

### Navegação Tipada

```typescript
// Types seguros para rotas
type RootStackParamList = {
  Tela: undefined;
  RevisãoAvulsa: { viagemId: string };
  AnotaçãoViagem: { viagemId: string };
  // ...
};
```

---

## 🔒 Autenticação

### Fluxo de Autenticação

1. **App inicia** → `useAnonymosSignIn` ativa
2. **Firebase verifica** se usuário já existe
3. Se não existe → **Sign-in anônimo automático**
4. UID armazenado no Zustand e MMKV
5. Dados sincronizados com Firestore

```typescript
// Firebase Auth com fallback anônimo
auth()
  .signInAnonymously()
  .then(() => {
    // Atualizar store com dados do usuário
  })
  .catch((error) => console.error(error));
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js `v18+`
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`
- Configurar Firebase (google-services.json para Android)

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd Anotacao-de-Viagem

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Certifique-se de que google-services.json está no diretório root
```

### Desenvolvimento

```bash
# Inicie o servidor Expo
npm start

# Ou use o dev client
npm run start

# Para Android
npm run android

# Para iOS
npm run ios

# Para Web
npm run web
```

### Build para Produção

```bash
# Build para Android usando EAS
npm run build

# Ou manualmente
eas build -p android --profile preview
```

---

## 📊 Tipos Principais

### ViagemCompleta (ida/volta com múltiplas anotações)

```typescript
type ViagemCompleta = {
  saindo: string; // Local de saída
  indo: string; // Local de destino
  partindo: Check | null; // Info de partida
  anotacao: [AnotacaoCompleta]; // Array de anotações
  chegando: Check | null; // Info de chegada
  id: string;
  dataCriacao: string;
  finalizado: boolean;
};
```

### ColecaoViagem (coleção de viagens ida/volta)

```typescript
type NovaViagem = {
  id: string;
  idPai: string; // ID da coleção pai
  dataCriacao: string;
  ida: {
    hora: string;
    data: string;
    anotacao: [Anotacao]; // Múltiplas anotações
    horaChegada: string;
    descricaoChegada: string;
    gastos: string;
  };
  volta: {
    /* estrutura similar */
  };
  status: Status; // Estado atual da viagem
};

type Status =
  | "Não iniciado"
  | "Iniciado, ida"
  | "Ida finalizado, volta não"
  | "Iniciado, volta"
  | "Finalizado";
```

---

## 🛠️ Principais Hooks Customizados

### `useAnonymosSignIn`

Gerencia autenticação anônima com Firebase ao iniciar o app.

### `useInitializeTheme`

Carrega tema salvo do MMKV e fornece função para alternar.

### `useHoraData`

Utilitário para formatação de datas e horas.

### `useAtualizaDadosViagem`

Atualiza dados da viagem em tempo real.

### `useShowModal`

Controla visibilidade de modais globalmente.

---

## 📦 Configurações Importantes

### metro.config.js

Configuração do bundler React Native.

### babel.config.js

Configuração do transpilador com preset Expo.

### app.json

Metadados do app (nome, versão, ícone, splash screen).

### eas.json

Configuração de build e deploy via EAS (Expo Application Services).

---

## 🎯 Decisões de Arquitetura

| Decisão                    | Razão                                           |
| -------------------------- | ----------------------------------------------- |
| **Zustand vs Context API** | Melhor performance, menos boilerplate           |
| **Styled Components**      | Tema tipado, integração direta com React Native |
| **MMKV vs AsyncStorage**   | Maior velocidade, melhor para dados sensíveis   |
| **Firebase Anonymous**     | Acesso imediato sem criar conta                 |
| **Zod + React Hook Form**  | Validação type-safe com baixo overhead          |
| **React Navigation v6**    | Melhor performance, TypeScript support          |

---

## 📝 Padrões de Código

### Exports Indexados

```typescript
// src/components/index.ts
export * from "./Toast";
export * from "./Input";
// Permite: import { Toast, Input } from '@/components'
```

### Path Aliases

```typescript
// tsconfig.json
"@/*": ["./src/*"]

// Uso em imports
import { useDadosStore } from "@/context";
```

### Componentes Funcionais com Hooks

Todos os componentes usam functional components com React Hooks.

---

## 🔄 Fluxo de Dados

```
User Interaction
    ↓
Component Event Handler
    ↓
Zustand Action (setUser, setViagemCompleta, etc)
    ↓
Store Update
    ↓
Component Re-render (subscribers)
    ↓
Firebase Sync (em paralelo)
```

---

## 🚧 Possíveis Melhorias Futuras

- Testes unitários e de integração
- Sincronização offline-first
- Exportação de viagens (PDF, CSV)
- Estatísticas de consumo
- Integração com mapas
- Dark mode aprimorado
- Notificações push
- Compartilhamento de viagens

---

## 📄 Licença

Este projeto é privado e foi desenvolvido para uso pessoal.

---

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ em React Native + TypeScript + Expo**
