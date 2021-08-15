<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="javascript:void(0)" @click.prevent="goHome">PCMall</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
      </div>
    <div class="list-wrap w">
      <div class="p-list-select">
      <!-- 选择 容器 -->
      <pc-goods-select :selectList = testData>
      </pc-goods-select>
      <!-- list 容器 -->
      <div>
            <ul class="sort-con">
        <li :class="{'sort-item': true, 'active': sortActive}" data-type="default" @click="changeSort('default')">默认排序
        </li>
        <li :class="{'sort-item': true, 'active': !sortActive, 'asc': isAsc, 'desc': isDesc}" data-type="price"
            @click="changeSort('price')">
          <span>价格</span>
          <i class="fa fa-sort-asc"></i>
          <i class="fa fa-sort-desc"></i>
        </li>
      </ul>
      <pc-goods-list class="p-list-con"></pc-goods-list>
      </div>
      </div>
      <!-- 猜你喜欢容器 -->
      <pcGoodslike class="pc-goods-like"></pcGoodslike>
      </div>
      <!-- 分页容器 -->
      <div class="pagination"></div>
    </div>
  
</template>
<script type="text/ecmascript-6">
  import pcGoodsList from 'components/goods/list';
  import pcGoodsSelect from 'components/goods/select';
  import pcGoodslike from 'components/goods/like';
  import { testData } from './test';
  
  export default {
    data() {
      return {
        sortActive: true,
        isAsc: false,
        isDesc: false,
        orderBy: 'name asc',
        testData
      };
    },
    created() {
    },
    activated() {
    },
    methods: {
      changeSort(sort) {
        if (sort === 'price') {
          this.sortActive = false;
          if (!this.isAsc && !this.isDesc) {
            this.isAsc = true;
            this.orderBy = 'price asc';
          } else {
            if (this.isAsc) {
              this.isAsc = false;
              this.isDesc = true;
              this.orderBy = 'price desc';
            } else {
              this.isAsc = true;
              this.isDesc = false;
              this.orderBy = 'price asc';
            }
          }
        } else {
          this.sortActive = !this.sortActive;
          this.orderBy = 'name asc';
        }
        this.$pcBus.$emit('productSort', this.orderBy);
      }
    },
    components: {
      pcGoodsList,
      pcGoodsSelect,
      pcGoodslike
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
.list-wrap{
  background-color: red;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  .p-list-select{
    background-color: lightblue;
  }
  .p-list-con{
    width: 950px;
    background-color: yellow;
  }
  .pc-goods-like{
    width: 230px;
    background-color: lightgreen;
  }
}
</style>
