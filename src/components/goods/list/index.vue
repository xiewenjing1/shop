<template>
  <div>
    <li
      class="p-item"
      v-show="product.id !== ''"
      v-for="product in productList"
      :key="product.id"
    >
      <div class="p-img-con">
        <div class="img">
          <a class="link" @click="goProductDetailPage(product.id)">
            <div class="fl-count">{{ product.id }}</div>
            <img class="p-img" :src="product.mainImage" alt="name" />
          </a>
        </div>
        <div class="info">
          <a>
            <h4>{{ product.name }}</h4>
            <div class="source" v-if="product.point">
              <div class="star">
                <el-rate
                  v-model="product.point"
                  disabled
                  show-score
                  text-color="#222"
                  score-template="{ value }分"
                >
                </el-rate>
                <span class="comment">{{ product.commentNum }}条评论</span>
              </div>
            </div>
            <div v-else>
              <p>暂无评分</p>
            </div>
            <p class="desc">
              {{ product.address }} <span class="average">人均￥{{ product.price }}</span>
            </p>
          </a>
          <div class="other">
            <a>
              <div class="tikit" v-for="(item, id) in product.tikit" :key="id">
                <h4>{{ item.title }}</h4>
                <p>
                  <span><b class="dl">￥</b>{{ item.price }}</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
    <p class="err-tip" v-show="productList === null || productList.length < 1">
      很抱歉，实在找不到您要的商品。
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      queryInfo: {
        categoryId: '',
        keyword: '',
        pageNum: '1',
        pageSize: '10',
        orderBy: 'name asc'
      }
    };
  },
  props: {
    productList: Array
  },
  created() {
    this.$pcBus.$on('productSort', (orderBy) => {
      console.info("$on('productSort'");
      this.queryInfo.orderBy = orderBy;
      this.queryProductList();
    });
    this.$pcBus.$on('searchProduct', () => {
      console.info('$on searchProduct');
      this.queryProductList();
    });
  },
  activated() {
    this.queryProductList();
  },
  methods: {
    goProductDetailPage(productId) {
      this.loadPage('goods-detail', { productId: productId });
    },
    queryProductList() {
      this.queryInfo.categoryId = this.getUrlParam('categoryId');
      this.queryInfo.keyword = this.getUrlParam('keyword');
      this.ajax({
        url: '/uac/auth/product/queryProductList',
        data: this.queryInfo,
        success: (res) => {
          if (res.code === 200) {
            if (res.result) {
              this.productList = res.result.list ? res.result.list : [];
            } else {
              this.productList = [];
            }
          }
        }
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
