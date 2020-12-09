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
  import {getTotalNumFromRes, getTableDataFromResponse, pageParams, assertRequestSuccess} from './utils.js'
  import axios from "axios";
  import {callEditOneDialog} from "../src/callFuncUtils";

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
    components: {ManageTable},
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
            prop: 'id'
          },
          {
            label: '类别',
            prop: 'name',
            editable: true,
            sortable: true,
            input: function (h, r) {
              return h('div', JSON.stringify(r))
            }
          }
        ]
      }
    },
    methods: {
      assertRequestSuccess,
      pageParams,
      getTotalNumFromRes,
      getTableDataFromResponse,
      callEditOneDialog,
    }
  }
</script>

<style scoped>
</style>
