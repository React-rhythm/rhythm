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

  export default {
    changeFormType,
    changeFormCourt,
    changeFormRegion,
    changeFormIdcard,
    changeFormPhoneid,
    changeFormParty
}