<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="javascript:void(0)" @click.prevent="goHome"
            >PCMall</a
          >
          <span>></span>
          <span class="link-text">{{ $route.meta.name }}</span>
        </div>
      </div>
    </div>
    <div class="list-wrap w">
      <div class="p-list-select">
        <!-- 选择 容器 -->
        <pc-goods-select :selectList="testSelctData"> </pc-goods-select>
        <!-- list 容器 -->
        <div class="p-pagination">
          <ul class="sort-con">
            <li
              :class="{ 'sort-item': true, active: sortActive }"
              data-type="default"
              @click="changeSort('default')"
            >
              默认排序
            </li>
            <li
              :class="{
                'sort-item': true,
                active: priceActive,
                asc: isAsc,
                desc: isDesc
              }"
              data-type="price"
              @click="changeSort('price')"
            >
              <span>价格</span>
              <i class="fa fa-sort-asc"></i>
              <i class="fa fa-sort-desc"></i>
            </li>
            <li
              :class="{ 'sort-item': true, active: commentActive }"
              data-type="default"
              @click="changeSort('comment')"
            >
              好评最多
            </li>
          </ul>
          <pc-goods-list
            class="p-list-con"
            :productList="productList"
          ></pc-goods-list>
          <!-- 分页容器 -->
          <pagination class="pagination"></pagination>
        </div>
      </div>
      <!-- 猜你喜欢容器 -->
      <pcGoodslike class="pc-goods-like" :likeData="likeData"></pcGoodslike>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import pcGoodsList from 'components/goods/list';
import pcGoodsSelect from 'components/goods/select';
import pagination from 'components/goods/pagination';
import pcGoodslike from 'components/goods/like';
import { testSelctData, productList, likeData } from './test';

export default {
  data() {
    return {
      sortActive: true,
      priceActive: false,
      commentActive: false,
      isAsc: false,
      isDesc: false,
      orderBy: 'name asc',
      testSelctData,
      likeData,
      productList
    };
  },
  created() {},
  activated() {},
  methods: {
    changeSort(sort) {
      switch (sort) {
        case 'price':
          this.sortActive = false;
          this.commentActive = false;
          this.priceActive = true;
          this.orderBy = 'price asc';
          this.selectSort();
          this.sort();
          break;
        case 'comment':
          this.sortActive = false;
          this.commentActive = true;
          this.priceActive = false;
          this.orderBy = 'comment';
          this.sort();
          break;
        default:
          this.sortActive = true;
          this.commentActive = false;
          this.priceActive = false;
          this.orderBy = 'name asc';
          this.sort();
      }
    },
    selectSort() {
      if (this.isDesc) {
        this.isAsc = false;
        this.isDesc = true;
        this.orderBy = 'price desc';
      } else {
        this.isAsc = true;
        this.isDesc = false;
        this.orderBy = 'price asc';
      }
    },
    sort() {
      this.$pcBus.$emit('productSort', this.orderBy);
    }
  },
  components: {
    pcGoodsList,
    pcGoodsSelect,
    pcGoodslike,
    pagination
  }
};
</script>
<style rel='stylesheet/scss' lang='scss'>
.list-wrap {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  .p-list-select {
    margin-bottom: 14px;
    .p-pagination {
      margin-top: 40px;
    }
  }
  .p-list-con {
    width: 950px;
  }

  .pc-goods-like {
    width: 230px;
  }
}
</style>
