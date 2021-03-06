import { Context, state } from 'app.cerebral'

export function toggleAllChecked({ store, get }: Context) {
  const isCompleted = !get(state.isAllChecked)
  const uids = get(state.uids)

  uids.forEach((uid) => {
    store.set(state.todos[uid].completed, isCompleted)
  })
}

export function addTodo({ get, store, id }: Context) {
  store.set(state.todos[id.create()], {
    title: get(state.newTodoTitle),
    completed: false,
  })
}

export function clearCompletedTodos({ store, get }: Context) {
  const todos = get(state.todos)

  Object.keys(todos).forEach((uid) => {
    if (todos[uid].completed) {
      store.unset(state.todos[uid])
    }
  })
}
