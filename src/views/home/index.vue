<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
  

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const tableTitle = [
    {name:'name'},
    {name:'date'},
    {name:'address'},

]
const EditRow = (index: number) => {
    console.log(tableData[index]);
    router.push({
        path:"/layout/home/detail",
        query:tableData[index]
    });
    
}
</script>
<template>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column 
    v-for="(item, index) in tableTitle" 
    :key="item.name" 
    :prop="item.name" 
    :label="item.name" 
    width="180" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="EditRow(scope.$index)"
        >
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped>
</style>