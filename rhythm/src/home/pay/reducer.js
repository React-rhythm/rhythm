const defaultState = {
    payForm: {
        court : '',
        region : '',
        party : '',
        payState : '',
        news : '',
        layout : '',
        count : '',
        invoice : '',
        address : ''
    }
}

const reducer = (state = defaultState,action) => {
    switch(action.type) {
        case 'changeCourt':
            return {
                payForm:{
                    ...state.payForm,
                    court:action.court
                }
            }
        case 'changeRegion':
            return {
                payForm:{
                    ...state.payForm,
                    region:action.region
                }
            }
        case 'changeParty':
            return {
                payForm:{
                    ...state.payForm,
                    party:action.party
                }
            }
        case 'changePayState':
            return {
                payForm:{
                    ...state.payForm,
                    payState:action.payState
                }
            }
        case 'changeNews':
            return {
                payForm:{
                    ...state.payForm,
                    news:action.news
                }
            }
        case 'changeLayout':
            return {
                payForm:{
                    ...state.payForm,
                    layout:action.layout
                }
            }
        case 'changeCount':
            return {
                payForm:{
                    ...state.payForm,
                    count:action.count
                }
            }
        case 'changeInvoice':
            return {
                payForm:{
                    ...state.payForm,
                    invoice:action.invoice
                }
            }
        case 'changeAddress':
            return {
                payForm:{
                    ...state.payForm,
                    address:action.address
                }
            }
        default:
            return state
    }
}

export default reducer