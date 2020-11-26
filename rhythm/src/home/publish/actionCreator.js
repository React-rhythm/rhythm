const changeFormType = formType => {
  return {
      type: 'changeFormType',
      formType
    }
}
const changeFormCourt = formCourt => {
    return {
      type: 'changeFormCourt',
      formCourt
    }
}
const changeFormRegion = formRegion => {
    return {
      type: 'changeFormRegion',
      formRegion
    }
}
const changeFormIdcard = formIdcard => {
    return {
      type: 'changeFormIdcard',
      formIdcard
    }
}
const changeFormPhone = formPhone => {
    return {
      type: 'changeFormPhone',
      formPhone
    }
}
const changeFormParty = formParty => {
    return {
      type: 'changeFormParty',
      formParty
    }
}
const changeFormPicture = formPicture => {
  console.log(formPicture);
    return {
      type: 'changeFormPicture',
      formPicture
    }
}
const changeFormCaseid = formCaseid => {
    return {
      type: 'changeFormCaseid',
      formCaseid
    }
}
const changeFormDay = formDay => {
    return {
      type: 'changeFormDay',
      formDay
    }
}
const changeFormNoticeName = formNoticeName => {
    return {
      type: 'changeFormNoticeName',
      formNoticeName
    }
}

  export default {
    changeFormType,
    changeFormCourt,
    changeFormRegion,
    changeFormIdcard,
    changeFormPhone,
    changeFormParty,
    changeFormPicture,
    changeFormCaseid,
    changeFormDay,
    changeFormNoticeName
}