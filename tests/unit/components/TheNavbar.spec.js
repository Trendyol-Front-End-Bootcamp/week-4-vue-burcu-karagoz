import { mount } from '@vue/test-utils'
import Navbar from '@/components/TheNavbar'

test('renders a todo', () => {
  const wrapper = mount(Navbar)

  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Starshfasfsdips')
});