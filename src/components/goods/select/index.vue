<template>
  <div class="select-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix" v-if="hasSelect || hasArea">
        <span class="conditon">已选条件</span>
        <el-button
          class="selecte-button"
          @click="clear('hasSelect')"
          v-if="hasSelect"
          >{{ hasSelect }}<i class="el-icon-arrow-right el-icon-close"></i
        ></el-button>
        <el-button
          class="selecte-button"
          @click="clear('hasArea')"
          v-if="hasArea"
          >{{ hasArea }}<i class="el-icon-arrow-right el-icon-close"></i
        ></el-button>
        <el-button type="text" class="clear-all" @click="clear('all')"
          >.清除全部</el-button
        >
      </div>
      <div
        v-for="(node, nodeId) in selectList"
        :key="nodeId"
        class="text item select-con"
      >
        <div class="select-name">{{ node.name }}</div>
        <div
          :class="[{ 'selecte-active': !isActive || nodeIndex !== nodeId}, 'select-all']"
          @click="selectAll(nodeId)"
        >
          全部
        </div>
        <div class="select-con-open selecte-con-list" v-if="node.con.openDrop">
          <el-dropdown
            v-for="(conItem, id) in node.con.conList"
            :key="id"
            @command="handleCommand"
            class="selecte-con-item"
          >
            <span class="el-dropdown-link">
              {{ conItem.name
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, id) in conItem.list"
                :key="id"
                :command="{item, nodeId, id}"
                :class="{
                  'selecte-active': index === id && nodeIndex === nodeId,
                }"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else>
          <ul class="selecte-con-list">
            <li
              v-for="(item, id) in node.con.conList"
              class="selecte-con-item"
              :key="id"
            >
              <el-button
                @click="select(item, nodeId, id)"
                :class="{
                  'selecte-active': index === id && nodeIndex === nodeId,
                }"
                >{{ item }}</el-button
              >
            </li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    selectList: Array
  },
  data() {
    return {
      hasSelect: '',
      hasArea: '',
      isActive: false,
      index: '',
      nodeIndex: ''
    };
  },
  created() {},
  mounted() {
  },
  activated() {},
  updated() {},
  methods: {
    select(menu, nodeId, id) {
      this.hasSelect = menu;
      this.nodeIndex = nodeId;
      this.index = id;
      this.isActive = true;
    },
    selectAll(val) {
      this.isActive = false;
      this.index = '';
      this.nodeIndex = '';
      if (val === 1) {
        this.hasArea = '';
      } else {
        this.hasSelect = '';
      }
    },
    clear(name) {
      if (name === 'all') {
        this.hasSelect = '';
        this.hasArea = '';
      } else {
        this[name] = '';
      }
      this.isActive = false;
      this.index = '';
      this.nodeIndex = '';
    },
    handleCommand(command) {
      const { item, nodeId, id } = command;
      this.hasArea = item;
      this.nodeIndex = nodeId;
      this.index = id;
      this.isActive = true;
    }
  },
  computed: {
    newCon() {
      return (con) => {
        const result = [];
        const uesCon = [];
        for (let i = 0; i < con.length; i += 6) {
          uesCon.push(con.slice(i, i + 6));
          return uesCon;
        }
        return result.concat(uesCon);
      };
    }
  }
};
</script>
<style scoped lang='scss'>
//   @import '../../../assets/styles/componnents/goods-select';
.box-card {
  color: #666;
  font-size: 14px;
  .conditon {
    margin-left: 20px;
    margin-right: 18px;
  }
  .clear-all {
    padding: 3px 0;
    color: #999;
  }
  .selecte-button {
    font-size: 12px;
    border: 1px solid #13d1be;
    color: #13d1be;
    height: 18px;
    margin-right: 10px;
    padding: 0 7px;
    border-radius: 10px !important;
  }
  .el-card__header {
    cursor: pointer;
    height: 20px;
    padding: 10px 0 10px 20px;
    line-height: 20px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 12px;
    .el-icon-close {
      font-size: 12px;
    }
  }
  .select-con {
    padding: 10px 0 0;
    padding-left: 20px;
    line-height: 20px;
    display: flex;
    display: -webkit-flex; /* Safari */
    .select-name {
      width: 60px;
      color: #333;
    }
    .select-all {
      width: 53px;
      height: 20px;
      text-align: center;
      margin: 0 13px 0 9px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 100px;
    }
    .selecte-active {
      border-radius: 100px !important;
      background: #13d1be;
      color: #fff !important;
    }
    .selecte-con-list {
      width: 788px;
      border-bottom: 1px solid #e5e5e5;
      color: #666;
      display: flex;
      flex-wrap: wrap;
      .selecte-con-item {
        min-width: 125px;
        height: 28px;
        font-size: 14px;
        color: #666;
        font-weight: 500;
      }
      .el-dropdown-link {
        cursor: pointer;
      }
      .el-button {
        color: #666;
        padding: 2px 10px;
        border: none;
      }
    }
  }
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled) {
  &:hover {
   border: none !important;
   background-color: #fff !important;
   color: #13d1be;
  }
}
</style>