const changeCourt = (court) => {
    return {
        type:'changeCourt',
        court
    }
}

const changeRegion = (region) => {
    return {
        type:'changeRegion',
        region
    }
}

const changeParty = (party) => {
    return {
        type:'changeParty',
        party
    }
}

const changePayState = (payState) => {
    return {
        type:'changePayState',
        payState
    }
}

const changeNews = (news) => {
    return {
        type:'changeNews',
        news
    }
}

const changeLayout = (layout) => {
    return {
        type:'changeLayout',
        layout
    }
}

const changeCount = (count) => {
    return {
        type:'changeCount',
        count
    }
}

const changeInvoice = (invoice) => {
    return {
        type:'changeInvoice',
        invoice
    }
}
const changeAddress = (address) => {
    return {
        type:'changeAddress',
        address
    }
}

export default {
    changeCourt,
    changeRegion,
    changeParty,
    changePayState,
    changeNews,
    changeLayout,
    changeCount,
    changeInvoice,
    changeAddress
}


