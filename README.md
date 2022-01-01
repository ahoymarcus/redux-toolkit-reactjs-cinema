# Redux-toolkit React-Js Cinema App

<br />

O projeto cria um app com React-JS que consome de uma API pública de filmes para montar um carrossel com filmes e séries, permitindo ainda a seleção de um página com informações detalhadas do programa escolhido:[^1]

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

### Abaixo temos o sistema de pastas **simplificado** para os componentes do Reduxjs-toolkit:

![Abaixo temos o sistema de pastas para os componentes do Reduxjs-toolkit](/public/images/sistema-pastas-do-reduxjs-toolkit.png)


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

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies', 
	async (search) => {	
		const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`);
		
		return response.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	'movies/fetchAsyncShows',
	async (search) => {
		const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=series`);
		
		return response.data;
	}
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	'movies/fetchAsyncMovieOrShowDetail',
	async (id) => {
		const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
		
		return response.data;
	}
);

// params
// 1. slice name 2. initial state 
// 3. reducers 4. extra reducers (optional)
const initialState = {
	movies: {},
	shows: {},
	selectedMovieOrShow: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeSelectedMovieOrShow: (state) => {
			state.selectedMovieOrShow = {};
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('Fetch movies pending.....');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('Fetched movies Successfully.....');
			
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Fetch movies rejected.....');
		},
		[fetchAsyncShows.pending]: () => {
			console.log('Fetch shows pending.....');
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log('Fetched shows Successfully.....');
			
			return { ...state, shows: payload };
		},
		[fetchAsyncShows.rejected]: () => {
			console.log('Fetch shows rejected.....');
		},
		[fetchAsyncMovieOrShowDetail.pending]: () => {
			console.log('Fetch details pending.....');
		},
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			console.log('Fetched details Successfully.....');
			
			return { ...state, selectedMovieOrShow: payload };
		},
		[fetchAsyncMovieOrShowDetail.rejected]: () => {
			console.log('Fetch details rejected.....');
		},
	},
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

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

### Imagem do App Redux-toolkit Cinema na sua página principal:

![Imagem do Redux-toolkit Cinema App](/public/images/redux-toolkit-reactjs-cinema-01.png)



<br />

### Imagem do App Redux-toolkit Cinema na página de detalhes:

![Imagem da página de detales do produto selecionado renderizada pelo App Redux Shop](/public/images/redux-toolkit-reactjs-cinema-02.png)



<br />



<br />
<br />

[^1]  Dipesh Malvia - Youtube Channel


