// @flow

export const session = {
  state: {
    error: null,
    user: null,
  },
  reducers: {
    setError(state, error) {
      return { ...state, error };
    },
    setUser(state, user) {
      return { ...state, user };
    },
  },
  effects: {
    authenticate() {
      try {
        const user = {
          familyName: 'kakadiya',
          givenName: 'jignesh',
          emailAddress: 'contact@appasna.com',
        };

        this.setUser(user);
        this.setError(null);
      } catch (e) {
        this.setError(e.message);
      }
    },
  },
};
 