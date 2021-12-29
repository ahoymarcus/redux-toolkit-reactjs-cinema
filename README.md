# Redux-toolkit Cinema App

<br />

O projeto cria um app com React-JS que consome de uma API pública de produtos de loja e renderiza os itens numa página web de Shopping Cart.:[^1]

<br />

Como funcionalidades especiais, o app utiliza Redux para gerenciar o estado geral da aplicação e React-redux para definir a comunicação da aplicação com a Store criada para os estados.


<br />

Ademais, o app usa React-router-dom para criar um sistema de roteamento de páginas no frontend, incluindo o uso de captura de parámetros de URL para a renderização de uma página de detalhe de produto a partir de ID passado no endereço. 


<br />

Finalmente, o app Cart pode ainda fazer requisições HTTP usando Axios para receber os dados de APIs da web.

<br />

Dependências:

- Styled-components
- React-router-dom
- Redux
- React-redux
- Axios



<br />

[]()

<br />

### Esquema representando o Ciclo de Vida do Redux:

![Esquema representando o Ciclo de Vida do Redux](/public/images/the-redux-life-cycle.png)

<br />

### Aqui podemos ver o sistema de pastas para os componentes do Redux:

![Abaixo temos o sistema de pastas para os componentes do Redux](/public/images/estrutura-de-pastas-para-os-componentes-do-redux.png)


<br />

Agora, criando um módulo com constantes para separar a definição de todos os tipos de **Actions** aceitas pelo sistema. No caso temos 03:

<br />

```
export const ActionTypes = {
	SET_PRODUCTS: 'SET_PRODUCTS',
	SELECTED_PRODUCT: 'SELECTED_PRODUCT',
	REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT'
}; 
```

<br />

A seguir, temos a definição do módulo para as **Actions** propriamente ditas:

- Set Products 
- Selected Products
- Remove Selected Product


<br />

```
import { ActionTypes } from '../constants/action-types';

export const setProducts = (products) => {
	return  {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};


export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	};
};
```

<br />

Depois de definir as Actions, são criados os **Reducers** para as actions:

```
import { ActionTypes } from '../constants/action-types';


const initialState = {
	products: [],
};

export const productReducer = (state = initialState, {type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return {...state, products: payload };
		default:
			return state;
	}
};


export const selectedProductReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return {...state, ...payload};
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};
```

<br />

Agora, os **Reducers** criados na aplicação são reunidos em um objeto Redux do tipo **combinedReducers**:

<br />

```
import { combineReducers } from 'redux';

// reducers items
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer
});

export default reducers;
```

<br />

A seguir é preciso trazer os reducers combinados para a criação da **Store**:

<br />

```
import { createStore } from 'redux';

// reducers
import reducers from './reducers/index';

// combined reducers + state
const store = createStore(
	reducers, 
	{}, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

<br />

Após ser construída a estrutura do Redux é preciso ligá-lo à aplicação do React-JS, sendo que isto é feito com o uso de o componente **Provider** da biblioteca 'react-redux', que vai envelopar o componente principal App.js da aplicação e vai passar a Store criada como props:


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

Finalmente, dentrol da aplicação, a comunicação entre os componentes e a Store é feita principalmente com Hooks da biblioteca **react-redux**:

- useSelector

<br />

```
const products = useSelector((state) => state.allProducts.products);
```

<br />

- useDispatch

<br />

```
const dispatch = useDispatch();
```

<br />

### Imagem da vitrine de produtos criada pelo App Redux Shop:

![Imagem da vitrine de produtos criada pelo App Redux Shop](/public/images/redux-reactjs-shopping-cart-01.png)






<br />

### Imagem da página de detales do produto selecionado renderizada pelo App Redux Shop:

![Imagem da página de detales do produto selecionado renderizada pelo App Redux Shop](/public/images/redux-reactjs-shopping-cart-02.png)



<br />



<br />
<br />

[^1]  Dipesh Malvia - Youtube Channel


