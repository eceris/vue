<template>
    <div id="topic">
        <table stype="width : 100%">
            <tr>
                <td v-for="topic in topics" :key="topic.id">
                    <b-card v-bind:title="topic.title"
                            v-bind:img-src="topic.thumbnail"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2">
                        <p class="card-text">{{topic.description}}</p>
                        <b-button variant="primary" v-on:click="get">See it!</b-button>
                    </b-card>
                </td>
            </tr>
            <tr></tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "topic",
        data: function () {
            return {
                topics: [
                    {
                        id: 1,
                        title: "201808 제주",
                        subTitle: "구찌 태교 여행",
                        description: "구찌 나오기 전에 마지막 태교여행",
                        thumbnail: "https://picsum.photos/600/300/?image=25"
                    }, {
                        id: 2,
                        title: "201807 지리산",
                        subTitle: "주라기 멤버",
                        description: "주라기 멤버들과 여름 휴가",
                        thumbnail: "https://picsum.photos/600/300/?image=25"
                    }
                ]
            }
        },
        methods: {
            get: function () {
                console.log('test');
                debugger;
                // this.$http.get('www.naver.com')
                //     .then( result => {
                //         return result;
                //     });
            }


        }
    }
</script>

<style scoped>

</style>