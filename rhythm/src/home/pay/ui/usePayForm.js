import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionCreator as ac} from '../index'

const usePayForm = () => {
    const dispatch = useDispatch()

    const payForm = useSelector(state => state.pay.payForm)

    const changeCourt = useCallback((court) => {
        dispatch(ac.changeCourt(court))
    },[dispatch])

    
    const changeRegion = useCallback((region) => {
        dispatch(ac.changeRegion(region))
    },[dispatch])

    const changeParty = useCallback((party) => {
        dispatch(ac.changeParty(party))
    },[dispatch])

    const changeCaseId = useCallback((caseId) => {
        dispatch(ac.changeCaseId(caseId))
    },[dispatch])

    const changeNews = useCallback((news) => {
        dispatch(ac.changeNews(news))
    },[dispatch])

    const changeLayout = useCallback((layout) => {
        dispatch(ac.changeLayout(layout))
    },[dispatch])

    const changeCount = useCallback((count) => {
        dispatch(ac.changeCount(count))
    },[dispatch])

    const changeInvoice = useCallback((invoice) => {
        dispatch(ac.changeInvoice(invoice))
    },[dispatch])

    const changeAddress = useCallback((address) => {
        dispatch(ac.changeAddress(address))
    },[dispatch])

    const changeHtml = useCallback((html) => {
        dispatch(ac.changeHtml(html))
    },[dispatch])

    return {
        payForm,
        changeCourt,
        changeRegion,
        changeParty,
        changeCaseId,
        changeNews,
        changeLayout,
        changeCount,
        changeInvoice,
        changeAddress,
        changeHtml,
    }

}

export default usePayForm