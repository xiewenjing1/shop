<template>
  <div>
    <div class="w">
      <ul class="keywords-list">
        <li class="keywords-item" v-for="item in homeList" :key="item.id">
          <a
            v-for="nodeContent in item.content"
            :key="nodeContent.id"
            class="link"
            target="_blank"
            href="javascript:void(0)"
            @click="goGoodsListPage('', nodeContent.name)"
            >{{ nodeContent.name }}</a
          >
        </li>
      </ul>
      <div class="banner-con">
        <pc-banner></pc-banner>
        <!--<div class="loading"></div>-->
      </div>
    </div>
    <div class="w">
      <div
        class="floor-wrap"
        v-for="(category, index1) in categoryData"
        :key="category.categoryId"
      >
        <h1 class="floor-title">
          F{{ index1 + 1 }} {{ category.categoryName }}
        </h1>
        <ul class="floor-list">
          <li
            class="floor-item"
            v-for="(item, index2) in category.categoryList"
            :key="item.categoryId"
          >
            <a
              href="javascript:void(0)"
              @click="goGoodsListPage(item.categoryId)"
            >
              <span class="floor-text">{{ item.categoryName }}</span>
              <img
                class="floor-img"
                :src="getImage(index1, index2)"
                alt="双开门冰箱"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import pcBanner from "components/banner";
import { homeList } from "./config/config";

export default {
  data() {
    return {
      categoryData: [
        {
          categoryId: "",
          categoryName: "",
          categoryList: [
            {
              categoryId: "",
              categoryName: "",
            },
          ],
        },
      ],
      homeList,
    };
  },
  mounted() {
    console.log(this.homeList, 11111);
  },
  activated() {
    // this.queryCategoryData((res) => {
    //   if (res.code === 200) {
    //     this.categoryData = res.result;
    //   } else {
    //     alert('加载主页面失败');
    //   }
    // });
  },
  methods: {
    getImage(index1, index2) {
      return require("../../assets/image/floor/floor" +
        (index1 + 1) +
        "-" +
        (index2 + 1) +
        ".jpg");
    },
    goGoodsListPage(categoryId, keyword) {
      let param = {};
      param.categoryId = categoryId;
      param.keyword = keyword;
      this.loadPage("goods-list", param);
    },
    queryCategoryData(resolve) {
      this.ajax({
        type: "GET",
        url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
        success: resolve,
      });
    },
  },
  components: {
    pcBanner,
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
