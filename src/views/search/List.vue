<template>
    <div>
        <div class="search" >
            <van-nav-bar left-arrow style="width: 10%;"/>
            <van-search v-model="value" style="width: 80%" @click="showPopup" placeholder="关键词 景点" />
            <van-icon name="location-o" style="width: 10%;"/>
            <van-popup v-model="show">内容</van-popup>
        </div>
        <van-tabs v-model="title">
            <van-tab title="位置" name="a"></van-tab>
            <van-tab title="排序" name="b"></van-tab>
            <van-tab title="排序" name="c"></van-tab>
            <van-tab title="排序" name="d"></van-tab>
        </van-tabs>
        <van-grid :column-num="2">
            <van-grid-item>
                <van-image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2332174313,934569096&fm=26&gp=0.jpg" />
                <h3>3W house</h3>
                <h6>北京·朝阳区</h6>
                <h5>RMB 199 每晚</h5>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601815032531&di=509d24ebe5bce43662b58d8a3335e467&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F09%2F01%2F147269865611192868.JPEG"/>
                <h3>3W house</h3>
                <h6>北京·朝阳区</h6>
                <h5>RMB 199 每晚</h5>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601815032531&di=509d24ebe5bce43662b58d8a3335e467&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F09%2F01%2F147269865611192868.JPEG"/>
                <h3>3W house</h3>
                <h6>北京·朝阳区</h6>
                <h5>RMB 199 每晚</h5>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601815032531&di=509d24ebe5bce43662b58d8a3335e467&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F09%2F01%2F147269865611192868.JPEG"/>
                <h3>3W house</h3>
                <h6>北京·朝阳区</h6>
                <h5>RMB 199 每晚</h5>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                value: '',
                show: false,
                title: 'a',
            }
        },
        methods: {
            showPopup() {
                this.show = true;
            },
        },
        mounted: {

        }
    }
</script>

<style scoped>
.search {
    margin-top: 20px;
    margin-left: 15px;
}
van-grid {
    margin-top: 40px;
}
</style>