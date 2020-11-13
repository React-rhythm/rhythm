const defaultState = {
    payForm: {
        court : '',
        region : '',
        party : '',
        caseId : '',
        news : '',
        layout : '',
        count : '',
        invoice : '',
        address : '',
        html : ''
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
        case 'changeCaseId':
            return {
                payForm:{
                    ...state.payForm,
                    caseId:action.caseId
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
        case 'changeHtml':
            console.log(action.html)
            return {
                payForm:{
                    ...state.payForm,
                    html:action.html
                }
            }
            // console.log(payForm)
        default:
            return state
    }
}

export default reducer