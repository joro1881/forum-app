import { createStore } from 'vuex'

export const store = createStore({
  state: { },
  getters: { },
  modules: {
    categories: {
      namespaced: true,
      state: {
        items: []
      }
    },
    users: {
      namespaced: true,
      state: {
        items: [{}, {}]
      },
      actions: {
        fetchUsers (ids) { }
      }
    },
    forums: {
      namespaced: true,
      state: {
        items: [{ id: '1', name: 'myFOrum' }, {}]
      },
      actions: {
        fetchForum (id) { return new Promise({}) }
      }
    },
    posts: {
      namespaced: true,
      state: {
        items: [{ threadId: '1' }, {}]
      },
      actions: {
        fetchPost (id) { },
        createPost (post) { },
        updatePost () {}
      }
    },
    threads: {
      namespaced: true,
      state: {
        items: [
          { id: '1', title: 'awesome title', userId: '1', posts: [{}], publishedAt: 1111 },
          { id: '2', title: 'check check title', userId: '2', posts: [{}], publishedAt: 1111 }
        ]
      },
      actions: {
        fetchThread (id) { },
        updateThread (id, title, text) { },
        createThread (id, title, text) { }
      },
      getters: {
        thread: (state, id) => state.items[0]
      }
    },
    auth: {
      namespaced: true,
      state: {
        user: { id: '1', posts: [{}, {}] }, // because of profile.spec.js
        // posts: [{}, {}], // dunno
        username: 'jack'
      },
      getters: {
        authUser: (state) => state.user
      },
      actions: {
        fetchAuthUsersPosts () {},
        registerUserWithEmailAndPassword () {},
        signInWithGoogle () {}
      }
    }
  }
})

// (store, ...restSettings)
// export function prepareMockOptions (store, globalComponents = null, components = null, methods = null, route = null, router = null, props = null, plugins = null) {
//   const options = {
//     props: {
//       ...props
//     },
//     global: {
//       plugins: [store, ...plugins],
//       components: { ...globalComponents },
//       mocks: {
//         $route: route,
//         $router: router
//       }
//     },
//     components: { ...components },
//     methods: {
//       ...methods
//     }
//   }

//   return options
// }

export const mockRouter = { beforeEach () { } }

export const mockRoute = { name: 'SignIn', path: '/somewhere/' }
