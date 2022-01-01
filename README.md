# Redux-toolkit React-Js Cinema App

<br />

O projeto cria um app com React-JS que consome de uma API pública de ...:[^1]

<br />

Como funcionalidades especiais, o app utiliza o toolkit Reduxjs/toolkit para simplificar o uso do Redux para gerenciar o estado geral da aplicação. Tem ainda o uso da biblioteca React-redux para definir a comunicação da aplicação com a Store criada para os estados.


<br />

Ademais, o app usa React-router-dom para criar um sistema de roteamento de páginas no frontend, incluindo o uso de captura de parámetros de URL para a renderização de uma página de detalhe de filme a partir de ID passado no endereço. 


<br />

Finalmente, o app ainda utiliza as bibliotecas axios para fazer requisições HTTP usando Axios para receber os dados de APIs da web e Node-scss para modular a arquitetura de de estilo CSS.

<br />

Dependências:

- Styled-components
- React-router-dom
- Redux
- React-redux
- @Reduxjs/toolkit
- Axios
- Node-scss
- React-slick (carousel)


<br />

[]()

<br />

### Esquema representando o Ciclo de Vida do Redux:

![Esquema representando o Ciclo de Vida do Redux](/public/images/the-redux-life-cycle.png)

<br />

### A:

![Abaixo temos o sistema de pastas para os componentes do Redux](/public/images/)


<br />

Com o Reduxjs/toolkit existe a tendência de se simplificar a arquitetura do Redux diminuindo o número de módulos necessários.

<br />

Para a arquitetura original do Redux era necessário 03 módulos iniciais:

- Actions
- Reducers
- Store


<br />

Com o toolkit, os módulos de Reducer e de Actions são reunídos em um módulo de Slice:

- Slice: actions-reducers 
- Store


<br />

**movieSlice.js**
```
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
	const movieText = "Harry";
	
	const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
	
	return response.data;
});

// params
// 1. slice name 2. initial state 
// 3. reducers 4. extra reducers (optional)
const initialState = {
	movies: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('Fetch pending.....');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('Fetched Successfully.....');
			
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Fetch rejected.....')
		},
	},
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
```

<br />

E a store:

<br />

**store.js**

```
import { configureStore } from '@reduxjs/toolkit';

// reducers
import moviesReducer from './movies/movieSlice';

export const store = configureStore({
	reducer: {
		movies: moviesReducer
	},
});
```

<br />

Após ser construída a estrutura do Redux com o Reduxjs/toolkit é preciso ligá-lo à aplicação do React-JS, sendo que isto é feito com o uso de o componente **Provider** da biblioteca 'react-redux', que vai envelopar o componente principal App.js da aplicação e vai passar a Store criada como props:


<br />

```
...outras importações...

import { Provider } from 'react-redux';

import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

...outros scripts...
```

<br />

Finalmente, dentro da aplicação, a comunicação entre os componentes e a Store é feita principalmente com Hooks da biblioteca **react-redux**:

- useSelector

<br />

```
const movies = useSelector(getAllMovies);
```

<br />

- useDispatch

<br />

```
const dispatch = useDispatch();

dispatch(addMovies(response.data));
```

<br />

### I:

![Imagem da vitrine de produtos criada pelo App Redux Shop](/public/images/)






<br />

### I:

![Imagem da página de detales do produto selecionado renderizada pelo App Redux Shop](/public/images/)



<br />



<br />
<br />

[^1]  Dipesh Malvia - Youtube Channel


