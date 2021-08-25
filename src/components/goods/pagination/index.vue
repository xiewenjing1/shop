<template>
  <div class="pagination-box">
    <el-pagination
      background
      layout="prev, pager, next"
      :pager-count="5"
      :total="670"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  updated() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss'>
@mixin base-style {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-weight: normal !important;
  border: 1px solid #e5e5e5;
  border-radius: 50% !important;
}
.pagination-box {
  text-align: center;
  margin-top: 40px;
  .btn-prev,
  .btn-next {
    @include base-style;
  }
  .el-pager {
    li {
      @include base-style;
      margin: 0 10px !important;
      &:not(.disabled).active {
        color: #fff;
        background-color: #13d1be !important;
        border-color: #13d1be;
      }
      &:not(.disabled):hover {
        color: #606266 !important;
      }
    }
  }
}
</style>