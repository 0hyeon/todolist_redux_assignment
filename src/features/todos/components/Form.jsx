import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../../redux/modules/todos.js'

const Form = () => {
  const todos = useSelector((state) => {
    return state.todos
  }) //state는 중앙데이터 전체
  const dispatch = useDispatch()

  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    body: '',
    isDone: false,
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (todo.title.trim() === '' || todo.body.trim() === '') return

    const newUser = {
      id: todos.todos.length + 1,
      title: todo.title,
      body: todo.body,
      isDone: false,
    }

    dispatch(addTodo(newUser)) //dispatch사용
    setTodo({
      //submit 시 빈값기재
      title: '',
      body: '',
    })
  }

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  )
}

export default Form

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`
