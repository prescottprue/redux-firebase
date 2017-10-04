import React from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { withContext, getContext, withHandlers } from 'recompose'
import { connect } from 'react-redux';
// import { firebaseConnect } from 'redux-firebase';
import Todo from './Todo';
import NewTodo from './NewTodo';

const Todos = ({ todos, uid, firebase }) => (
  <div>
    <NewTodo
      onNewSubmit={(newTodo) =>
        firebase.push('todos', { ...newTodo, owner: 'Anonymous' })
      }
    />
    {
      todos
      ?
        todos.map((todo, i) => (
          <Todo
            key={`${todo.key}-${i}`}
            text={todo.text}
            owner={todo.owner}
            done={todo.done}
            disabled={todo.owner !== uid}
            onDoneClick={() =>
              firebase.update(`todos/${todo.key}`, { done: !todo.done })
            }
          />
        ))
      :
        <span>Loading</span>
    }
  </div>
);

const withStore = compose(
  withContext({ store: PropTypes.object }, () => {}),
  getContext({ store: PropTypes.object }),
)

export default compose(
  withStore,
  withHandlers({
    loadData: props => err => props.store.firebase.watchEvent('on', 'todos')
  }),
  connect(({ firebase }) => ({ // state.firebase
    // ImmutableJS map (for plain js checkout v2)
    todos: firebase.ordered.todos,
    uid: firebase.profile.uid
  }))
)(Todos)
