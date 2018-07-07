<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Categories">
        </ActionBar>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
                <Label v-for="name in names" v-bind:text="name" class="item btn btn-primary"></Label>
            </StackLayout>
        </ScrollView>
    </Page>
</template>


<script>
    export default {
        computed: {
            names () {
                return this.$store.state.categories.categories.map(c => c.name);
            }
        }
    };

</script>

<style scoped>
    .item {
        margin: 20;
        font-size: 30;
    }
</style>