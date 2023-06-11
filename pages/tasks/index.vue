<script lang='ts' setup>
import { UseAPI } from '~/composables';
import { APIParams, FormTask } from '~/models';

const api = new UseAPI()
const getParams = ref<APIParams>({ endpoint: 'tasks' })
const form = ref<FormTask>()

onMounted(async () => await __load())

const __load = async () => {
    try {
        form.value = await api.get<FormTask>(getParams.value)
    } catch(err: any) {
        console.log(err)
    }
}
</script>
<template>
    <div>
        <h1>Tasks</h1>
        {{ form }}
    </div>
    <span class="text-3xl font-bold underline">
        Hello world!
    </span>
</template>
<style lang='scss' scoped>

</style>