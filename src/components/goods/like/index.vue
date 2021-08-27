<template>
  <div class="p-guess">
    <h4>猜你喜欢</h4>
    <ul>
      <li v-for="item in likeData" :key="item.id">
        <a>
          <div class="p-guess-imgBox">
            <img :src="item.mainImage" alt="name" />
          </div>
          <p class="p-guess-name">{{ item.name }}</p>
          <p class="p-guess-address">{{ item.address }}</p>
          <p class="p-guess-price"><b>￥</b>{{ item.price }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    likeData: Array
  },
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
<style scoped lang='scss'>
.p-guess {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px;
  margin-left: 5px;
  box-sizing: border-box;
  background-color: #fff;
  ul {
    li {
      margin-bottom: 20px;
    }
  }
  h4 {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 12px;
    color: #333;
  }
  .p-guess-imgBox {
    height: 106px;
    width: 188px;
    background-size: 60% auto;
    img {
      border-radius: 4px;
    }
  }
  .p-guess-name {
    font-size: 14px;
    line-height: 20px;
    color: #222;
    margin: 10px 0 4px;
  }
  .p-guess-address {
    font-size: 12px;
    line-height: 17px;
    color: #999;
  }
  .p-guess-price {
    font-size: 22px;
    color: #f60;
    line-height: 27px;
    b {
      font-weight: 400;
      font-size: 14px;
    }
  }
}
</style>