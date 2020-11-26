const defaultState = {
    form: {
        type : '',
        court : '',
        region : '',
        idcard : '',
        phone : '',
        party : '',
        picture : '',
        caseid : '',
        day : '',
        noticename : '',
    }
  }

  const reducer = (state = defaultState, action) => {
      switch(action.type) {
        case 'changeFormType':
            return {
                form:{
                    ...state.form,
                    type:action.formType
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
        case 'changeFormPhone':
            return {
                form:{
                    ...state.form,
                    phone:action.formPhone
                }
            }
        case 'changeFormParty':
            return {
                form:{
                    ...state.form,
                    party:action.formParty
                }
            }
        case 'changeFormPicture':
            console.log(action.formPicture)
            return {
                form:{
                    ...state.form,
                    picture:action.formPicture
                }
            }
        case 'changeFormCaseid':
            return {
                form:{
                    ...state.form,
                    caseid:action.formCaseid
                }
            }
        case 'changeFormDay':
            return {
                form:{
                    ...state.form,
                    day:action.formDay
                }
            }
        case 'changeFormNoticeName':
            return {
                form:{
                    ...state.form,
                    noticename:action.formNoticeName
                }
            }
        default:
            return state
      }
  }

  export default reducer