import axios from "axios";

export default {
	state: {
		searchValue: '',
		resultText: 'Начните поиск',
		isLoading: false,
		currentEmployee: {},
		currentEmployeeId: null,
		employeesList: []
	},
	getters: {
		searchValue(state) {
			return state.searchValue
		},
		isLoading(state) {
			return state.isLoading
		},
		employeesList(state) {
			return state.employeesList
		},
		currentEmployee(state) {
			return state.currentEmployee
		},
		currentEmployeeId(state) {
			return state.currentEmployeeId
		},
		resultText(state) {
			return state.resultText
		},
	},
	mutations: {
		SET_SEARCH_VALUE(state, value) {
			state.searchValue = value
		},
		SET_EMPLOYEES_LIST(state, list) {
			state.employeesList = list
		},
		SET_CURRENT_EMPLOYEE(state, employee) {
			state.currentEmployee = employee
		},
		SET_CURRENT_EMPLOYEE_ID(state, id) {
			state.currentEmployeeId = id
		},
		SET_IS_LOADING(state, status) {
			state.isLoading = status
		},
		SET_RESULT_TEXT(state, text) {
			state.resultText = text
		},
	},
	actions: {
		setSearchValue({ commit }, payload) {
			commit('SET_SEARCH_VALUE', payload)
		},
		setCurrentEmployee({ commit }, payload) {
			commit('SET_CURRENT_EMPLOYEE', payload)
		},
		setCurrentEmployeeId({ commit }, payload) {
			commit('SET_CURRENT_EMPLOYEE_ID', payload)
		},
		async fetchEmployees({ commit, dispatch }, payload) {
			dispatch('setCurrentEmployee', {})
			dispatch('setCurrentEmployeeId', null)
			try {
				commit('SET_IS_LOADING', true)
				const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?${payload}`)

				if (!data.length) {
					commit('SET_RESULT_TEXT', 'Ничего не найдено')
				}

				const employees = data.map(employee => {
					return {
						id: employee.id,
						email: employee.email,
						name: employee.name,
						phone: employee.phone,
						username: employee.username
					}
				})
				commit('SET_EMPLOYEES_LIST', employees)
			} catch (e) {
				commit('SET_RESULT_TEXT', e)
			} finally {
				commit('SET_IS_LOADING', false)
			}
		}
	}
}
