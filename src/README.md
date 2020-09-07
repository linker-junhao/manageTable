```vue
<template>
  <div id="app">
    <manage-table
            ref="m-tbl"
            :assert-request-success="assertRequestSuccess"
            :columns-definition="def"
            :data-src-url="'/category'"
            :construct-page-params="pageParams"
            :get-total-page-from-response="getTotalNumFromRes"
            :axios-requester="requester"
            :get-table-data-from-response="getTableDataFromResponse"
            :operate-area-style="opStyle"
    />
    <el-button type="primary" @click="callEditOneDialog('m-tbl')">编辑</el-button>
  </div>
</template>

<script>
  import ManageTable from "../src/ManageTable.vue";
  import {getTotalNumFromRes, getTableDataFromResponse, pageParams, assertRequestSuccess} from '../example/utils.js'
  import axios from "axios";
  import { Input, Button } from "element-ui";
  import Vue from 'vue'

  import {callEditOneDialog} from "../src/callFuncUtils";
  
  Vue.use(Input)
  Vue.use(Button)
  const requester = axios.create({
    baseURL: 'http://sp.whhda.xyz/backstage',
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })

  export default {
    name: 'App',
    components: {
      ManageTable
    },
    data() {
      return {
        requester,
        opStyle: {
          'position': 'absolute',
          'z-index': '2',
          'left': '100px',
          'top': '46px',
          'width': '200px',
          'display': 'flex',
          'justify-content': 'space-around',
          'flex-direction': 'row',
          'height': 'auto'
        },
        def: [
          {
            label: 'ID',
            prop: 'id',
            sortable: true,
          },
          {
            label: '类别',
            prop: 'name',
            editable: true,
            input: function(h, f) {
              return h('el-input', {
                props: {
                  value: f.name,
                  size: 'mini'
                },
                on: {
                  input: function(val) {
                    f.name = val
                  }
                }
              })
            },
            filters: [{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}],
            filterMethod: (value, row, column) => { console.log(value, row, column); return true }
          }
        ]
      }
    },
    methods: {
      assertRequestSuccess,
      pageParams,
      getTotalNumFromRes,
      getTableDataFromResponse,
      callEditOneDialog
    }
  }
</script>

<style scoped>
</style>

```
