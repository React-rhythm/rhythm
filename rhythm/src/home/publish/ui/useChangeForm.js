import { useCallback } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { actionCreator as ac } from '../index'

const useChangeForm = () => {
    const casetype = useSelector(state => state.publish.form.casetype)
    const court = useSelector(state => state.publish.form.court)
    const region = useSelector(state => state.publish.form.region)
    const idcard = useSelector(state => state.publish.form.idcard)
    const phoneid = useSelector(state => state.publish.form.phoneid)
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

    const handlePhoneidChange = useCallback((phoneidInfo) => {
            dispatch(ac.changeFormPhoneid(phoneidInfo))
      }, [dispatch])

    const handlePartyChange = useCallback((partyInfo) => {
            dispatch(ac.changeFormParty(partyInfo))
      }, [dispatch])

    return {
        casetype,
        court,
        region,
        idcard,
        phoneid,
        party,
        handleTypeChange,
        handleCourtChange,
        handleRegionChange,
        handleIdcardChange,
        handlePhoneidChange,
        handlePartyChange
    }
}

export default useChangeForm