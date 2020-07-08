
export function getTotalNumFromRes(res) {
  if(res.data) {
    return res.data.total || 0
  } else {
    return 0
  }
}

export function getTableDataFromResponse(res) {
  if(res.data) {
    return res.data.data || []
  } else {
    return []
  }
}

export function pageParams(page) {
  return {
    page: page.currentPage,
    pagesize: page.pageSize
  }
}

export function assertRequestSuccess(res) {
  return res.data.success === true
}

export function handleContentFieldChange(val, formData, field){
  const content = JSON.parse(formData.content)
  content[field] = val
  formData.content = JSON.stringify(content)
  return formData
}
