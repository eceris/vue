<template>
    <div id="item">
        <table stype="width : 100%">
            <tr>
                <td v-for="item in bundle"
                    :key="item.id">
                    <b-card v-bind:title="item.title"
                            v-bind:img-src="item.src"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2">
                        <p class="card-text">{{item.content}}</p>
                        <b-button href="#" variant="primary">{{item.button}}</b-button>
                    </b-card>
                </td>
            </tr>
            <tr></tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Item",
        data: function () {
            return {
                bundle: [
                    {
                        "id": 1,
                        "title" : "201808 제주",
                        "src": "https://picsum.photos/600/300/?image=25",
                        "content": "구찌 나오기 전에 마지막 태교 여행",
                        "button": "See it!"
                    }, {
                        "id": 2,
                        "title" : "201807 지리산",
                        "src": "https://picsum.photos/600/300/?image=25",
                        "content": "주라기 멤버들과 여름 휴가",
                        "button": "See it!"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>