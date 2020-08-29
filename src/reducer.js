let scrollY;
let body;

const initialState = {
    imageList: [],
    showPreview: false,
    prevImg: { id: 0, url: '' },
    category: '',
};

function Reducer(state, action) {
    switch (action.type) {
        case 'open-tab':
            scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}`;

            return {
                ...state,
                imageList: action.payload.imageList,
                category: action.payload.category,
                prevImg: action.payload.prevImg,
                showPreview: true,
            };

        case 'close-tab':
            body = document.body;
            scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);

            return {
                ...state,
                imageList: [],
                category: '',
                prevImg: { value: 0, url: '' },
                showPreview: false,
            };

        default:
            return state;
    }
}

export { initialState, Reducer };
