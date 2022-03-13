// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            console.log('--- CREATE ---', action);
            return [...posts, action.payload];
        case 'UPDATE':
            console.log('--- UPDATE ---', action);
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
};
