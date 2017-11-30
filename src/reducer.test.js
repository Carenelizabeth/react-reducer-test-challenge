import reducer from './reducer';

describe('reducer', () => {
    it('should handle unknown actions correctly', () => {
        const state = {
            comments: [
                {
                    author: 'Foo bar',
                    comment: 'Hello world'
                }
            ]
        };
        const newState = reducer(state, {type: '__UNKNOWN'});
        expect(newState).toBe(state);
    });
});
