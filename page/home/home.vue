<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          <ul class="smart-artiles" id="articleList">
            <li v-for="item in lists" :key="item.id">
              <div class="point">+{{item.hits}}</div>
              <div class="card">
                <h2><a :href="item.url" target="_blank">{{item.title}}</a></h2>
                <div>
                  <ul class="actions">
                    <li>
                      <time class="timeago">{{item.moduleName}}</time>
                    </li>
                    <li class="tauthor">
                      <a href="#" target="_blank" class="get">Sky</a>
                    </li>
                    <li><a>+收藏</a></li>
                    <li>
                      <span class="timeago">{{item.summary}}</span>
                    </li>
                    <li>
                      <span class="timeago"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div id="pagerBottom" class="smart-pager" v-if="isLoading">
            <image src="../../asset/images/loading.gif"></image>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style>
  @import "home.css";
</style>
<script type="text/babel">
  import Article from 'mocks/article/list';
  export default {
    components: {

    },
    data(){
      return {
        isFinish: false,
        isLoading : false,
        pageIndex: 1,
        pageSize: 10,
        list: []
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      fetch(){
        Promise.resolve(Article.getPage(this.pageIndex, this.pageSize)).then(res=> {
        //this.$http.get(`/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=> {
          console.log('res', res);
          if(res.list && res.list.length){
            this.total = res.total;
            this.list = this.list.concat(res.list);
          }else{
            this.isFinish = true;
          }
          this.isLoading = false;
        });
      },
      loadPage(){
        if (!this.isFinish && !this.isLoading) {
          this.isLoading = true;
          this.pageIndex++;
          setTimeout(()=>{
            this.fetch();
          }, 1500);
        }
      }
    },
    mounted() {
      this.loadPage();
      window.addEventListener('scroll', ()=>{
        this.loadPage();
      }, false);
    }
  }
</script>

