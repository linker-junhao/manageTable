export function callNewOneDialog(ref) {
  this.$refs[ref].callNewOneDialog()
}

export function callEditOneDialog(ref) {
  console.log(this)
  this.$refs[ref].callEditDialog()
}

export function callDeleteAction(ref) {
  this.$refs[ref].deleteItems()
}

export function callRefreshAction(ref) {
  this.$refs[ref].formDataRequest()
}

export function requestTableData(ref) {
  this.$refs[ref].formDataRequest()
}

export default {
  callNewOneDialog,
  callEditOneDialog,
  callDeleteAction,
  callRefreshAction,
  requestTableData
}
