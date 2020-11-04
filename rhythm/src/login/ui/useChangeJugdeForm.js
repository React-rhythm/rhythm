import { useCallback } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { actionCreator as ac } from '../index'

const useChangeJudgeForm = () => {
    const realname = useSelector(state => state.login.judgeForm.realname)
    const court = useSelector(state => state.login.judgeForm.court)
    const username = useSelector(state => state.login.judgeForm.username)
    const phoneid = useSelector(state => state.login.judgeForm.phoneid)
    const verificationCode = useSelector(state => state.login.judgeForm.verificationCode)
    const password = useSelector(state => state.login.judgeForm.password)
    const replaynewpassword = useSelector(state => state.login.judgeForm.replaynewpassword)
    const dispatch = useDispatch()

    const handleNameChange = useCallback((realname) => {
            dispatch(ac.changeName(realname))
      }, [dispatch])

      const handleUserNameChange = useCallback((username) => {
        dispatch(ac.changeUserName(username))
        }, [dispatch])

    const handleCourtChange = useCallback((court) => {
            dispatch(ac.changeCourt(court))
      }, [dispatch])

    const handlephoneidChange = useCallback((phoneid) => {
            dispatch(ac.changePhoneId(phoneid))
      }, [dispatch])

    const handleVerificationCodeChange = useCallback((verificationCode) => {
            dispatch(ac.changeVerificationCode(verificationCode))
      }, [dispatch])

    const handlePasswordChange = useCallback((password) => {
            dispatch(ac.changePassword(password))
      }, [dispatch])

    const handlereplaynewpasswordChange = useCallback((replaynewpassword) => {
            dispatch(ac.changereplaynewpassword(replaynewpassword))
      }, [dispatch])

    return {
      realname,
      username,
      court,
      phoneid,
      verificationCode,
      password,
      replaynewpassword,
      handleNameChange,
      handleUserNameChange,
      handleCourtChange,
      handlephoneidChange,
      handleVerificationCodeChange,
      handlePasswordChange,
      handlereplaynewpasswordChange
      
    }
}

export default useChangeJudgeForm