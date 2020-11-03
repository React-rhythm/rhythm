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
const changeFormPhoneid = formPhoneid => {
    return {
      type: 'changeFormPhoneid',
      formPhoneid
    }
}
const changeFormParty = formParty => {
    return {
      type: 'changeFormParty',
      formParty
    }
}
const changeFormPicture = formPicture => {
  console.log(1);
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

  export default {
    changeFormType,
    changeFormCourt,
    changeFormRegion,
    changeFormIdcard,
    changeFormPhoneid,
    changeFormParty,
    changeFormPicture,
    changeFormCaseid
}