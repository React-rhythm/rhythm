const defaultState = {
    form: {
        casetype : '',
        court : '',
        region : '',
        idcard : '',
        phoneid : '',
        party : ''
    }
  }

  const reducer = (state = defaultState, action) => {
      switch(action.type) {
        case 'changeFormType':
            return {
                form:{
                    ...state.form,
                    casetype:action.formType
                }
            }
        case 'changeFormCourt':
            return {
                form:{
                    ...state.form,
                    court:action.formCourt
                }
            }
        case 'changeFormRegion':
            return {
                form:{
                    ...state.form,
                    region:action.formRegion
                }
            }
        case 'changeFormIdcard':
            return {
                form:{
                    ...state.form,
                    idcard:action.formIdcard
                }
            }
        case 'changeFormPhoneid':
            return {
                form:{
                    ...state.form,
                    phoneid:action.formPhoneid
                }
            }
        case 'changeFormParty':
            return {
                form:{
                    ...state.form,
                    party:action.formParty
                }
            }
        default:
            return state
      }
  }

  export default reducer