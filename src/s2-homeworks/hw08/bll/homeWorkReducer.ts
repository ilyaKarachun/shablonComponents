import {UserType} from '../HW8'

type ActionType =
    | ReturnType<typeof getSortAC>
    | ReturnType<typeof getCheckAC>

export const getSortAC = (payload: 'up' | 'down') => ({type: 'sort', payload})
export const getCheckAC = (payload: number) => ({type: 'check', payload})

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === "up") {
                return [...state].sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            }
            if (action.payload === "down") {
                return [...state].sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            }
            return state
        }
        case 'check': {
            return state.filter(tl => tl.age > action.payload)
        }
        default:
            return state
    }
}
