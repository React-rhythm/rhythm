import { useCallback } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { actionCreator as ac } from '../index'

const useChangeForm = () => {
    const casetype = useSelector(state => state.publish.form.casetype)
    const court = useSelector(state => state.publish.form.court)
    const region = useSelector(state => state.publish.form.region)
    const idcard = useSelector(state => state.publish.form.idcard)
    const phone = useSelector(state => state.publish.form.phone)
    const party = useSelector(state => state.publish.form.party)
    const dispatch = useDispatch()

    const handleTypeChange = useCallback((typeInfo) => {
            dispatch(ac.changeFormType(typeInfo))
      }, [dispatch])

    const handleCourtChange = useCallback((courtInfo) => {
            dispatch(ac.changeFormCourt(courtInfo))
      }, [dispatch])

    const handleRegionChange = useCallback((regionInfo) => {
            dispatch(ac.changeFormRegion(regionInfo))
      }, [dispatch])

    const handleIdcardChange = useCallback((idcardInfo) => {
            dispatch(ac.changeFormIdcard(idcardInfo))
      }, [dispatch])

    const handlePhoneChange = useCallback((phoneInfo) => {
            dispatch(ac.changeFormPhone(phoneInfo))
      }, [dispatch])

    const handlePartyChange = useCallback((partyInfo) => {
            dispatch(ac.changeFormParty(partyInfo))
      }, [dispatch])

    const handlePictureChange = useCallback((partyInfo) => {
            dispatch(ac.changeFormPicture(partyInfo))
      }, [dispatch])

    const handleCaseidChange = useCallback((partyInfo) => {
            dispatch(ac.changeFormCaseid(partyInfo))
      }, [dispatch])
    const handleDayChange = useCallback((dayInfo) => {
            dispatch(ac.changeFormDay(dayInfo))
      }, [dispatch])

    return {
        casetype,
        court,
        region,
        idcard,
        phone,
        party,
        handleTypeChange,
        handleCourtChange,
        handleRegionChange,
        handleIdcardChange,
        handlePhoneChange,
        handlePartyChange,
        handlePictureChange,
        handleCaseidChange,
        handleDayChange
    }
}

export default useChangeForm