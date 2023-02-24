import { resultSuccess } from './_utilts'

const todoList = [
  {
    id: 1,
    title: 'One Day',
    content: 'hello john'
  },
  {
    id: 2,
    title: 'Two Day',
    content: 'hello arlen'
  },
  {
    id: 3,
    title: 'Three Day',
    content: 'hello turf'
  }
]

export default [
  {
    url: '/api/list',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(todoList)
    }
  }
]
