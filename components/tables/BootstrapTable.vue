<template>
  <el-card>
    <div class="table-component">
      <!-- Top heading  -->
      <el-row class="table-top-header">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <h5>Paginated tables</h5>
          <p>
            This is a client side example of paginated tables using element-ui
            tables.
          </p>
        </el-col>
      </el-row>
      <el-divider />

      <!-- Heading  -->
      <el-row class="table-top">
        <el-col :sm="3" :md="3" :lg="3" :xl="3">
          <el-pagination background layout="sizes" :total="1000" />
        </el-col>
        <el-col :sm="15" :md="15" :lg="15" :xl="15"> &nbsp; </el-col>
        <el-col :sm="6" :md="6" :lg="6" :xl="6">
          <el-input
            v-model="input3"
            placeholder="Search..."
            class="input-with-select"
          >
            <template #prepend>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </el-col>
      </el-row>
      <br />

      <!-- Table -->
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />

        <el-table-column label="Date" sortable width="250">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>

        <el-table-column property="name" sortable label="Name" width="330" />

        <el-table-column
          property="address"
          label="Address"
          width="500"
          show-overflow-tooltip
          sortable
        />

        <el-table-column label="Actions">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              ><i class="fa fa-thumbs-up" aria-hidden="true"></i></el-button
            >
            <el-button
              size="small"
              type="warning"
              @click="handleEdit(scope.$index, scope.row)"
              ><i class="fa fa-thumbs-up" aria-hidden="true"></i></el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleEdit(scope.$index, scope.row)"
              ><i class="fa fa-times" aria-hidden="true"></i></el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- // PAGINATION -->
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="1000"
      />
    </div>
  </el-card>
</template>


<script setup >
import { Search } from "@element-plus/icons-vue";
const tableData = [
  {
    date: "2016-05-03",
    name: "Amm",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Baa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Caa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-08",
    name: "Daa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>