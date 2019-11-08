<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature-view/>
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control"/>

      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
        <li>list5</li>
        <li>list6</li>
        <li>list7</li>
        <li>list8</li>
        <li>list9</li>
        <li>list10</li>
      </ul>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
        <li>list5</li>
        <li>list6</li>
        <li>list7</li>
        <li>list8</li>
        <li>list9</li>
        <li>list10</li>
        <li>list11</li>
        <li>list12</li>
        <li>list13</li>
        <li>list14</li>
        <li>list15</li>
        <li>list16</li>
        <li>list17</li>
        <li>list18</li>
        <li>list19</li>
        <li>list20</li>
        <li>list21</li>
        <li>list22</li>
        <li>list23</li>
        <li>list24</li>
        <li>list25</li>
        <li>list26</li>
        <li>list27</li>
        <li>list28</li>
        <li>list29</li>
        <li>list30</li>
        <li>list31</li>
        <li>list32</li>
        <li>list33</li>
        <li>list34</li>
        <li>list35</li>
        <li>list36</li>
        <li>list37</li>
        <li>list38</li>
        <li>list39</li>
        <li>list40</li>
      </ul>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeatureView from "./childComps/HomeFeatureView";

  import TabControl from "components/content/tabControl/TabControl";

  import { getHomeMultiData, getHomeGoods } from 'network/home'
    export default {
        name: "Home",
        components:{
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,

            NavBar,
            TabControl,
        },
        data(){
            return {
                banners:[],
                recommends:[],
                goods: {
                    pop: {page: 0, list: []},
                    news: {page: 0, list: []},
                    sell: {page: 0, list: []},
                },
            }
        },
        created() {
            //1 请求轮播图和推荐的数据
            this.getHomeMultiData();
            //2 请求商品数据
            // this.getHomeGoods('pop');
            // this.getHomeGoods('new');
            // this.getHomeGoods('sell');
        },
        methods: {
            getHomeMultiData(){
                getHomeMultiData().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type){
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    //这是使用了push可以直接添加多个数据到数组中
                    // 将数组中的元素一个个取出来，再push到数组中
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                })
            }
        }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /*bottom: -44px;*/
    z-index: 90;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
