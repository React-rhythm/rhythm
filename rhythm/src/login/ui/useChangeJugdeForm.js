import { useCallback } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { actionCreator as ac } from '../index'

const useChangeJudgeForm = () => {
    const name = useSelector(state => state.login.judgeForm.name)
    const court = useSelector(state => state.login.judgeForm.court)
    const userName = useSelector(state => state.login.judgeForm.userName)
    const phoneNumber = useSelector(state => state.login.judgeForm.phoneNumber)
    const verificationCode = useSelector(state => state.login.judgeForm.verificationCode)
    const password = useSelector(state => state.login.judgeForm.password)
    const repassword = useSelector(state => state.login.judgeForm.repassword)
    const dispatch = useDispatch()

    const handleNameChange = useCallback((name) => {
            dispatch(ac.changeName(name))
      }, [dispatch])

    const handleCourtChange = useCallback((court) => {
            dispatch(ac.changeCourt(court))
      }, [dispatch])

    const handlePhoneNumberChange = useCallback((phoneNumber) => {
            dispatch(ac.changePhoneNumber(phoneNumber))
      }, [dispatch])

    const handleVerificationCodeChange = useCallback((verificationCode) => {
            dispatch(ac.changeVerificationCode(verificationCode))
      }, [dispatch])

    const handlePasswordChange = useCallback((Password) => {
            dispatch(ac.changePassword(Password))
      }, [dispatch])

    const handleRepasswordChange = useCallback((Repassword) => {
            dispatch(ac.changeRepassword(Repassword))
      }, [dispatch])

    return {
      name,
      userName,
      court,
      phoneNumber,
      verificationCode,
      password,
      repassword,
      handleNameChange,
      handleCourtChange,
      handlePhoneNumberChange,
      handleVerificationCodeChange,
      handlePasswordChange,
      handleRepasswordChange
      
    }
}

export default useChangeJudgeForm